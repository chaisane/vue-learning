<script setup lang="js">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav class="navbar navbar-expand-sm bg-light navbar-light flex-wrap">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/template-syntax">Template Syntax</RouterLink>
        <RouterLink to="/reactivity-fundamentals">Reactivity Fundamentals</RouterLink>
        <RouterLink to="/computed-properties">Computed Properties</RouterLink>
        <RouterLink to="/class-and-style-bindings">Class and Style Bindings</RouterLink>
        <RouterLink to="/conditional-rendering">Conditional Rendering</RouterLink>
        <RouterLink to="/list-rendering">List Rendering</RouterLink>
        <RouterLink to="/event-handling">Event Handling</RouterLink>
        <RouterLink to="/form-input-bindings">Form Input Bindings</RouterLink>
        <RouterLink to="/watchers">Watchers</RouterLink>
        <RouterLink to="/template-refs">Template Refs</RouterLink>
        <RouterLink to="/components-basics">Components Basics</RouterLink>
        <RouterLink to="/lifecycle-hooks">Lifecycle Hooks</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
