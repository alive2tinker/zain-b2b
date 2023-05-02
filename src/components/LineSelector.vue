<template>
    <ion-header :class="{'ion-no-border bg-white':true, '-mt-8': isPlatform('ios') && !isPlatform('mobileweb')}">
    <ion-toolbar class="border-b ion-no-padding border-gray-200 pt-0" style="--padding-top: -10px !important" v-show="isLoggedIn">
      <div class="max-w-7xl mx-auto flex">
        <div class="flex w-full mx-4 space-x-4">
          <img class="w-[45px] aspect-square rounded-xl" src="https://play-lh.googleusercontent.com/vo3LYx5f9xGcGD_23tnXYLtbShsTveRpKslOiB14QOu95I9A2OkB2wTB_ORd2-RB1E4" alt="">
          <div>
            <h1><b>Hala</b>, Khaled Abdullah</h1>
            <p>1012893784, <span>[Riyadh]</span></p>
          </div>
        </div>
        <ion-buttons class="mx-4" slot="end">
          <ion-button>
            <ion-icon :icon="chevronDown"></ion-icon>
          </ion-button>
        </ion-buttons>
      </div>
    </ion-toolbar>
    <ion-toolbar class="border-b-2 pb-2.5 border-gray-200" v-show="!isLoggedIn">
      <div :class="{'max-w-7xl mx-auto flex':true, 'pt-10': isPlatform('mobile')}">
        <div class="flex w-full mx-4 space-x-4">
          <div>
            <h1 class="text-base font-bold">Login Or Register</h1>
            <p class="text-sm" style="color:#5f5f5f">Anyone can join!</p>
          </div>
        </div>
        <ion-buttons class="mx-4" slot="end">
          <ion-button @click="login">
            <ion-icon :icon="chevronDown" v-show="isLoggedIn"></ion-icon>
            <ion-icon :icon="LoginIcon"  v-show="!isLoggedIn"></ion-icon>
          </ion-button>
        </ion-buttons>
      </div>
    </ion-toolbar>
  </ion-header>
</template>
<script setup lang="ts">
import { IonToolbar, IonHeader, IonButtons, isPlatform} from '@ionic/vue';
import { chevronDown } from 'ionicons/icons';
import { useStore } from 'vuex';
import LoginIcon from '@/assets/icons/LoginIcon.svg'
import { computed } from 'vue';

const store = useStore();
const isLoggedIn = computed(() => store.getters['isLoggedIn']);

function login(){
  store.dispatch('toggleLogin')
}
</script>