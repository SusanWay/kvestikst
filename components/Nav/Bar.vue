<script setup lang="ts">
interface NavBarItem {
  text: string
  icon: string
  link: string
}
interface Props {
  navBarList: NavBarItem[]
}

defineProps<Props>()

</script>

<template>
  <nav>
    <ul class="flex gap-x-8">
      <li v-for="(item, index) in navBarList" key="index">
        <nuxt-link :to="item.link">
          <Icon :name="item.icon" class="mx-auto" />
          <p class="text-[10px] text-gray font-semibold hover:text-black">
            {{ item.text }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>