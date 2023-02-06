<template>
  <div>
    <button>Create User</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "createUserButton",
};
</script>

<style lang="scss" scoped>
button {
  color: #000000;
  border: 1px solid #000000;
  background: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    color: #fff;
    background: #000000;
  }
}
</style>
