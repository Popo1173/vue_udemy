<template>
  <div>
    <p>いいね{{ number }}</p>
    <button @click="aaa">+1</button>
  </div>
</template>

<script>
export default {
data() {
        return {
            number: 5
        }
    },
    methods: {
        aaa() {
            this.number +=1;
        }
    }
}
</script>
