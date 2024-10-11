<script setup lang="ts">
</script>

<template>
  <div class="mx-auto flex h-full min-h-screen max-w-[2560px] flex-col">
    <LayoutHeader />
    <div class="flex-auto bg-[#F5F5F5]">
      <slot />
    </div>
    <LayoutFooter class="bg-[#F5F5F5]"/>
  </div>
</template>
