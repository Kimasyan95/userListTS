<template>
  <section class="form">
    <div class="container">
      <form action="" v-on:submit.prevent="submitForm(userObj)">
        <div class="row">
          <div class="col-12">
            <h1>Create User</h1>
          </div>
          <userFormItem
            v-for="(value, name, index) in userObj"
            v-bind:key="index"
            v-bind:name="name"
            v-model="userObj[name]"
            v-on:updateInputValue="updateValue"
          />
          <div class="col-12">
            <createUserButton />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import createUserButton from "@/components/createUserButton.vue";
import userFormItem from "@/components/userFormItem.vue";
import { postData } from "@/helpers/services";

export default {
  components: {
    createUserButton,
    userFormItem,
  },
  data: () => ({
    userObj: {
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      company: "",
      city: "",
      street: "",
      suite: "",
      zipcode: "",
    },
  }),
  methods: {
    submitForm(obj) {
      const data = {
        name: obj.name,
        username: obj.username,
        email: obj.email,
        phone: obj.phone,
        website: obj.website,
        company: {
          name: obj.company,
        },
        address: {
          city: obj.city,
          street: obj.street,
          suite: obj.suite,
          zipcode: obj.zipcode,
        },
      };
      postData("https://jsonplaceholder.typicode.com/users", data).then(() => {
        const values = Object.values(this.userObj).filter(
          (el) => el.length < 1
        );

        if (values.length > 0) {
          alert("Заполните все поля");
          return;
        } else {
          const form = document.querySelector("form");
          form.reset();

          for (let key in this.userObj) {
            this.userObj[key] = "";
          }

          alert("Данные успешно отправлены!");
        }
      });
    },
    updateValue({ prop, value }) {
      this.userObj[prop] = value;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 48px;
  display: block;
}

@media screen and (max-width: 991px) {
  h1 {
    margin-bottom: 32px;
  }
}
</style>
