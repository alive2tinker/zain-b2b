<template>
  <ion-page>
    <ion-tabs @ionTabsDidChange="handleTabChange">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="md:hidden">
        <ion-tab-button tab="home" href="/tabs/home">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="10" :fill="currentTab === 'home' ? 'currentColor' : 'white'" />
            <path d="M10 16.5V24C10 25.6569 11.3431 27 13 27H23C24.6569 27 26 25.6569 26 24V16.5"
              :stroke="currentTab == 'home' ? 'white' : '#323232'" stroke-width="1.3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M8 18L18 9L28 18" :stroke="currentTab == 'home' ? 'white' : '#323232'" stroke-width="1.3"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 27V21.5H16V27" :stroke="currentTab == 'home' ? 'white' : '#323232'" stroke-width="1.3"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </ion-tab-button>

        <ion-tab-button tab="dashboard" href="/tabs/dashboard">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="10" :fill="currentTab === 'dashboard' ? 'currentColor' : 'white'" />
            <path d="M8 25.5L28 25.5" :stroke="currentTab === 'dashboard' ? 'white' : '#323232'" stroke-width="1.3"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 14.5C9 13.9477 9.44772 13.5 10 13.5H12C12.5523 13.5 13 13.9477 13 14.5V25.5H9V14.5Z"
              :stroke="currentTab === 'dashboard' ? 'white' : '#323232'" stroke-width="1.3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M23 16.5C23 15.9477 23.4477 15.5 24 15.5H26C26.5523 15.5 27 15.9477 27 16.5V25.5H23V16.5Z"
              :stroke="currentTab === 'dashboard' ? 'white' : '#323232'" stroke-width="1.3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M16 9.5C16 8.94772 16.4477 8.5 17 8.5H19C19.5523 8.5 20 8.94772 20 9.5V25.5H16V9.5Z"
              :stroke="currentTab === 'dashboard' ? 'white' : '#323232'" stroke-width="1.3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </ion-tab-button>

        <ion-tab-button tab="support" href="/tabs/support">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="10" :fill="currentTab === 'support' ? 'currentColor' : 'white'" />
            <path
              d="M18 19.25V19C18 18.183 18.505 17.74 19.011 17.4C19.505 17.067 20 16.633 20 15.833C20 14.728 19.105 13.833 18 13.833C16.895 13.833 16 14.728 16 15.833"
              :stroke="currentTab === 'support' ? 'white' : '#323232'" stroke-width="1.3" stroke-linecap="round"
              stroke-linejoin="round" />
            <circle cx="18" cy="18" r="10" :stroke="currentTab === 'support' ? 'white' : '#323232'" stroke-width="1.3"
              stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M17.999 22C17.861 22 17.749 22.112 17.75 22.25C17.75 22.388 17.862 22.5 18 22.5C18.138 22.5 18.25 22.388 18.25 22.25C18.25 22.112 18.138 22 17.999 22"
              :stroke="currentTab === 'support' ? 'white' : '#323232'" stroke-width="1.3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/tabs/settings">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="10" :fill="currentTab === 'settings' ? 'currentColor' : 'white'" />
            <path
              d="M26.4331 15.4653H25.1427C24.9584 14.8202 24.6819 14.175 24.4054 13.622L25.3271 12.7003C25.6036 12.4238 25.6036 12.0552 25.3271 11.7787L23.2994 9.75103C23.0229 9.47453 22.6543 9.47453 22.3778 9.75103L21.4561 10.6727C20.9031 10.304 20.2579 10.1197 19.6128 9.93536V8.64504C19.6128 8.27638 19.3363 7.99988 18.9676 7.99988H16.1105C15.7418 7.99988 15.4653 8.27638 15.4653 8.64504V9.93536C14.8202 10.1197 14.175 10.3962 13.622 10.6727L12.7003 9.75103C12.4238 9.47453 12.0552 9.47453 11.7787 9.75103L9.75103 11.7787C9.47453 12.0552 9.47453 12.4238 9.75103 12.7003L10.6727 13.622C10.304 14.175 10.1197 14.8202 9.93536 15.4653H8.64504C8.27638 15.4653 7.99988 15.7418 7.99988 16.1105V18.9676C7.99988 19.3363 8.27638 19.6128 8.64504 19.6128H9.93536C10.1197 20.2579 10.3962 20.9031 10.6727 21.4561L9.75103 22.3778C9.47453 22.6543 9.47453 23.0229 9.75103 23.2994L11.7787 25.3271C12.0552 25.6036 12.4238 25.6036 12.7003 25.3271L13.622 24.4054C14.175 24.7741 14.8202 24.9584 15.4653 25.1427V26.4331C15.4653 26.8017 15.7418 27.0782 16.1105 27.0782H18.9676C19.3363 27.0782 19.6128 26.8017 19.6128 26.4331V25.1427C20.2579 24.9584 20.9031 24.6819 21.4561 24.4054L22.3778 25.3271C22.6543 25.6036 23.0229 25.6036 23.2994 25.3271L25.3271 23.2994C25.6036 23.0229 25.6036 22.6543 25.3271 22.3778L24.4054 21.4561C24.7741 20.9031 24.9584 20.2579 25.1427 19.6128H26.4331C26.8017 19.6128 27.0782 19.3363 27.0782 18.9676V16.1105C27.0782 15.7418 26.8017 15.4653 26.4331 15.4653ZM17.5851 20.9031C15.7418 20.9031 14.2672 19.4284 14.2672 17.5851C14.2672 15.7418 15.7418 14.2672 17.5851 14.2672C19.4284 14.2672 20.9031 15.7418 20.9031 17.5851C20.9031 19.4284 19.4284 20.9031 17.5851 20.9031Z"
              :stroke="currentTab === 'settings' ? 'white' : '#323232'" stroke-width="1.3" stroke-miterlimit="10"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonPage, IonRouterOutlet } from '@ionic/vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const currentTab = computed(() => store.getters['currentTab']);

function handleTabChange(e:object) {
  store.dispatch('handleTabChange', e.tab);
}
</script>
