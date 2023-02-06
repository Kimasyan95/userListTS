<template>
  <div class="col-lg-3">
    <div class="user__item">
      <p class="user__item-title">{{ name }}</p>
      <p class="user__item-info">
        {{ value }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "userInfoItem",
  props: {
    name: String,
    value: String,
  },
};
</script>

<style lang="scss" scoped>
.user {
  &__item {
    margin-bottom: 32px;
    &-title,
    &-info {
      margin: 0;
    }

    &-title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 8px;
      text-transform: capitalize;
    }
  }
}
</style>
