<template>
  <div class="col-lg-4">
    <div class="users__item" v-on:click="goToUserPage">
      <p class="users__name">{{ user.name }}</p>
      <p class="users__username">@{{ user.username }}</p>
      <p class="users__email">{{ user.email }}</p>
      <p class="users__phone">{{ user.phone }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";

export default {
  name: "usersListItem",
  props: {
    user: { type: Object },
  },
  methods: {
    goToUserPage(): void {
      router.push({
        name: "userPage",
        params: { id: this.user["id"] },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.users {
  &__item {
    margin-bottom: 20px;
    padding: 24px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &__name {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
    color: #000000;
  }

  &__username {
    font-size: 12px;
    margin-bottom: 16px;
  }

  &__email,
  &__phone {
    font-size: 14px;
  }

  &__email {
    margin-bottom: 4px;
  }
}
</style>
