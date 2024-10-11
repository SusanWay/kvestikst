<script setup lang="ts">
const numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10]

const config = {
  spaceBetween: 30, // Промежуток между слайдами
  slidesPerView: 1, // Количество слайдов, отображаемых одновременно
  scrollbar: {
    el: '.swiper-scrollbar', // Элемент для скроллбара
    hide: false, // Не скрывать скроллбар
    draggable: true, // Позволяет перетаскивать скроллбар
    snapOnRelease: true, // Привязка к слайдам при отпускании
  },
  breakpoints: {
    400: {
      slidesPerView: 1.3, // 1 слайд на экранах меньше 640px
    },
    500: {
      slidesPerView: 1.5, // 1 слайд на экранах меньше 640px
    },
    600: {
      slidesPerView: 2, // 1 слайд на экранах меньше 640px
    },
    768: {
      slidesPerView: 3, // 3 слайда на экранах от 640px до 768px
    },
    1200: {
      slidesPerView: 4, // 4 слайда на экранах от 768px и выше
    },
  },
}

</script>

<template>
  <Swiper v-bind="config" :modules="[SwiperScrollbar]">
    <SwiperSlide class="pb-20" v-for="n in numbers" :key="n">
      <Slide :id="2"/>
    </SwiperSlide>
    <div class="swiper-scrollbar"></div>
  </Swiper>
</template>

<style scoped>
.swiper-scrollbar{
  height: 15px;
}

.swiper-scrollbar::-webkit-scrollbar-track {
  background: rgba(0,0,0,.1); /* Цвет фона */
}

.swiper-scrollbar::-webkit-scrollbar-thumb {
  background: #e8213c; /* Цвет ползунка */
}
</style>