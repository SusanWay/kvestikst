<script setup lang="ts">
interface Link {
  text: string
  link: string
}
interface Props {
  navLinks: Link[]
}


defineProps<Props>()
</script>

<template>
  <nav>
    <ul class="flex gap-2.5 ">
      <li v-for="(item, index) in navLinks" :key="index" class="flex items-center gap-2.5">
        <Icon v-if="index !== 0" name="nav/arrowRight" size="16"/>
        <nuxt-link :to="item.link" class="text-gray text-[14px] font-semibold hover:text-black">
          {{ item.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>