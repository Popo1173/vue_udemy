<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  //配列で定義
  //props: ["totalNumber"],

  /*
    オブジェクトで定義
    dataのバリデーションをかけることができる
    他の属性もつけることができる
  */
  props: {
    // totalNumber: String
    totalNumber: {
      type: Number,
      // defaultは関数にして返す必要がある
      default: function (){
        // オブジェクトの場合
        return {
          number: 5
        }
        // 配列の場合
        // return [

        // ] 
      }
    },
    //複数かける
    test: {}
  },

  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },

  methods: {
    increment() {
      // this.number +=1;
      //親にデータを渡す 第一引数は任意（emitの名前）、第二引数はデータ
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
};
</script>
