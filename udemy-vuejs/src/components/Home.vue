<template>
  <div>
    <p v-border="'25px'">Home</p>
    <!-- 引数(dotted).修飾士 = {オブジェクトを渡す} -->
    <p v-border:dotted.round.shadow="{ width: '5px', color: 'red' }">
      {{ tmpData }}
    </p>
    <p>大文字</p>
    <h2>{{ title | upperCase }}</h2>
    <h3>{{ subTitle | upperCase }}</h3>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber />
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],

  data() {
    return {
      tmpData: "ハロー",
    };
  },

  created() {
    console.log("created in components");
  },

  components: {
    CountNumber,
  },

  directives: {
    //関数
    //elは、カスタムディレクティブが紐づく要素
    border(el, binding) {
      //valueでデータを受けとって、返す
      el.style.borderWidth = binding.value.Width;
      el.style.borderColor = binding.value.color;

      //arg（引数）でデータを受けとって、返す
      el.style.borderStyle = binding.arg;

      //modifieでデータを受けとって、返す
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0.26)";
      }
    },
  },
};
</script>
