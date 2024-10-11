<script setup lang="ts">
const navBarList = [
  {
    text: 'Контакты',
    icon: 'nav/phone',
    link: '#',
  },
  {
    text: 'Блог',
    icon: 'nav/book',
    link: '#',
  },
  {
    text: 'Заказы',
    icon: 'nav/people',
    link: '#',
  },
]
</script>

<template>
  <header class="sticky top-0 z-20 w-full shadow-lg bg-white">
    <div class="container flex items-center justify-between h-14 mx-auto xl:px-0 px-5">
      <nuxt-link to="/">
        <img src="~/assets/images/logo.svg?url" alt="">
      </nuxt-link>
      <NavBar :nav-bar-list="navBarList"/>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.underline-animation {
  @apply after:bg-red after:h-0.5 after:w-full after:absolute after:left-0 after:bottom-0 after:-translate-y-1 after:transition after:duration-300 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100;
}
</style>
