<template>
    <ion-header :class="{'ion-no-border bg-white':true, 'hidden': !isLoggedIn, '-mt-8': isPlatform('ios') && !isPlatform('mobileweb')}">
    <ion-toolbar class="border-b-2 pb-2.5 border-gray-200">
      <div class="max-w-7xl mx-auto flex">
        <div class="flex w-full mx-4 space-x-4">
          <div>
            <h1 class="font-bold text-base">Hailah Alrashed</h1>
            <p class="text-zain-primary">Edit Account Details</p>
          </div>
        </div>
        <ion-buttons class="mx-4" slot="end">
          <ion-button>
            <ion-icon :icon="chevronDown"></ion-icon>
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
import { computed } from 'vue';

const store = useStore();
const isLoggedIn = computed(() => store.getters['isLoggedIn']);
</script>