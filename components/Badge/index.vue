<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <div class="py-2 px-3 bg-[#1C1C1C]/5 rounded-[3px] text-[14px] text-gray hover:text-black hover:bg-[#1C1C1C]/15 cursor-pointer select-none">
    {{ text }}
  </div>
</template>

<style scoped>

</style>