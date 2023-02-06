<template>
  <div>
    <userList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userList from "@/components/userList.vue";

export default defineComponent({
  name: "UserListView",
  components: {
    userList,
  },
});
</script>
