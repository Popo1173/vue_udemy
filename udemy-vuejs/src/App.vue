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
      <label for="title">タイトル</label>
      <input 
        id="title" 
        type="text" 
        v-model.lazy="eventData.title"
      >
      <p>{{eventData.title}}</p>
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
        title: "タイトル"
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