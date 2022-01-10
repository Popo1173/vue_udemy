<template>
  <div>
    <h2>HeaderHome</h2>
    <nav>
      <router-link to="/" active-class="link--active" exact class="link">
        HeaderHome-Home-Navi
      </router-link>
      <router-link to="/users" active-class="link--active" exact class="link">
        HeaderHome-Users-Navi
      </router-link>
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