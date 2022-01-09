<template>
  <div>
    <h3>Home.vue</h3>
    <button @click="toUsers">Usersページにいく</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // this.$router.push("users");
      this.$router.push({
        name: "user-id-profile",
        params: { id: 1 }
      })
    },
  },
};
</script>
