<script setup lang="ts">
interface Props {
  id: number
}

defineProps<Props>()
</script>

<template>
   <div class="w-[261px] py-[30px] px-6 rounded-[8px] bg-white text-gray">
     <p class="text-gray/80 text-13px">
       14 февраля 2024
     </p>
     <p class="text-[14px] mt-[16px] font-semibold">
       Константин (12 игроков 36-50 лет)
     </p>
     <div class="flex gap-x-2 mt-1.5">
       <Icon class="text-orange" name="star" size="12" v-for="n in 5" :key="n"/>
     </div>
     <p class="text-base text-gray text-[14px] font-bold mt-[16px]">
       День святого Валентина
     </p>
     <p class="mt-[16px] ">
       Понравилось, что вопросы хоть и объединены одной темой, были не похожи друг на друга. Разные страны и эпохи — есть где разгуляться фантазии. И если сначала мы пытались искать правильные ответы, то по ходу игры стало интереснее и смешнее запутать других игроков.
     </p>
   </div>
</template>

<style scoped>

</style>