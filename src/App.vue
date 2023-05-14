<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, isPlatform } from '@ionic/vue';
import { StatusBar, Style } from '@capacitor/status-bar';
import { onMounted } from 'vue';

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
