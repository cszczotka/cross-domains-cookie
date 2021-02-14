<template>
    <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/hub" class="nav-link">Hub</router-link></li>
            <li class="nav-item"><router-link to="/client" class="nav-link">Client</router-link></li>
            <li class="nav-item"><router-link to="/api-client" class="nav-link">Api Client</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view class="view"></router-view>
    </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
