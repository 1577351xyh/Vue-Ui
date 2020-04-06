Array.prototype.map = Array.prototype.map || function (cb) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i))
  }
  return arr;
}


Array.prototype.reduce = Array.prototype.reduce || function (cb, initial) {
  if (this.length == 0) return;
  var i;
  if (initial === undefined) {
    var result = this[0];
    i = 1;

  } else {
    var result = initial;
    i = 0;
  }
  for (; i < this.length; i++) {
    result = cb(result, this[i], i)
  }
}


Array.prototype.filter = Array.prototype.filter || function (cb, initial) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      result.push(this[i])
    }
  }
  return result;
}


Array.from = Array.from || function (obj) {
  if (typeof obj.length != 'number') {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(obj[i]);
    }
    return result;
  } else {
    return []
  }
}


//去重
// uniQue = function (arr) {
//   var newArr = []
//   for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) == -1) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }


// function unique(arr) {
//   return arr.filter(function (item, index, arr) {
//     //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
//     return arr.indexOf(item, 0) === index;
//   });
// }


// [...new Set(arr)]

// function unique(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1)
//         j--;
//       }
//     }
//   }
//   return arr;
// }


//单数据类型的数组去重
function uniqueOnes (arr) {
  const object = {};
  arr.map(item => {
    object[item] = true
  })
  return Object.keys(object).map(s => parseInt(s, 10))
}





//排序
function quickSort (arr) {
  if (arr.length <= 1) return arr
  let index = Math.floor(arr.length / 2)
  let indexValue = arr.splice(index, 1)
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < indexValue) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(indexValue, quickSort(right))
}
//es6排序
function sort(arr) {
  arr.sort((a, b) => {
    return a - b
  })
}


//冒泡排序
function sort(arr) {
  for (var j = 0; j < arr.length - 1; j++) {
    for (var i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

// merge
function merge(dest, src) {
  for (let name in src) {
    if (typeof src[name] == 'object') {
      for (let name2 in src[name]) {
        //如果defalut没有
        if (!dest[name]) {
          dest[name] = {}
        }
      }
      merge(dest[name], src[name])
    } else {
      if (src[name] !== undefined) {
        dest[name] = src[name];
      }
    }
  }
}

function clone(obj) {
  let obj2;
  if (typeof obj == 'object') {
    if (obj instanceof Array) {
      obj2 = []
      for (let i = 0; i < obj.length; i++) {
        obj2[i] = clone(obj[i])
      }
    } else {
      obj2 = {}
      for (let key in obj) {
        obj2[key] = clone(obj[key])
      }
    }
    return obj2;
  } else {
    return obj
  }
}

function getElemen(obj) {
  assert(obj, 'app is required');
  if (typeof obj === 'string') {
    let el = document.querySelector(obj);
    assert(el, `${obj} not found`)
    return el
  } else if (obj instanceof HTMLElement) {
    return obj;
  } else {
    assert(false, 'root is invaild')
  }
}

//生成uid
export function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";
  var uuid = s.join("");   
  return uuid;
}
// 月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
// 例子：   
// (new Date()).Format("yyyy-MM-dd HH:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d H:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}
// var time1 = new Date().format("yyyy-MM-dd HH:mm:ss");  