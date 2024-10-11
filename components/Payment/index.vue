<script setup lang="ts">
import sber from '@/assets/icons/banks/sber.svg?url'
import master from '@/assets/icons/banks/master.svg?url'
import visa from '@/assets/icons/banks/visa.svg?url'
import mir from '@/assets/icons/banks/mir.svg?url'


const paymentList = [
  sber,
  master,
  visa,
  mir,
]
</script>

<template>
  <div class="bg-white text-gray rounded-[8px] p-5 w-[261px] h-min">
    <p class="text-center text-[13px]">
      Принимаем к оплате
    </p>
    <div class="flex mt-2 justify-between max-h-[26px]">
      <img v-for="(item, index) in paymentList" :key="index" :src="item" alt="">
    </div>
    <p class="mt-6 text-base text-center">
      Я из другой страны — <br>
      <span class="text-orange">как оплатить?</span>
    </p>
    <Button class="mt-6">Купить квест 500&nbsp;₽</Button>
  </div>
</template>

<style scoped>

</style>