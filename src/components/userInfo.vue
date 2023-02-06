<template>
  <section class="user">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="user__header">
            <h1 class="user__name">{{ user.name }}</h1>
            <span class="user__username">@{{ user.username }}</span>
          </div>
        </div>
        <userInfoItem
          v-for="(value, name, index) in userDetails"
          v-bind:key="index"
          v-bind:value="value"
          v-bind:name="name"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { getData } from "@/helpers/services";
import userInfoItem from "./userInfoItem.vue";

interface User {
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}

export default {
  name: "userInfo",
  components: {
    userInfoItem,
  },
  data: () => ({
    user: {} as User,
  }),
  mounted() {
    getData(
      `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
    ).then(
      ({ name, username, email, phone, website, address, company }: User) =>
        (this.user = {
          name,
          username,
          email,
          phone,
          website,
          company: company.name,
          address: `${address.suite} ${address.street}, ${address.city}, ${address.zipcode}`,
        })
    );
  },
  computed: {
    userDetails(): object {
      return {
        email: this.user["email"],
        phone: this.user["phone"],
        website: this.user["website"],
        company: this.user["company"],
        address: this.user["address"],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  &__header {
    margin-bottom: 48px;
    position: relative;
  }

  &__name {
    margin-bottom: 8px;
    display: inline-block;
  }

  &__username {
    position: relative;
    right: -16px;
    top: -20px;
  }
}

@media screen and (max-width: 991px) {
  .user {
    &__name {
      display: block;
    }
    &__username {
      position: static;
    }
  }
}
</style>
