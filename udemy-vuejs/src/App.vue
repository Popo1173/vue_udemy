<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>      
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    
    <!-- 
      動的コンポーネントは切り替わる度にdestroyedされるため、キャッシュする仕組みをいれる
      それが<keep-alive>タグ
      通常：<component :is="currentComponent"></component>
    -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
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
      currentComponent: "Home"
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