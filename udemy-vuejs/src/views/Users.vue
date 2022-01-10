<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr />
    <h1>User NO.{{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?=ja#next-user'">
      次のユーザー
    </router-link>
    <br />
    <router-link :to="{ name: 'user-id-profile', params: { id: Number(id) + 1}, query: {lang: 'ja', page: 2} }">
      次のユーザーをオブジェクトで渡す1
    </router-link>

    <router-view></router-view>
    <div style="height: 700px; margin-top:500px;">
      <router-link 
        id="next-user" 
        :to="{ 
          name: 'user-id-profile', 
          params: { id: Number(id) + 1}, 
          query: {lang: 'ja', page: 2},
          hash :'#next-user'
        }"
      >
      次のユーザーをオブジェクトで渡す2
    </router-link>

    </div>
  </div>
</template>

<script>
export default {
  //propsすることで、他コンポーネントからでも利用できる
  //中身は受け取るidを入れる
  props: ["id"],
};
</script>
