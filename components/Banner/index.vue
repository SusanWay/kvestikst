<script setup lang="ts">
const badgeList = [
  {
    text: 'квест',
  },
  {
    text: 'для 2 человек',
  },
  {
    text: 'для дома',
  },
  {
    text: 'сложность 7/10',
  },
]
</script>

<template>
  <div class="bg-white text-gray rounded-lg w-full lg:pl-6 pb-3 sm:py-8 relative">
    <div class="relative lg:absolute right-0 top-0 w-full lg:w-auto lg:h-full z-0">
      <p class="absolute top-2.5 left-3 lg:left-auto lg:right-3 text-gray bg-white/70 py-1 px-3 text-[10px] rounded-[8px]">
        Самый популярный
      </p>
      <img class="h-full w-full lg:w-auto" src="@/assets/images/image.jpg" alt="">
      <div class="absolute inset-0 lg:bg-[linear-gradient(to_left,_transparent_70%,_rgba(255,255,255,0.5)_80%,_white_100%)] bg-[linear-gradient(to_bottom,_transparent_70%,_rgba(255,255,255,0.5)_80%,_white_100%)]"></div>
    </div>
      <p class="pl-1.5 relative z-10 font-extrabold text-[28px] sm:text-title-md text-center lg:text-start">
        Стрелы Амура, 18+
      </p>
      <div class="mt-5 py-1.5 relative justify-center lg:justify-start mx-auto max-w-[250px] lg:mx-0 z-10 lg:max-w-[297px] flex gap-1.5 flex-wrap">
        <Badge v-for="(item, index) in badgeList" :key="index" :text="item.text"/>
      </div>
      <p class="mt-3 relative px-2 lg:px-0 z-10 mx-auto lg:mx-0 lg:max-w-[297px] max-w-[500px] text-center lg:text-start text-base">
        Романтический квест по поиску подарка для второй половинки: мужа, жены, парня или девушки. Чтобы собрать 7 стрел бога любви Амура и разыскать подарок, игроку нужно выполнить задания древних богов.
      </p>
  </div>
</template>

<style scoped>

</style>