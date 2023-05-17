<template>
  <div>
  <slot name="line-selector"></slot>
  </div>
</template>
<script setup lang="ts">
import { IonHeader, IonToolbar, IonLabel, IonIcon, IonTitle, IonButton, IonButtons, IonTabBar, IonTabButton, isPlatform } from '@ionic/vue'
import { computed } from 'vue';
import { useStore } from 'vuex';
import LanguageDropdown from '@/components/LanguageDropdown.vue';
import HomeIcon from '@/assets/icons/home-icon.svg'
import DashboardIcon from '@/assets/icons/dashboard-icon.svg'
import SupportIcon from '@/assets/icons/support-icon.svg'
import SettingsIcon from '@/assets/icons/settings-icon.svg'
import PersonIcon from '@/assets/icons/person-icon.svg'
import { chevronDown } from 'ionicons/icons';

const store = useStore();
const currentTab = computed(() => store.getters['currentTab']);
const isLoggedIn = computed(() => store.getters['isLoggedIn']);

function login(){
  store.dispatch('toggleLogin');
}

function getToTop(tab: any){
    const el = document.getElementById(`ion-content-${tab}`);
    if(el){
      el.scrollToTop(500);
    }
  }
</script>
<style scoped>
ion-tab-bar {
  width: 100% !important;
}

ion-tab-button.tab-selected {
  border-bottom: 2.5px solid var(--ion-color-primary);
  color: black;
}

ion-tab-button:hover {
  --color-selected: black !important;
}

ion-tab-button{
  max-width: 140px !important;
  --padding-start:0px !important;
  --padding-end:0px !important;
  font-size: 18px !important;
}

a.button-native>span.button-inner {
  justify-content: space-between !important;
}
.forcedPadding{
  padding-top: 12px !important;
}
</style>