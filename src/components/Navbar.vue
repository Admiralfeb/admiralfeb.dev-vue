<template>
  <nav class="navbar">
    <router-link id="homeImage" to="/">
      <img src="@/assets/img/Z-img.png" alt="logo" width="55" />
    </router-link>
    <router-link class="nav-link" mat-icon-button to="/"
      ><span class="material-icons"> home </span></router-link
    >
    <router-link class="nav-link" mat-button to="/resume"
      ><span class="mat-button-wrapper">Resume</span></router-link
    >
    <router-link class="nav-link" mat-button to="/code"
      ><span class="mat-button-wrapper">Projects</span></router-link
    >
  </nav>
</template>

<style lang="css" scoped>
.navbar {
  /* box-sizing: border-box; */
  max-width: 100%;
  display: flex;
  padding: 5px 10px;
  background-color: var(--bg-color-raised);
  height: auto;
  min-height: auto;
  justify-content: initial;
}

.nav-link {
  background-color: transparent;
  color: #f2f2f2;
  text-decoration: none;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0.5em;
  text-align: center;
}
.nav-link.router-link-active {
  background-color: var(--primary);
  color: white;
}
.nav-link:hover {
  background-color: #ddd;
  color: black;
  cursor: pointer;
}

#homeImage {
  padding: 0;
  float: left;
  display: block;
  margin-right: 1em;
  width: 52px;
}
</style>
