<template>
  <div>
    <label for="title">タイトル</label>
    <!-- inputに入力された内容を@inputイベントで発火させて$eventで親に渡す-->
    <input
      id="title"
      type="text"
      @input="$emit('input', $event.target.value)"
    />
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>
