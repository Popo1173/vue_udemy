<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr />
    <h1>User NO.{{ id }}</h1>
  </div>
</template>

<script>
export default {
  //propsすることで、他コンポーネントからでも利用できる
  //中身は受け取るidを入れる
  props: ["id"],
};
</script>
