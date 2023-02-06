<template>
  <div>
    <userForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userForm from "@/components/userForm.vue";

export default defineComponent({
  name: "userFormPage",
  components: {
    userForm,
  },
});
</script>
