<template>
  <div>
    <p>CountNumber</p>
    <h2>{{ title | upperCase }}</h2>
    <h3>{{ subTitle | upperCase }}</h3>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
//「@/」で/srcと同じで使える
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],

  created() {
    console.log("created in components");
  },
};
</script>
