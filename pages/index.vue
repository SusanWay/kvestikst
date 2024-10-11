<script setup lang="ts">
const navLinks = [
  {
    text: 'Главная',
    link: '#',
  },
  {
    text: 'Каталог',
    link: '#',
  },
]
</script>

<template>
  <div class="lg:mt-6 container mx-auto">
    <NavBreadCrumb class="hidden lg:block  px-5 xl:px-0" :nav-links="navLinks"/>
    <div class="lg:mt-8 flex gap-6 md:px-5 xl:px-0">
      <Banner/>
      <Payment class="hidden lg:block" />
    </div>
    <div class="mt-4 sm:mt-8 lg:mt-12 px-5 xl:px-0">
      <p class="text-gray font-extrabold text-[28px]">
        Отзывы клиентов
      </p>
      <Feedback class="mt-6" />
    </div>
  </div>
</template>

<style scoped>

</style>