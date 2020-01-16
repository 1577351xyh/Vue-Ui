<template>
  <div>
    <Form-sample></Form-sample>
  </div>
</template>

<script>
import FormSample from "./Form/index";

export default {
  name: "",
  data() {
    return {
      selected: ["home"]
    };
  },
  components: {
    FormSample,
  }
};
</script>

<style scoped lang="scss">
</style>
