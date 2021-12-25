<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>      
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>    
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントカスタム</h2>
      <label for="MaxNumber">タイトル</label>
      <input 
        id="MaxNumber" 
        type="number" 
        v-model.number="eventData.MaxNumber"
      >
      <p>{{ typeof eventData.MaxNumber}}</p>
    </div>
    <div>
      <h2>主催者</h2>
      <label for="host">タイトル</label>
      <input 
        id="host" 
        type="text" 
        v-model.trim="eventData.host"
      >
      <p>{{ eventData.host}}</p>
    </div>    
  </div>
</template>

<script>
  //ローカルコンポーネント登録
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      eventData: {
        title: "タイトル",
        MaxNumber: 0,
        host: ""

      }
    }
  },
  
  //ローカルコンポーネント登録
  components: {
    LikeHeader,
    About,
    Home
  },

  methods: {
    incrementNumber(value) {
      //子コンポーネントの第二引数をとる事ができる
      //this.$emit("my-click", this.totalNumber + 1);
      //this.totalNumber + 1)
      this.number = value
    }
  }
}
</script>