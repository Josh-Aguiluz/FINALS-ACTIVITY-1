<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">
          <img alt="Vue logo" src="./assets/logo.png" class="logo">
          GPU Showcase
        </router-link>
        <div class="nav-links">
          <router-link to="/user">User Form</router-link>
          <router-link to="/student">Student Form</router-link>
          <router-link to="/admin">Admin Form</router-link>
          <router-link to="/manage">Manage Data</router-link>
        </div>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Global Styles */
:root {
  --nvidia-green: #76b900;
  --amd-red: #ed1c24;
  --dark-bg: #1a1a1a;
  --light-bg: #2c2c2c;
  --text-color: #f0f0f0;
  --border-color: #444;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--dark-bg);
  color: var(--text-color);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  padding: 2rem;
}

/* Header and Navigation */
header {
  background-color: var(--light-bg);
  border-bottom: 1px solid var(--border-color);
  padding: 0 2rem;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 70px;
}

nav a {
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a.router-link-exact-active {
  color: var(--nvidia-green);
}

.nav-links a {
  margin-left: 20px;
}
.nav-links a:hover {
  color: var(--amd-red);
}

.logo {
  height: 30px;
  vertical-align: middle;
  margin-right: 10px;
}

/* General Container and Form Styles */
.container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--light-bg);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  text-align: center;
}

h1, h2 {
  font-weight: 300;
  letter-spacing: 1px;
}

input[type="text"],
input[type="email"],
input[type="file"] {
  display: block;
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px auto;
  background: var(--dark-bg);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-color);
  font-size: 1rem;
}

input[type="submit"], button {
  background: var(--nvidia-green);
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

input[type="submit"]:hover, button:hover {
  background: #8cd400;
}
</style>