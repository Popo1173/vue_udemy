<template>
  <div>
    <LikeHeader>
      <p>おはよう</p>
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
      <p>こんにちわ</p>
      <p>こんばんわ</p>
    </LikeHeader>
    
    <!--
      子コンポーネントからデータを受け取る 
      v-on:my-click="number = $event"
      イベントをnumberに代入する
      -->
    <!-- <LikeNumber :totalNumber="number" @my-click="number = $event"></LikeNumber> -->

    <!-- metodsで書く場合 -->
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>

    <LikeNumber :totalNumber="number"></LikeNumber>
  </div>
</template>

<script>
  //ローカルコンポーネント登録
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      number: 10
    }
  },
  
  //ローカルコンポーネント登録
  components: {
    LikeHeader
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