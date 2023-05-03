<template>
  <ion-page>
    <HeaderContainer>
      <template #line-selector>
        <line-selector></line-selector>
      </template>
    </HeaderContainer>
    <ion-content :fullscreen="true" id="ion-content-support">
      <div class="max-w-6xl mx-auto py-6 px-2">
        <h1 class="text-lg font-semibold">Help & support</h1>
        <div class="grid grid cols-2 my-4 sm:grid-cols-4 gap-4">
          <CardComponent class="text-[#333333]" title="Knowledge base" subtitle="FAQs/ How to">
            <template #icon>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="45" height="45" rx="10" fill="#2B8C8B" />
                <path d="M19.75 29.5H22.25" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M26 23.977V30C26 31.105 25.105 32 24 32H18C16.895 32 16 31.105 16 30V18C16 16.895 16.895 16 18 16H21.6"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M30.3891 14.6109C32.537 16.7588 32.537 20.2412 30.3891 22.3891C28.2412 24.537 24.7588 24.537 22.6109 22.3891C20.463 20.2412 20.463 16.7588 22.6109 14.6109C24.7588 12.463 28.2412 12.463 30.3891 14.6109"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M26.5 21.4147C26.47 21.4147 26.445 21.4397 26.445 21.4697C26.445 21.4997 26.47 21.5247 26.5 21.5247C26.53 21.5247 26.555 21.4997 26.555 21.4697C26.555 21.4397 26.53 21.4147 26.5 21.4147V21.4147"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M26.4991 19.188C27.4481 19.188 28.2181 18.418 28.2181 17.469C28.2181 16.52 27.4491 15.75 26.4991 15.75C25.5731 15.75 24.8241 16.483 24.7871 17.4"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </template>
          </CardComponent>
          <CardComponent title="Open Support Ticket" subtitle="Open tickets & track them" class="text-[#333]">
            <template #icon>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="45" height="45" rx="10" fill="#3A3F92" />
                <path d="M26.2996 16.9998L23.6996 14.5998C22.6996 13.6998 21.2996 13.6998 20.3996 14.5998L17.5996 16.9998"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 24.3V18C28 17.4 27.6 17 27 17H17C16.4 17 16 17.4 16 18V24.3" stroke="white"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.7996 26.2002L13.5996 31.4002" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M25.1992 26.2002L30.3992 31.4002" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M20 21H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 24H23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M13 21.8994V30.9994C13 31.5994 13.4 31.9994 14 31.9994H30C30.6 31.9994 31 31.5994 31 30.9994V21.8994"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M16.0014 18.5996C16.0014 18.5996 14.4014 19.9996 13.3014 20.9996C12.8014 21.3996 12.9014 22.1996 13.4014 22.5996L20.8014 27.5996C21.5014 28.0996 22.4014 28.0996 23.0014 27.5996C24.9014 26.2996 28.6014 23.7996 30.4014 22.5996C30.9014 22.1996 31.0014 21.4996 30.5014 20.9996L28.0014 18.5996"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </template>
          </CardComponent>
          <CardComponent title="Contact Account Manager" subtitle="Easily reach your dedicated account manager"
            class="text-[#333] col-span-2">
            <template #icon>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="45" height="45" rx="10" fill="#E99601" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M30 28H29C28.448 28 28 27.552 28 27V22C28 21.448 28.448 21 29 21H30C31.105 21 32 21.895 32 23V26C32 27.105 31.105 28 30 28Z"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17 28H16C14.895 28 14 27.105 14 26V23C14 21.895 14.895 21 16 21H17C17.552 21 18 21.448 18 22V27C18 27.552 17.552 28 17 28Z"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29.5 21V20.5C29.5 16.91 26.59 14 23 14V14C19.41 14 16.5 16.91 16.5 20.5V21" stroke="white"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M23.625 32.25H22.375C21.685 32.25 21.125 31.69 21.125 31V31C21.125 30.31 21.685 29.75 22.375 29.75H23.625C24.315 29.75 24.875 30.31 24.875 31V31C24.875 31.69 24.315 32.25 23.625 32.25Z"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.875 31H27C28.105 31 29 30.105 29 29V28" stroke="white" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </template>
          </CardComponent>
        </div>
        <h1 class="text-lg font-semibold">Feedback</h1>
        <div class="grid grid cols-2 my-4 sm:grid-cols-4 gap-4">
          <CardComponent class="text-[#333333]" title="Contact us" subtitle="Ways to reach us">
            <template #icon>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="45" height="45" rx="10" fill="#1C6D9B" />
                <path
                  d="M29.9999 27.6004L28.7999 26.4004C28.1999 25.8004 27.2999 25.8004 26.6999 26.4004L25.7999 27.3004C25.5999 27.5004 25.2999 27.6004 24.9999 27.5004C23.6999 26.9004 22.2999 26.0004 21.1999 24.9004C19.9999 23.7004 19.0999 22.4004 18.5999 21.1004C18.4999 20.8004 18.5999 20.5004 18.7999 20.3004L19.5999 19.5004C20.2999 18.8004 20.2999 17.9004 19.6999 17.3004L18.3999 16.0004C17.5999 15.2004 16.3999 15.2004 15.5999 16.0004L14.8999 16.7004C14.1999 17.4004 13.8999 18.5004 14.0999 19.6004C14.5999 22.2004 16.0999 25.1004 18.5999 27.5004C21.0999 29.9004 23.8999 31.5004 26.4999 32.0004C27.5999 32.2004 28.5999 31.9004 29.3999 31.1004L30.0999 30.4004C30.6999 29.7004 30.6999 28.4004 29.9999 27.6004Z"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24 18C25 18 26.1 18.4 26.9 19.2" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M29.7 16.3C28.1 14.7 26.1 14 24 14" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M28.0008 21.9996C28.0008 20.9996 27.6008 19.8996 26.8008 19.0996" stroke="white"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29.6992 16.2998C31.2992 17.8998 31.9992 19.8998 31.9992 21.9998" stroke="white"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>


            </template>
          </CardComponent>
          <CardComponent title="Give us Feedback" subtitle="Tell us your experience" class="text-[#333]">
            <template #icon>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="45" height="45" rx="10" fill="#8A568A" />
                <path
                  d="M23.3565 28.8L27.3565 30.9C28.1565 31.3 29.0565 30.6 28.8565 29.8L28.0565 25.3L31.2565 22.1C31.8565 21.5 31.5565 20.4 30.6565 20.3L26.3565 19.7L24.3565 15.6C23.9565 14.8 22.8565 14.8 22.4565 15.6L20.3565 19.7L15.9565 20.3C15.0565 20.4 14.6565 21.5 15.3565 22.1L18.5565 25.3L17.7565 29.8C17.6565 30.7 18.5565 31.3 19.2565 30.9L23.3565 28.8Z"
                  stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </template>
          </CardComponent>
        </div>
      </div>
      <div class="flex h-40">
        <div class="m-auto">
          <p class="text-center CairoLight text-sm text-zinc-500">Version 3.6 (325)</p>
        </div>
      </div>
      <FooterComponent class="mt-2 absolute bottom-0">
      </FooterComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import HeaderContainer from '@/components/HeaderContainer.vue';
import CardComponent from '@/components/CardComponent.vue';
import FooterComponent from "@/components/FooterComponent.vue";
import LineSelector from '@/components/LineSelector.vue';
</script>
