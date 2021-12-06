<template>
  <div>
    <slot name="title">デフォルトタイトル</slot>
    <slot name="number">デフォルトタイトル</slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>