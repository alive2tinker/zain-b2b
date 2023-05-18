<template>
  <ion-app>
    <ion-router-outlet :key="router.currentRoute"/>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, isPlatform } from '@ionic/vue';
import { StatusBar, Style } from '@capacitor/status-bar';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  if (isPlatform('capacitor')) {
    try {
      const setStatusBarStyleDark = async () => {
        await StatusBar.setStyle({ style: Style.Light });
      };
      setStatusBarStyleDark();
    } catch (e) {
      //
    }
  }
})
</script>
