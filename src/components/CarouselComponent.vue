<template>
    <div>
        <Splide :has-track="false" :rewind="true" :options="splideOptions">
            <div class="bg-white md:rounded-xl p-1.5">
                <div class="max-w-screen-2xl mx-auto px-2 lg:px-20 md:px-10">
                    <SplideTrack>
                        <SplideSlide>
                            <img class="rounded-xl sm:hidden" src="@/assets/images/mobile.jpg" alt="Sample 1" />
                            <img class="rounded-xl hidden sm:block" src="@/assets/images/web.jpg" alt="Sample 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img class="rounded-xl sm:hidden" src="@/assets/images/mobile-1.jpeg" alt="Sample 1" />
                            <img class="rounded-xl hidden sm:block" src="@/assets/images/web-1.jpeg" alt="Sample 1" />
                        </SplideSlide>
                    </SplideTrack>
                </div>
                <div class="max-w-4xl mx-auto pt-10">
                    <div class="splide__pagination"></div>
                </div>
            </div>
        </Splide>
    </div>
</template>
<script setup lang="ts">
import { SplideTrack } from '@splidejs/vue-splide';

const splideOptions = {
  type: 'loop',
  autoplay:true,
  speed: 1000,
  arrows: false,
  gap: "4em",
  pagination: true,
  perPage: 1
};

</script>
<style>
.splide__pagination__page{
    border: 1.5px solid var(--ion-color-lightgray);
    background-color: rgb(228 228 231);
    width: 7px !important;
    height: 7px !important;
    transform: scale(1.4)
}
.splide__pagination__page.is-active{
    border: 1.5px solid var(--ion-color-primary);
    background-color: white;
    width: 7px !important;
    height: 7px !important;
}
</style>