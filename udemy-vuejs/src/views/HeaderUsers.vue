<template>
  <div>
    <h2>HeaderUser</h2>
    <nav>
      <router-link to="/" active-class="link--active" exact class="link">
        Header-User-Navi
      </router-link>
      <router-link to="/users" active-class="link--active" exact class="link"
        >Header-User-Navi</router-link
      >
    </nav>
  </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>