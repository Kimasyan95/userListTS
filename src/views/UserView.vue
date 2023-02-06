<template>
  <div>
    <userInfo />
  </div>
</template>

<script lang="ts">
import userInfo from "@/components/userInfo.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserView",
  components: { userInfo },
});
</script>

<style lang="scss" scoped></style>
