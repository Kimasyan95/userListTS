<template>
  <div v-bind:class="setClass">
    <p class="form__name">{{ name }}</p>
    <input
      v-bind:type="inputType"
      v-on:input="updateValue"
      class="form__input"
      v-on:value="name"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "userFormItem",
  props: {
    name: String,
  },
  computed: {
    inputType() {
      if (this.$props.name === "phone" || this.$props.name === "zipcode") {
        return "number";
      } else {
        return "text";
      }
    },
    setClass() {
      if (this.$props.name === "suite" || this.$props.name === "zipcode") {
        return "col-lg-2";
      } else {
        return "col-lg-4";
      }
    },
  },
  methods: {
    updateValue(e) {
      this.$emit("updateInputValue", {
        prop: this.$props.name,
        value: e.target.value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__name {
    margin-bottom: 8px;
    text-transform: capitalize;
  }

  &__input {
    min-height: 40px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border: none;
    margin-bottom: 32px;
    width: 100%;
    padding: 0 20px;
  }
}
</style>
