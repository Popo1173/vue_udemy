<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <!-- <input type="text" :value="message" @input="updateMessage"> -->
    <input type="text" v-model="message">
    <p>{{message}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]),
    // message() {
    //   return this.$store.getters.message;
    // }
    message: {
      //v-modelに入力された時
      get() {
        return this.$store.getters.message;
      },
      //target.valueに入力された値
      set(value) {
        this.$store.dispatch("updateMessage", value)
      }
    }
  },
  
  methods: {
    updateMessage(e){
      this.$store.dispatch("updateMessage", e.target.value);
    },
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 }
      });
    }
  }
};
</script>
