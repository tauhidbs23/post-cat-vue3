<template>
  <div id="nav">
    <router-link to="/">All Posts</router-link> |
    <router-link to="/category">All Categories</router-link> |
    <router-link to="/posttable">post table</router-link> |
    <router-link to="/postmodal">post modal</router-link> |
    <router-link to="/categorytable">category table</router-link> |
    <router-link to="/categorymodal">category modal </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
