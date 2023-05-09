<template>
  <ion-page>
    <HeaderContainer>
      <template #line-selector>
        <admin-account></admin-account>
      </template>
    </HeaderContainer>
    <ion-content :fullscreen="true" id="ion-content-settings">
      <div class="max-w-4xl mt-7 mx-auto px-4 space-y-4 4xl:min-h-[80vh]">
        <!-- Account Details-->
        <!-- <div class="rounded-xl flex space-x-4 rounded-md bg-white shadow-0 p-4 mx-2 py-4" v-show="isLoggedIn && isPlatform('desktop') ">
          <div class="mt-0.5 space-y-1">
            <p class="text-base font-bold">Hailah Alrashed</p>
            <p class="text-xs 4xl:text-base CairoRegular text-zain-primary">Edit Account Details</p>
          </div>
          <div class="flex" style="margin-left:auto;">
            <div class="m-auto">
              <ion-icon :icon="chevronForward" class="text-zinc-300"></ion-icon>
            </div>
          </div>
        </div> -->
        <!-- Zain Line Management-->
        <div class="rounded-xl flex space-x-4 rounded-md bg-white shadow-0 p-4 mx-2 py-4">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.05" width="45" height="45" rx="10" fill="#669933" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M29.333 29H17.667C16.746 29 16 28.254 16 27.333V15.667C16 14.746 16.746 14 17.667 14H29.334C30.254 14 31 14.746 31 15.667V27.334C31 28.254 30.254 29 29.333 29V29Z"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M25.2684 18.166C26.2444 19.142 26.2444 20.725 25.2684 21.702C24.2924 22.678 22.7094 22.678 21.7324 21.702C20.7554 20.726 20.7564 19.143 21.7324 18.166C22.7084 17.189 24.2914 17.19 25.2684 18.166"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M28 26.434C27.869 26.105 27.666 25.809 27.406 25.568V25.568C26.967 25.16 26.392 24.934 25.792 24.934C24.792 24.934 22.208 24.934 21.208 24.934C20.608 24.934 20.034 25.161 19.594 25.568V25.568C19.334 25.809 19.131 26.105 19 26.434"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M28 29V30.333C28 31.254 27.254 32 26.333 32H14.667C13.746 32 13 31.254 13 30.333V18.667C13 17.746 13.746 17 14.667 17H16"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="mt-0.5 space-y-1">
            <p class="text-sm 4xl:text-lg font-bold">Zain Lines Management</p>
            <p class="text-xs 4xl:text-base CairoRegular">My lines, managed lines, add a new line</p>
          </div>
          <div class="flex" style="margin-left:auto;">
            <div class="m-auto">
              <ion-icon :icon="chevronForward" class="text-zinc-300"></ion-icon>
            </div>
          </div>
        </div>
        <!-- Payment Management -->
        <div class="rounded-xl flex space-x-4 rounded-md bg-white shadow-0 p-4 mx-2 py-4">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.05" width="45" height="45" rx="10" fill="#669933" />
            <path d="M13 20H31" stroke="#669933" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.57 24H17" stroke="#669933" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M28 30H16C14.343 30 13 28.657 13 27V19C13 17.343 14.343 16 16 16H28C29.657 16 31 17.343 31 19V27C31 28.657 29.657 30 28 30Z"
              stroke="#669933" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <div class="mt-0.5 space-y-1">
            <p class="text-sm 4xl:text-lg  font-bold">Payment Management</p>
            <p class="text-xs 4xl:text-base  CairoRegular">Wallet & cards, auto payments</p>
          </div>
          <div class="flex" style="margin-left:auto">
            <div class="m-auto">
              <ion-icon :icon="chevronForward" class="text-zinc-300"></ion-icon>
            </div>
          </div>
        </div>
        <!-- Notification Settings -->
        <div class="rounded-xl flex space-x-4 rounded-md bg-white shadow-0 p-4 mx-2 py-4">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.05" width="45" height="45" rx="10" fill="#669933" />
            <path
              d="M19.7051 29.344V29.709C19.7051 30.974 20.7311 32 21.9971 32V32C23.2631 32 24.2891 30.974 24.2891 29.708V29.343"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M23.832 16.751V15.833C23.832 14.821 23.012 14 21.999 14V14C20.986 14 20.166 14.821 20.166 15.833V16.751"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.561 21.188V21.188C16.561 18.685 18.59 16.657 21.092 16.657H22.905C25.408 16.657 27.436 18.686 27.436 21.188V21.188V23.985C27.436 24.515 27.647 25.024 28.022 25.399L28.663 26.04C29.038 26.415 29.249 26.924 29.249 27.454V27.454C29.249 28.498 28.403 29.344 27.359 29.344H16.638C15.594 29.344 14.748 28.498 14.748 27.454V27.454C14.748 26.924 14.959 26.415 15.334 26.04L15.975 25.399C16.35 25.024 16.561 24.515 16.561 23.985V21.188Z"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>


          <div class="mt-0.5 space-y-1">
            <p class="text-sm 4xl:text-lg  font-bold">Notification Settings</p>
            <p class="text-xs 4xl:text-base  CairoRegular">Explore, line dashboard, help, more</p>
          </div>
          <div class="flex" style="margin-left:auto">
            <div class="m-auto">
              <ion-icon :icon="chevronForward" class="text-zinc-300"></ion-icon>
            </div>
          </div>
        </div>
        <!-- Security Management -->
        <div class="rounded-xl flex space-x-4 rounded-md bg-white shadow-0 p-4 mx-2 py-4">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.05" width="45" height="45" rx="10" fill="#669933" />
            <path
              d="M23.0003 17.9979C24.2278 17.9979 25.2232 18.9933 25.2232 20.2209C25.2232 21.4484 24.2278 22.4438 23.0003 22.4438C21.7728 22.4438 20.7773 21.4494 20.7773 20.2209C20.7773 18.9923 21.7728 17.9979 23.0003 17.9979"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M31.0028 22.2417C31.0028 26.6115 27.8444 30.7072 23.5196 31.9317C23.1815 32.0278 22.8174 32.0278 22.4792 31.9317C18.1544 30.7082 14.9961 26.6115 14.9961 22.2417V18.212C14.9961 17.3997 15.4873 16.6674 16.2396 16.3603L21.1056 14.3694C22.3201 13.8722 23.6807 13.8722 24.8942 14.3694L29.7602 16.3603C30.5116 16.6674 31.0028 17.3997 31.0028 18.212V22.2417Z"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M27.0014 26.0013C26.8853 25.7082 26.7043 25.446 26.4732 25.232V25.232C26.082 24.8698 25.5718 24.6677 25.0386 24.6677C24.1492 24.6677 21.8512 24.6677 20.9619 24.6677C20.4286 24.6677 19.9174 24.8698 19.5263 25.232V25.232C19.2952 25.446 19.1151 25.7082 18.998 26.0013"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>



          <div class="mt-0.5 space-y-1">
            <p class="text-sm 4xl:text-lg  font-bold">Security Management</p>
            <p class="text-xs 4xl:text-base  CairoRegular">Sessions, numbers & account security</p>
          </div>
          <div class="flex" style="margin-left:auto">
            <div class="m-auto">
              <ion-icon :icon="chevronForward" class="text-zinc-300"></ion-icon>
            </div>
          </div>
        </div>
        <!-- Account History -->
        <div class="rounded-xl flex space-x-4 rounded-md bg-white shadow-0 p-4 mx-2 py-4">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.05" width="45" height="45" rx="10" fill="#669933" />
            <path
              d="M14.5195 19.9987C15.8596 16.2239 19.5342 13.7899 23.5327 14.0285C27.5313 14.2671 30.8903 17.1207 31.772 21.0281C32.6538 24.9356 30.8457 28.9552 27.337 30.8878C23.8284 32.8204 19.4647 32.2002 16.6334 29.3666"
              stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.998 26.0013L22.9993 23V17.9979" stroke="#669933" stroke-width="1.25" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M17.9978 19.9987H13.9961V15.9971" stroke="#669933" stroke-width="1.25" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>



          <div class="mt-0.5 space-y-1">
            <p class="text-sm 4xl:text-lg  font-bold">Account History</p>
            <p class="text-xs 4xl:text-base  CairoRegular">All activities under your account</p>
          </div>
          <div class="flex" style="margin-left:auto">
            <div class="m-auto">
              <ion-icon :icon="chevronForward" class="text-zinc-300"></ion-icon>
            </div>
          </div>
        </div>
        <!-- Order Tracking -->
        <div class="rounded-xl flex space-x-4 rounded-md bg-white shadow-0 p-4 mx-2 py-4">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.05" width="45" height="45" rx="10" fill="#669933" />
            <path
              d="M28.7043 29.296C29.3233 29.915 29.3233 30.918 28.7043 31.536C28.0853 32.155 27.0823 32.155 26.4642 31.536C25.8452 30.917 25.8452 29.914 26.4642 29.296C27.0833 28.677 28.0863 28.677 28.7043 29.296"
              stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M17.7039 29.296C18.3229 29.915 18.3229 30.918 17.7039 31.536C17.0849 32.155 16.0819 32.155 15.4639 31.536C14.8459 30.917 14.8449 29.914 15.4639 29.296C16.0829 28.678 17.0849 28.677 17.7039 29.296"
              stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 15H24C24.552 15 25 15.448 25 16V26H12" stroke="#669933" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M15 30.416H13C12.448 30.416 12 29.968 12 29.416V24" stroke="#669933" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M25 18H29.323C29.732 18 30.1 18.249 30.251 18.629L31.857 22.643C31.951 22.879 32 23.131 32 23.385V29.333C32 29.885 31.552 30.333 31 30.333H29.169"
              stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.9999 30.42H18.1699" stroke="#669933" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M32 25H28V21H31.2" stroke="#669933" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M12 15H17" stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 18H15" stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13 21H12" stroke="#669933" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>




          <div class="mt-0.5 space-y-1">
            <p class="text-sm 4xl:text-lg  font-bold">Order Tracking</p>
            <p class="text-xs 4xl:text-base  CairoRegular">Check your orders status</p>
          </div>
          <div class="flex" style="margin-left:auto">
            <div class="m-auto">
              <ion-icon :icon="chevronForward" class="text-zinc-300"></ion-icon>
            </div>
          </div>
        </div>
        <!-- Language -->
        <div class="rounded-xl flex space-x-4 rounded-md bg-white shadow-0 p-4 mx-2 py-4">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.05" width="45" height="45" rx="10" fill="#669933" />
            <path d="M22 14C26.982 14 31 18.018 31 23C31 27.982 26.982 32 22 32" stroke="#669933" stroke-width="1.25"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 32C17.018 32 13 27.982 13 23C13 18.018 17.018 14 22 14" stroke="#669933" stroke-width="1.25"
              stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M20.1675 15.06C17.2775 19.885 17.2775 26.116 20.1675 30.941C21.0135 32.354 22.9865 32.354 23.8325 30.941C26.7225 26.116 26.7225 19.885 23.8325 15.06C22.9855 13.647 21.0135 13.647 20.1675 15.06Z"
              stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13 23H31" stroke="#669933" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="mt-0.5 space-y-1">
            <p class="text-sm 4xl:text-lg  font-bold">Language</p>
            <p class="text-xs 4xl:text-base  CairoRegular">English</p>
          </div>
          <div class="flex" style="margin-left:auto">
            <div class="m-auto">
              <ion-icon :icon="chevronForward" class="text-zinc-300"></ion-icon>
            </div>
          </div>
        </div>

        <!-- Log Out -->
        <div class="rounded-xl bg-white flex shadow-0 p-4 space-x-4 py-4 mx-2" style="margin-top: 36px; margin-bottom: 20px;">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="45" height="45" rx="10" fill="#FF0000" fill-opacity="0.05" />
            <path d="M12.9961 23H24.0007" stroke="#C50000" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M20.998 19.9987L23.9993 23L20.998 26.0012" stroke="#C50000" stroke-width="1.25"
              stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M15.9961 20.1358V18.3981C15.9967 17.4447 16.6699 16.6241 17.6048 16.4372L28.6093 14.0302C29.2235 13.9593 29.8385 14.1566 30.2968 14.5716C30.7551 14.9865 31.0122 15.579 31.0023 16.1971V30.0029C31.0026 30.593 30.7424 31.1532 30.2912 31.5336C29.84 31.9139 29.244 32.0757 28.6624 31.9757L17.6578 30.0829C16.6974 29.9178 15.9956 29.0846 15.9961 28.1101V25.9722"
              stroke="#C50000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <div class="mt-0.5 space-y-1">
            <p class="text-sm 4xl:text-lg  CairoMedium text-zain-red mt-2.5">Log Out</p>
          </div>
          <div class="flex" style="margin-left:auto">
            <div class="m-auto">
              <ion-icon :icon="chevronForward" class="text-zinc-300"></ion-icon>
            </div>
          </div>
        </div>

        <div class="flex h-20">
        <div class="m-auto">
          <p class="text-center CairoLight text-sm text-zinc-500">Version 3.6 (325)</p>
        </div>
      </div>
      </div>
      <FooterComponent></FooterComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon, isPlatform } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
import HeaderContainer from '@/components/HeaderContainer.vue';
import FooterComponent from "@/components/FooterComponent.vue";
import { computed } from 'vue';
import store from '@/store';
import AdminAccount from '@/components/AdminAccount.vue';

const isLoggedIn = computed(() => store.getters['isLoggedIn'])
</script>
