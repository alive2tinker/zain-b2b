<template>
  <ion-header
    :class="{ 'ion-no-border bg-white': true, '-mt-8': isPlatform('ios') && !isPlatform('mobileweb') }">
    <ion-toolbar :class="{'border-b-[1px] ion-no-padding border-gray-200': true, '-pt-5': isPlatform('ios')}" v-if="isLoggedIn">
      <div class="max-w-7xl mx-auto flex py-[10px]">
        <div class="flex w-full mx-4 space-x-2.5">
          <img class="w-[45px] border-[1.5px] border-gray-200 aspect-square rounded-xl" src="https://pbs.twimg.com/profile_images/1630134657244168194/wEgyvsSS_400x400.jpg" alt="">
          <div>
            <h1><b>Hailah Alrashed</b></h1>
            <p class="text-zain-medium">Edit Account Details</p>
          </div>
        </div>
        <ion-buttons class="mx-4" slot="end">
          <ion-button>
            <ion-icon :icon="chevronForward"></ion-icon>
          </ion-button>
        </ion-buttons>
      </div>
    </ion-toolbar>
    <ion-toolbar :class="{'border-b-[1px] ion-no-padding border-gray-200': true, '-pt-5': isPlatform('ios')}" v-if="!isLoggedIn">
      <div class="max-w-7xl mx-auto flex py-[10px]">
        <div class="flex w-full mx-4 space-x-2.5">
          <div>
            <h1 class="text-base font-semibold">Login Or Register</h1>
            <p class="text-sm" style="color:#5f5f5f">Be a part of Zain Business today!</p>
          </div>
        </div>
        <ion-buttons class="mx-4" slot="end">
          <ion-button @click="login">
            <ion-icon :icon="chevronDown" v-show="isLoggedIn"></ion-icon>
            <svg width="24" height="26" v-show="!isLoggedIn" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.99609 13.226H14.0007" stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 10.1533L14.0013 13.2263L11 16.2993" stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.99805 10.2933V8.51409C5.99862 7.53791 6.67182 6.69774 7.60672 6.50641L18.6113 4.04188C19.2255 3.96923 19.8404 4.17122 20.2987 4.59613C20.757 5.02103 21.0141 5.62761 21.0043 6.26057V20.3963C21.0046 21.0005 20.7443 21.574 20.2932 21.9635C19.842 22.353 19.2459 22.5187 18.6643 22.4162L7.65974 20.4782C6.69931 20.3091 5.99759 19.4561 5.99805 18.4582V16.2693" stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </ion-button>
        </ion-buttons>
      </div>
    </ion-toolbar>
  </ion-header>
</template>
<script setup lang="ts">
import { IonToolbar, IonHeader, IonButtons, isPlatform } from '@ionic/vue';
import { chevronDown, chevronForward } from 'ionicons/icons';
import { useStore } from 'vuex';
import { computed } from 'vue';


const store = useStore();
const isLoggedIn = computed(() => store.getters['isLoggedIn']);

function login(){
  store.dispatch('toggleLogin');
}
</script>