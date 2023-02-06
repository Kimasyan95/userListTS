<template>
  <section class="users">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="users__header">
            <h1>Users</h1>
            <createUserButton v-on:click="createUser" />
          </div>
        </div>
        <userListItem
          v-for="(item, index) in users"
          v-bind:key="index"
          v-bind:user="item"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import createUserButton from "@/components/createUserButton.vue"; // @ is an alias to /src
import userListItem from "@/components/userListItem.vue";
import { getData } from "@/helpers/services";
import router from "@/router";

export default {
  name: "userList",
  components: {
    createUserButton,
    userListItem,
  },
  data: () => ({
    users: {},
  }),
  methods: {
    createUser(): void {
      router.push({ name: "userFormPage" });
    },
  },
  mounted() {
    getData("https://jsonplaceholder.typicode.com/users").then(
      (data) => (this.users = data)
    );
  },
};
</script>

<style lang="scss" scoped>
.users__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 48px;
  align-items: center;
}
</style>
