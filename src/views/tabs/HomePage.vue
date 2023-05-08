<template>
  <ion-page id="main-content">
    <HeaderContainer>
      <template #line-selector>
        <line-selector></line-selector>
      </template>
    </HeaderContainer>
    <ion-content :fullscreen="true" id="ion-content-home">
      <div class="bg-white md:rounded-xl p-2">
        <div class="max-w-screen-2xl mx-auto px-2 lg:px-20 md:px-10">
          <Splide
            class="pt-[20px] md:pt-[30px]"
            :autoplay="true"
            :rewind="true"
            :options="splideOptions"
            @splide:pagination:mounted="hideDefaultPagination"
            @splide:moved="updatePagination"
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img
                class="rounded-xl sm:hidden"
                src="@/assets/images/mobile.jpg"
                alt="Sample 1"
              />
              <img
                class="rounded-xl hidden sm:block"
                src="@/assets/images/web.jpg"
                alt="Sample 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                class="rounded-xl sm:hidden"
                src="@/assets/images/mobile-1.jpeg"
                alt="Sample 1"
              />
              <img
                class="rounded-xl hidden sm:block"
                src="@/assets/images/web-1.jpeg"
                alt="Sample 1"
              />
            </SplideSlide>

          </Splide>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="flex sm:mt-[10px] mb-[5px] sm:mb-[15px] justify-center">
            <div class="space-x-2 mt-3">
              <button
                v-for="(page, index) in pages"
                @click="changeSlide(index)"
                :key="index"
                :class="{
                  'w-2 h-2 rounded-full': true,
                  'bg-white border-2 border-zain-primary': currentIndex === index,
                  'bg-zinc-200 border-2 border-zain-lightgray': currentIndex !== index,
                }"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-6">
        <h3 class="font-semibold 4xl:CairoBlack font-boldtext-lg 4xl:text-xl 4xl:text-2xl mt-9 mb-[15px] mx-1">
          QuickPay
        </h3>
         <!-- height should be 350px; -->
         <div class="sm:hidden bg-white shadow-0 rounded-xl m-0 p-4">
          <div class="4xl:space-y-7 4xl:py-7 ">
            <div class="flex space-x-3 mb-5">
              <div>
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="45" height="45" rx="10" fill="#669933" />
                  <path
                    d="M25 25V29.129C25 30.162 24.162 31 23.129 31H15.871C14.838 31 14 30.162 14 29.129V14.871C14 13.838 14.838 13 15.871 13H23.128C24.162 13 25 13.838 25 14.871V17"
                    stroke="white"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.3 28.5H21.7"
                    stroke="white"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.333 17H30.666C31.403 17 32 17.597 32 18.333V23.666C32 24.403 31.403 25 30.667 25H21.334C20.597 25 20 24.403 20 23.667V18.333C20 17.597 20.597 17 21.333 17Z"
                    stroke="white"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 20H32"
                    stroke="white"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h5 class="text-sm 4xl:text-base font-bold text-black">
                  Pay Bill or Recharge Line
                </h5>
                <p class="text-xs 4xl:text-sm text-black">Select Line Type</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 my-2">
              <button
                :class="{
                  'w-full normal-case sm:h-10 h-[45px] payment-tabs rounded-xl bg-white text-sm 4xl:text-base border hover:border-zain-primary hover:bg-white': true,
                  'border border-zain-primary text-zain-primary font-semibold':
                    currentTab === 'Bill Payment',
                  'btn-shadow text-zain-medium inactive-border': currentTab != 'Bill Payment',
                }"
                @click="changeCurrentTab('Bill Payment')"
                ><h6>Contract payment</h6></button
              >
              <button
                fill="clear"
                :class="{
                  'w-full normal-case sm:h-10 h-[45px]  payment-tabs rounded-xl bg-white border text-sm 4xl:text-base hover:border-zain-primary hover:bg-white': true,
                  'border border-zain-primary text-zain-primary font-semibold':
                    currentTab === 'Recharge',
                  'btn-shadow text-zain-medium inactive-border': currentTab != 'Recharge',
                }"
                @click="changeCurrentTab('Recharge')"
                ><h5>Line payment</h5></button
              >
            </div>
            <div class="grid grid-cols-12 gap-4 mt-4">
              <div class="col-span-9">
                <div
                  class="rounded-lg border relative border-gray-300 px-2 number-input-container"
                  style="width: 100%; height: 50px"
                >
                  <input
                    class="number-input w-full h-12  placeholder:pl-1 focus:mt-1"
                    type="tel"
                    @change="updateLabel"
                    onkeyup="this.setAttribute('value', this.value);" value="" 
                    id="pay-bill-number-input"
                    :placeholder="inputPlaceholder"
                  />
                  <label
                    for="pay-bill-number-input"
                    class="number-label left-3 px-1 text-gray-500"
                    >{{ numberInputLabel }}</label
                  >
                </div>
              </div>
              <div class="col-span-3">
                <ion-button
                  expand="block"
                  id="pay-bill-button"
                  style="height: 50px; --border-radius: 10px"
                >
                  <p class="hidden md:block ">Proceed</p>
                  <ion-icon :icon="chevronForward"></ion-icon>
                </ion-button>
              </div>
            </div>
            <ion-button
              fill="clear"
              class="text-zain-primary normal-case  -ml-3 p-0"
              style="height: 15px"
              >I don’t know my number</ion-button
            >
          </div>
        </div>
        <div class="grid grid-cols-1 hidden sm:grid sm:grid-cols-2 gap-4">
            <div class="bg-white rounded-xl shadow-0 p-4">
              <div class="flex space-x-3">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="45" height="45" rx="10" fill="#70A838"/>
<path d="M27 29.5H29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 32H26C24.895 32 24 31.105 24 30V23C24 21.895 24.895 21 26 21H30C31.105 21 32 21.895 32 23V30C32 31.105 31.105 32 30 32Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 18H14V16.4L19 14L24 16.4V18Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 24H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 24V18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 24V18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 24V18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 32H15.714C14.768 32 14 31.232 14 30.286V28" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27 14H30.286C31.232 14 32 14.768 32 15.714V18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div>
  <h4 class="font-bold text-lg 4xl:text-xl">Pay your company bill</h4>
  <p class="text-sm 4xl:text-base font-light">One click to pay all of your company's bills.</p>
</div>
              </div>
              <div class="pt-4">
                <div
                  class="rounded-lg border relative border-gray-300 px-2 mx-0.5 number-input-container"
                  style="height: 50px"
                >
                  <input
                    class="number-input w-full h-12 placeholder:pl-1 focus:mt-1"
                    type="tel"
                    id="pay-bill-number-input"
                    @change="updateLabel"
                    :placeholder="inputPlaceholder"
                  />
                  <label
                    for="pay-bill-number-input"
                    class="number-label font-light absolute left-3 px-1"
                    style="font-family:  !important"
                    >{{ numberInputLabel }}</label
                  >
                </div>
                <ion-button expand="block" class="h-12 my-4 text-sm 4xl:text-base" style="--border-radius:10px; --box-shadow: none;">Proceed to Pay</ion-button>
                <p class=" text-base 4xl:text-lg text-zain-primary">What does “pay all bills” mean?</p>
              </div>
            </div>
            <div class="bg-white rounded-xl shadow-0 p-4">
              <div class="flex space-x-3">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="45" height="45" rx="10" fill="#70A838"/>
<path d="M25 26V30.129C25 31.162 24.162 32 23.129 32H15.871C14.838 32 14 31.162 14 30.129V15.871C14 14.838 14.838 14 15.871 14H23.128C24.162 14 25 14.838 25 15.871V18" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3008 29.5H21.7008" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.333 18H30.666C31.403 18 32 18.597 32 19.333V24.666C32 25.403 31.403 26 30.667 26H21.334C20.597 26 20 25.403 20 24.667V19.333C20 18.597 20.597 18 21.333 18Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 21H32" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div>
  <h4 class="font-bold text-lg 4xl:text-xl">Pay your line bill</h4>
  <p class="text-sm 4xl:text-base font-light">Make your line payments hassle-free.</p>
</div>
              </div>
              <div class="pt-4">
                <div
                  class="rounded-lg border relative border-gray-300 px-2 mx-0.5 number-input-container"
                  style="height: 50px"
                >
                  <input
                    class="number-input w-full h-12  placeholder:pl-1 focus:mt-1"
                    type="tel"
                    @change="updateLabel"
                    id="pay-bill-number-input"
                    :placeholder="inputPlaceholder"
                  />
                  <label
                    for="pay-bill-number-input"
                    class="number-label font-light absolute left-3 px-1"
                    style="font-family:  !important"
                    >Line Number</label
                  >
                </div>
                <ion-button expand="block" class=" h-12 my-4 text-sm 4xl:text-base" style="--border-radius:10px;--box-shadow: none;">Proceed to Pay</ion-button>
                <p class=" text-base 4xl:text-lg text-zain-primary">I don’t know my number</p>
              </div>
            </div>
        </div>
        <h3 class="font-semibold 4xl:CairoBlack font-boldtext-lg 4xl:text-xl 4xl:text-2xl mt-10 mt-9 mb-[15px] mx-1">
          Buy a New Service from Zain
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <CardComponent
            subtitle="Zain has plans for all."
            title="Zain Mobile Plans"
            style="
              background: linear-gradient(
                131.8deg,
                #353982 0%,
                rgba(41, 44, 101, 0.77) 129.81%
              );
            "
          >
            <template #icon>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="45"
                  height="45"
                  rx="10"
                  fill="white"
                  fill-opacity="0.19"
                />
                <path
                  d="M19.88 29.5H22.12"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24 16C25.105 16 26 16.895 26 18"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26 22V30C26 31.105 25.105 32 24 32H18C16.895 32 16 31.105 16 30V18C16 16.895 16.895 16 18 16H21"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 13C27.209 13 29 14.791 29 17"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
            <template #pattern>
              <svg
                width="132"
                height="148"
                viewBox="0 0 132 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.15">
                  <path
                    opacity="0.2"
                    d="M80.4309 147.601C46.8978 157.099 11.8921 137.546 2.39966 104.013C-7.09908 70.4794 12.4546 35.4737 45.9877 25.9813C79.5209 16.4826 114.527 36.0362 124.019 69.5694C133.518 103.103 113.964 138.108 80.4309 147.601Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M114.571 72.2426C122.591 100.562 106.077 130.132 77.7577 138.152C49.4385 146.172 19.8678 129.659 11.8479 101.339C3.82805 73.0199 20.3418 43.4493 48.6611 35.4294C76.9804 27.4095 106.551 43.9233 114.571 72.2426Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M105.123 74.9223C111.67 98.0277 98.1897 122.163 75.0779 128.704C51.9725 135.245 27.837 121.771 21.296 98.6597C14.7549 75.5543 28.2288 51.4187 51.3406 44.8777C74.446 38.3303 98.5815 51.8106 105.123 74.916V74.9223Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M95.6745 77.5956C100.743 95.4997 90.3089 114.181 72.4048 119.256C54.5006 124.325 35.8191 113.891 30.7506 95.9864C25.6821 78.0822 36.1162 59.4007 54.0203 54.3322C71.9245 49.2636 90.606 59.6977 95.6808 77.6019L95.6745 77.5956Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M86.2262 80.2752C89.8222 92.9655 82.4153 106.212 69.7314 109.808C57.0411 113.404 43.7947 106.003 40.1987 93.3131C36.6027 80.6228 44.0096 67.3764 56.6935 63.7804C69.3838 60.1844 82.6302 67.5849 86.2262 80.2752Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M76.7781 82.9485C78.8952 90.4312 74.5409 98.2362 67.0518 100.353C59.5691 102.471 51.7641 98.1161 49.6469 90.6334C47.5298 83.1507 51.8842 75.3457 59.3669 73.2285C66.8496 71.1114 74.6546 75.4658 76.7718 82.9485H76.7781Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M67.3237 85.6281C67.9683 87.8969 66.6411 90.2669 64.3723 90.9115C62.1035 91.5561 59.7335 90.229 59.0889 87.9601C58.4443 85.6913 59.7714 83.3214 62.0403 82.6767C64.3091 82.0321 66.679 83.3593 67.3237 85.6281Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M80.6396 1.83908L80.2667 5.64363L85.1962 16.5707L86.5424 13.0063L89.4305 5.3466L88.8112 1.57365L84.678 0L80.6333 1.83276L80.6396 1.83908ZM70.3256 4.6135L70.945 8.38645L71.9561 9.62514L78.5351 17.664L79.6727 6.2693L79.7296 5.72579L78.1559 2.24355L73.751 1.80116L70.3256 4.6135ZM91.3391 1.83276L89.993 5.40348L91.2696 13.1959L91.9332 17.2406L98.9293 7.50167L99.3022 3.70344L95.7125 1.10598L91.3391 1.83276ZM63.6518 6.35778L61.0733 9.96642L62.6407 13.4487L64.5366 14.8074L72.3859 20.4447L70.4457 8.60765L68.0315 5.64995L63.6518 6.35778ZM99.4412 7.69127L98.6891 15.2435L98.2531 19.6232L100.528 17.7588L107.531 12.033L108.877 8.45597L106.083 5.03061L101.666 4.59454L99.4349 7.69759L99.4412 7.69127ZM55.0758 13.3855L53.5211 17.5376L55.9416 20.4953L65.9333 24.2683L67.153 24.7359L62.2109 13.8089L59.1142 11.578L55.0758 13.3981V13.3855ZM107.986 12.3553L105.451 19.067L103.745 23.5667L114.672 18.6373L116.903 15.5342L115.329 12.033L115.083 11.4895L110.931 9.9285L107.979 12.3553H107.986ZM48.6169 22.3913L48.1871 26.7962L51.2902 29.0271L62.1035 30.1078L63.2221 30.2216L55.6319 20.944L52.0549 19.5916L48.6232 22.3913H48.6169ZM115.026 19.0607L108.03 28.7996L112.751 28.0349L119.867 26.8657L122.231 24.9318L122.818 24.4452L122.439 22.0879L122.111 20.0782L120.828 19.1618L118.496 17.4934L115.013 19.067L115.026 19.0607ZM44.7049 32.7558L45.419 37.1292L48.9961 38.4816L60.8332 36.5414L55.6003 32.7874L51.0943 29.5453L47.2897 29.1598L44.7049 32.7495V32.7558ZM122.477 26.9732L120.101 27.365L110.817 34.9678L122.749 36.1559L124.177 35.5113L126.225 34.5886L126.673 30.1836L123.848 26.752L122.464 26.9795L122.477 26.9732ZM45.1789 39.6445L43.6116 43.7903L45.4317 47.8224L49.2426 48.2016L60.1633 43.2657L54.1847 41.0032L48.9518 39.0314L45.1789 39.6445ZM111.917 41.6289L123.141 45.8632L126.667 45.2818L126.907 45.2439L127.444 43.8409L128.481 41.1107L126.648 37.0723L122.85 36.6931L111.917 41.6352V41.6289ZM45.8488 50.3187L45.4064 54.7236L48.2124 58.149L51.9917 57.536L61.2692 49.9395L51.1764 48.9347L49.3374 48.7514L45.8551 50.325L45.8488 50.3187ZM113.907 47.9235L111.253 48.3532L119.014 53.9273L120.986 55.3493L124.784 55.7285L127.381 52.1388L126.654 47.7592L126.44 47.677L123.071 46.4067L113.901 47.9172L113.907 47.9235ZM114.862 61.9978L116.461 63.9506L120.038 65.3031L123.476 62.4971V62.4528L123.905 58.0858L123.115 57.517L120.802 55.8549L108.864 54.6604L114.862 61.9852V61.9978ZM52.2129 58.0353L49.2552 60.4494L49.963 64.8228L53.5653 67.4013L57.0413 65.8276L60.2454 61.3785L64.0437 56.0887L52.2129 58.0289V58.0353ZM57.4015 66.2637L55.1706 69.3604L56.9907 73.4052L61.1365 74.9598L64.0942 72.533L68.3285 61.3216L57.4015 66.2637ZM109.856 71.0921L112.953 73.3167L116.998 71.5029L118.559 67.3507L116.138 64.393L104.92 60.1587L109.856 71.0858V71.0921ZM101.634 76.2744L104.055 79.2384L108.422 78.5242L111 74.9219L109.427 71.4397L102.765 66.6555L99.6877 64.4436L101.628 76.2744H101.634ZM65.0422 72.4508L64.5366 72.8553L63.1842 76.4324L65.9902 79.864L70.3951 80.3001L72.6197 77.1907L73.8142 65.2588L65.0422 72.4445V72.4508ZM79.9381 67.9322L73.1379 77.3867L72.7588 81.1912L76.3548 83.7823L80.7218 83.0556L82.0742 79.4912L80.1403 67.6541L79.9381 67.9322ZM92.3377 79.1625L93.9113 82.6448L98.3226 83.0935L101.748 80.2811L101.135 76.5145L93.5384 67.2306L92.344 79.1689L92.3377 79.1625ZM85.6386 71.5661L82.624 79.5417L83.2434 83.3147L87.3829 84.882L91.4213 83.0556L91.8005 79.251L86.8583 68.324L85.6323 71.5661H85.6386Z"
                    fill="white"
                  />
                  <path
                    opacity="0.58"
                    d="M102.246 105.835C94.9758 106.997 90.0191 113.826 91.1807 121.106C92.3422 128.376 99.1715 133.333 106.451 132.171C113.721 131.009 118.678 124.18 117.516 116.9C116.355 109.631 109.525 104.674 102.246 105.835ZM105.63 127.044C101.194 127.755 97.0085 124.721 96.2976 120.285C95.5866 115.849 98.6207 111.663 103.057 110.952C107.493 110.241 111.678 113.275 112.389 117.711C113.1 122.147 110.066 126.333 105.63 127.044ZM130.053 75.4545C126.608 76.0053 124.265 79.2396 124.816 82.6843C124.846 82.8945 124.896 83.0948 124.946 83.2951L105.42 96.7432C103.918 96.6731 102.386 96.7432 100.844 96.9936C95.4565 97.8547 90.8202 100.588 87.5057 104.434L76.2706 96.9936C76.5309 96.0022 76.561 94.9308 76.2906 93.8593C75.7799 91.8166 74.328 90.2545 72.5155 89.5235C70.7131 88.7524 68.5802 88.8225 66.7778 89.914C64.1142 91.5162 63.0528 94.7706 64.1343 97.5843L45.409 113.005C44.0272 112.174 42.3149 111.864 40.6226 112.284C40.6126 112.284 40.5925 112.284 40.5825 112.294L35.9262 105.345C36.8375 104.123 37.3081 102.581 37.1479 100.949C36.8074 97.4742 33.7133 94.9408 30.2486 95.2812C26.7739 95.6217 24.2405 98.7159 24.581 102.181C24.9214 105.655 28.0156 108.189 31.4803 107.848C31.8007 107.818 32.1211 107.758 32.4315 107.678L37.0878 114.627C35.9963 116.089 35.5457 118.012 36.0264 119.924C36.8675 123.309 40.2921 125.372 43.6767 124.531C47.0612 123.69 49.124 120.265 48.2829 116.88C48.2328 116.66 48.1627 116.45 48.0926 116.239L66.8679 100.779C67.1383 100.929 67.4087 101.069 67.689 101.179C68.9107 101.7 70.3126 101.85 71.7044 101.5C72.5356 101.289 73.2766 100.929 73.9274 100.458L85.0825 107.848C82.6091 112.124 81.5277 117.251 82.3588 122.498C84.2914 134.634 95.7468 142.935 107.873 140.993C110.437 140.582 112.82 139.751 114.983 138.57C115.083 138.69 115.183 138.81 115.293 138.92L119.859 143.466C121.582 145.178 124.375 145.178 126.088 143.446L126.188 143.346C127.9 141.624 127.9 138.83 126.168 137.118L121.822 132.802C122.142 132.391 122.453 131.971 122.743 131.54C123.795 131.911 124.996 131.48 125.547 130.459C126.869 128.015 127.77 125.352 128.181 122.598C128.591 119.854 128.521 117.041 127.98 114.327C127.44 111.613 126.428 108.99 124.986 106.617C123.554 104.243 121.702 102.13 119.549 100.398C118.698 99.7172 117.506 99.7573 116.705 100.448C115.023 99.3267 113.2 98.4355 111.268 97.8046L127.309 86.7598C128.621 87.7311 130.313 88.1917 132.046 87.9113C135.49 87.3606 137.834 84.1262 137.283 80.6816C136.732 77.2369 133.498 74.8938 130.053 75.4445V75.4545ZM83.5204 122.328C81.6879 110.842 89.5385 100.008 101.024 98.1751C106.471 97.304 111.768 98.6157 116.034 101.46C115.754 102.311 116.004 103.272 116.735 103.873C118.477 105.305 119.969 107.027 121.121 108.96C122.273 110.892 123.084 113.015 123.504 115.228C123.935 117.441 123.975 119.714 123.624 121.927C123.274 124.14 122.543 126.293 121.461 128.256V128.276C120.991 129.147 121.131 130.178 121.742 130.889C118.588 135.505 113.611 138.88 107.663 139.831C96.1774 141.664 85.3428 133.813 83.5103 122.328H83.5204Z"
                    fill="white"
                  />
                </g>
              </svg>
            </template>
          </CardComponent>
          <CardComponent
            class=""
            title="Connectivity Solutions"
            subtitle="Elevate your experience"
            style="background: #1c5f47;"
          >
            <template #icon>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  width="45"
                  height="45"
                  rx="10"
                  fill="white"
                />
                <path
                  d="M25 27H18"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 23H28C30.209 23 32 24.791 32 27V27C32 29.209 30.209 31 28 31H18C15.791 31 14 29.209 14 27V27C14 24.791 15.791 23 18 23Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 23V19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.965 27.035C27.945 27.015 27.945 26.984 27.965 26.964C27.985 26.944 28.016 26.944 28.036 26.964C28.056 26.984 28.056 27.015 28.036 27.035C28.016 27.055 27.984 27.055 27.965 27.035"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 13C27.241 13.009 26.53 13.137 25.879 13.367C24.214 13.955 22.955 15.214 22.366 16.88C22.137 17.53 22.009 18.241 22 19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 19C25.039 17.244 26.244 16.039 28 16"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
            <template #pattern>
              <svg
                width="103"
                height="148"
                viewBox="0 0 103 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    opacity="0.2"
                    d="M61.3211 193.8C106.035 206.466 152.712 180.393 165.37 135.679C178.035 90.9654 151.962 44.2881 107.248 31.6307C62.5345 18.9649 15.8572 45.0381 3.19983 89.752C-9.46599 134.466 16.6072 181.143 61.3211 193.8Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M15.7984 93.3163C5.10449 131.078 27.1243 170.508 64.8858 181.202C102.647 191.896 142.077 169.876 152.771 132.114C163.465 94.3529 141.445 54.9228 103.684 44.2289C65.9224 33.535 26.4923 55.5548 15.7984 93.3163Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M28.3968 96.889C19.6664 127.698 37.6412 159.881 68.4589 168.603C99.2681 177.325 131.451 159.359 140.173 128.541C148.895 97.7317 130.928 65.5489 100.111 56.8269C69.3015 48.0965 37.1187 66.0714 28.3968 96.8806V96.889Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M40.9955 100.454C34.237 124.328 48.1501 149.238 72.0238 156.005C95.8976 162.764 120.808 148.851 127.566 124.977C134.325 101.103 120.412 76.1928 96.5381 69.4343C72.6643 62.6758 47.754 76.5888 40.9871 100.463L40.9955 100.454Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M53.5937 104.028C48.7987 120.949 58.6752 138.612 75.5882 143.407C92.5097 148.202 110.173 138.334 114.968 121.413C119.763 104.491 109.886 86.828 92.9732 82.033C76.0517 77.238 58.3887 87.1061 53.5937 104.028Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M66.1915 107.592C63.3685 117.57 69.1747 127.977 79.1607 130.8C89.1383 133.623 99.5457 127.817 102.369 117.839C105.192 107.862 99.3856 97.4543 89.408 94.6313C79.4304 91.8082 69.023 97.6145 66.1999 107.592H66.1915Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M78.7987 111.165C77.9392 114.19 79.7089 117.35 82.7342 118.21C85.7595 119.069 88.9196 117.3 89.7792 114.274C90.6387 111.249 88.869 108.089 85.8437 107.229C82.8184 106.37 79.6583 108.139 78.7987 111.165Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M78.1868 -0.547731L78.684 4.52534L72.111 19.0957L70.316 14.3428L66.4648 4.12927L67.2907 -0.901668L72.802 -3L78.1953 -0.55616L78.1868 -0.547731ZM91.9398 3.15173L91.1139 8.18267L89.7656 9.83437L80.993 20.5536L79.4762 5.35962L79.4003 4.63489L81.4986 -0.00840187L87.3723 -0.598294L91.9398 3.15173ZM63.9199 -0.55616L65.7148 4.20511L64.0126 14.5956L63.1277 19.9889L53.799 7.00289L53.3018 1.93824L58.0884 -1.52527L63.9199 -0.55616ZM100.839 5.47759L104.277 10.2894L102.187 14.9327L99.6589 16.7445L89.1925 24.2614L91.7796 8.47762L94.9988 4.53377L100.839 5.47759ZM53.1164 7.2557L54.1192 17.326L54.7007 23.1659L51.667 20.68L42.3298 13.0451L40.5349 8.27537L44.2596 3.70792L50.1501 3.12645L53.1249 7.26412L53.1164 7.2557ZM112.274 14.8484L114.347 20.385L111.12 24.3289L97.7965 29.3598L96.1701 29.9834L102.76 15.4131L106.889 12.4383L112.274 14.8653V14.8484ZM41.7231 13.4748L45.1023 22.4243L47.3776 28.4244L32.8073 21.8513L29.8325 17.7136L31.9309 13.0451L32.2595 12.3203L37.7961 10.2389L41.7315 13.4748H41.7231ZM120.887 26.857L121.46 32.7306L117.322 35.7053L102.903 37.1464L101.412 37.2981L111.533 24.9272L116.302 23.1238L120.878 26.857H120.887ZM32.3354 22.4159L41.6641 35.402L35.3691 34.3823L25.8803 32.8233L22.7286 30.2446L21.9449 29.5958L22.4505 26.4525L22.8887 23.7727L24.5994 22.5508L27.7089 20.326L32.3522 22.4243L32.3354 22.4159ZM126.103 40.6773L125.151 46.5088L120.381 48.3122L104.597 45.7251L111.575 40.7194L117.583 36.3964L122.656 35.8823L126.103 40.6689V40.6773ZM22.3999 32.9666L25.5685 33.489L37.9478 43.6268L22.0375 45.211L20.133 44.3515L17.4027 43.1211L16.8044 37.2475L20.5712 32.6716L22.4168 32.975L22.3999 32.9666ZM125.471 49.8628L127.561 55.3909L125.134 60.7673L120.052 61.273L105.49 54.6914L113.462 51.6746L120.44 49.0453L125.471 49.8628ZM36.4815 52.5088L21.5151 58.155L16.8128 57.3797L16.4926 57.3291L15.7763 55.4583L14.3942 51.8178L16.8381 46.433L21.9027 45.9273L36.4815 52.5173V52.5088ZM124.578 64.096L125.168 69.9697L121.426 74.5371L116.387 73.7197L104.016 63.5904L117.474 62.2505L119.926 62.0061L124.569 64.1044L124.578 64.096ZM33.827 60.9022L37.3663 61.4752L27.0179 68.9078L24.3887 70.8039L19.324 71.3096L15.8605 66.523L16.8296 60.6831L17.1162 60.5735L21.6078 58.8797L33.8354 60.8937L33.827 60.9022ZM32.5545 79.6692L30.4224 82.2731L25.6527 84.0765L21.0684 80.3349V80.2759L20.4954 74.4528L21.5488 73.6944L24.6331 71.4781L40.5517 69.8854L32.5545 79.6523V79.6692ZM116.092 74.3854L120.035 77.6045L119.092 83.4361L114.288 86.8743L109.653 84.7759L105.381 78.8433L100.316 71.7899L116.092 74.377V74.3854ZM109.173 85.3574L112.148 89.4867L109.721 94.88L104.193 96.953L100.249 93.717L94.6027 78.7675L109.173 85.3574ZM39.2287 91.7957L35.0994 94.762L29.7061 92.3434L27.6247 86.8069L30.8522 82.863L45.8102 77.2169L39.2287 91.7872V91.7957ZM50.1922 98.7058L46.9647 102.658L41.1416 101.706L37.7034 96.9024L39.8017 92.2592L48.6838 85.8799L52.7878 82.9304L50.2007 98.7058H50.1922ZM98.9847 93.6075L99.6589 94.1468L101.462 98.9165L97.7207 103.492L91.8471 104.074L88.8807 99.9277L87.288 84.0175L98.9847 93.599V93.6075ZM79.1222 87.5821L88.1897 100.189L88.6953 105.262L83.9004 108.717L78.0773 107.748L76.2739 102.995L78.8526 87.2114L79.1222 87.5821ZM62.5884 102.557L60.4901 107.2L54.608 107.799L50.0406 104.049L50.858 99.0261L60.9873 86.6468L62.58 102.565L62.5884 102.557ZM71.521 92.4277L75.5408 103.063L74.7149 108.094L69.1952 110.183L63.8103 107.748L63.3047 102.675L69.8946 88.1046L71.5295 92.4277H71.521Z"
                    fill="white"
                  />
                  <g opacity="0.5">
                    <path
                      d="M87.0014 36.3542L94.4004 43.9638L79.3918 43.7531L87.0014 36.3542Z"
                      fill="white"
                    />
                    <path
                      d="M94.1893 58.9643L101.791 51.5738L86.7904 51.3631L94.4 43.9642L101.791 51.5654H101.799L109.189 59.175L94.1893 58.9643Z"
                      fill="white"
                    />
                    <path
                      d="M109.611 29.1662L124.611 29.3769L117.01 36.7759L124.401 44.377L109.401 44.1664L116.799 51.776L101.799 51.5653L109.401 44.1664L117.002 36.7759L109.611 29.1662L102.212 21.5566L117.212 21.7673L109.611 29.1662Z"
                      fill="white"
                    />
                    <path
                      d="M94.6023 28.9555L87.0011 36.3544L79.6022 28.7532L94.6023 28.9555Z"
                      fill="white"
                    />
                    <path
                      d="M94.6021 28.9553L87.2031 21.3542L102.212 21.5564L94.6021 28.9553Z"
                      fill="white"
                    />
                    <path
                      d="M109.813 14.1658L102.212 21.5563L94.8131 13.9551L109.813 14.1658Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </template>
          </CardComponent>
          <CardComponent
            class=""
            title="Digital Solutions"
            subtitle="IoT & Cloud services"
            style="
              background: linear-gradient(
                132.77deg,
                #e99601 0%,
                rgba(170, 109, 0, 0.77) 103.9%
              );
            "
          >
            <template #icon>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  width="45"
                  height="45"
                  rx="10"
                  fill="white"
                />
                <path
                  d="M23.0001 12.9962C27.9727 12.9962 32.0038 17.0274 32.0038 22C32.0038 26.9726 27.9727 31.0037 23.0001 31.0037C18.0275 31.0037 13.9963 26.9726 13.9963 22C13.9963 17.0274 18.0275 12.9962 23.0001 12.9962"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.5511 25.7846L22.5669 31.0038"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.427 17.138L18.4373 22.3001"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.4586 26.0517C20.5636 26.0517 21.4594 25.1559 21.4594 24.0509C21.4594 22.9458 20.5636 22.05 19.4586 22.05C18.3536 22.05 17.4578 22.9458 17.4578 24.0509C17.4578 25.1559 18.3536 26.0517 19.4586 26.0517Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.5455 26.0517C27.6505 26.0517 28.5463 25.1559 28.5463 24.0509C28.5463 22.9458 27.6505 22.05 26.5455 22.05C25.4405 22.05 24.5447 22.9458 24.5447 24.0509C24.5447 25.1559 25.4405 26.0517 26.5455 26.0517Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.0001 19.9091C24.1051 19.9091 25.0009 19.0133 25.0009 17.9083C25.0009 16.8033 24.1051 15.9075 23.0001 15.9075C21.8951 15.9075 20.9993 16.8033 20.9993 17.9083C20.9993 19.0133 21.8951 19.9091 23.0001 19.9091Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.001 17.9083H31.0235"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
            <template #pattern>
              <svg
                width="90"
                height="148"
                viewBox="0 0 90 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    opacity="0.48"
                    d="M80.8622 139.773C80.5263 142.498 81.0414 145.021 82.9225 146.947C88.5286 152.695 97.367 153.971 102.294 152.068C101.286 146.738 95.889 139.967 88.0135 138.011C85.3859 137.362 82.9822 138.25 80.8548 139.773H80.8622ZM78.1674 146.387C79.5708 146.499 80.81 146.797 82.1088 147.708C85.4531 150.052 87.5134 153.128 88.7899 156.203C90.0514 159.249 90.4993 162.698 90.0664 166.236C89.7305 166.266 89.1333 166.206 88.6182 166.094C87.2447 165.833 85.8711 165.362 84.6469 164.832C80.4442 163.041 77.9659 160.488 76.1519 157.763C74.4947 155.292 73.3974 153.262 73.6362 150.418C73.7258 149.485 74.002 147.716 74.7336 146.88C75.3382 146.185 77.1522 146.305 78.1674 146.379V146.387ZM86.4833 116.005C87.1028 115.557 87.9762 115.221 88.7675 114.84C91.0293 113.721 93.5674 113.034 96.0159 112.899C98.9645 112.735 102.988 113.168 106.355 115.251C106.511 115.348 107.034 115.452 106.892 115.796C106.19 116.848 105.444 118.035 104.63 118.961C101.062 122.999 96.4712 125.06 91.8281 125.5C89.8947 125.687 87.6926 125.694 85.6845 124.545C84.6096 123.925 83.8332 123.119 83.0718 122.134C83.1315 119.857 84.729 117.252 86.4758 116.012L86.4833 116.005ZM66.7462 150.791C69.2245 150.881 71.6357 152.486 72.8972 154.292C74.6813 156.867 75.7413 160.324 75.9503 163.653C76.1594 167.102 75.3532 171.021 73.3153 174.596C73.2779 174.656 73.1884 174.611 73.1062 174.567C69.329 172.432 66.9627 169.565 65.41 166.482C63.9245 163.556 62.9764 160.13 63.2676 156.882C63.4467 154.822 64.7157 151.978 66.7387 150.791H66.7462ZM57.8779 151.508C58.9006 151.836 60.1323 153.24 60.6773 154.023C62.0956 156.039 62.2225 157.823 62.2523 160.145C62.2822 161.264 62.2001 162.391 62.0209 163.541C61.2744 168.169 58.2139 173.574 54.6083 176C52.4137 173.305 50.9953 170.08 50.5027 166.736C50.0249 163.422 50.3086 159.518 51.9882 155.905C52.7645 154.24 53.6752 153.464 55.0338 152.568C55.8699 152.015 57.1464 151.254 57.8705 151.493L57.8779 151.508ZM78.6153 110.668C78.7347 109.279 79.1229 108.017 79.9888 106.771C82.3253 103.442 85.4232 101.426 88.551 100.112C91.6788 98.7984 95.1126 98.2982 98.5838 98.8357C98.2105 101.463 97.5014 104.307 95.4784 107.368C93.1718 110.884 89.6334 113.422 86.4459 114.743C85.483 115.131 84.2811 115.303 82.9972 115.243C81.9596 115.199 79.9664 114.893 79.0856 114.012C78.5183 113.444 78.5257 111.608 78.6153 110.668ZM84.4453 86.556C84.5499 86.6232 84.729 87.84 84.8261 88.2953C85.5875 92.3786 85.2516 97.4622 82.1163 102.21C79.2946 106.517 76.2489 108.809 72.0537 108.003C70.598 105.927 69.6276 103.456 70.2995 100.859C71.1355 97.5443 73.5093 93.4536 76.0922 91.0872C77.8539 89.4748 80.0411 88.0565 82.2283 87.2055C82.6687 87.0263 84.2065 86.3918 84.4528 86.5486L84.4453 86.556ZM58.9156 94.9092C59.035 93.2147 59.3485 91.4679 59.9084 89.8032C61.1774 86.0111 63.8647 82.5997 66.5446 80.5916C68.687 83.2043 70.1502 86.4291 70.6428 89.848C71.1281 93.155 70.8145 97.1188 69.1573 100.687C68.3959 102.314 67.4404 103.233 66.0669 104.076C65.2458 104.591 64.014 105.255 63.3497 105.061C62.1702 104.725 61.0281 103.359 60.4682 102.568C59.7889 101.613 59.3336 100.553 59.1246 99.6643C58.8334 98.343 58.7886 96.5589 58.9006 94.9167L58.9156 94.9092ZM85.9383 128.441C88.3196 126.523 90.9771 126.463 93.9556 126.642C98.7928 126.911 105.272 129.792 108.288 134.256C108.266 134.294 108.243 134.339 108.228 134.368C105.437 136.481 102.301 137.892 98.8003 138.377C95.5456 138.832 91.5295 138.467 88.0882 136.809C86.7072 136.138 85.8637 135.294 85.0575 134.167C84.5946 133.525 83.4973 131.912 83.7959 130.987C84.0796 130.091 85.2516 128.986 85.9458 128.434L85.9383 128.441Z"
                    fill="white"
                  />
                  <path
                    d="M70.3344 -4L62.6175 8.97949L53.3585 -2.94608L49.2631 11.5825L37.2385 2.46499L37.0404 17.5594L23.0636 11.8654L26.7842 26.5L11.8029 24.6185L19.1804 37.789L4.22744 39.8403L14.7596 50.6553L0.853485 56.5191L13.8259 64.229L1.90741 73.495L16.4359 77.5833L7.31847 89.615L22.4129 89.806L16.7189 103.79L31.3464 100.062L29.472 115.043L42.6354 107.666L44.6937 122.619L55.5017 112.087L61.3655 126L69.0754 113.028L78.3343 124.946L82.4297 110.418L94.4543 119.535L94.6524 104.434L108.636 110.135L104.916 95.5L119.89 97.3815L112.512 84.211L127.465 82.1598L116.926 71.3447L130.839 65.4809L117.86 57.764L129.785 48.498L115.257 44.4096L124.374 32.3779L109.28 32.187L114.974 18.2031L100.339 21.9236L102.221 6.94238L89.0574 14.3198L86.9991 -0.633113L76.1911 9.90609L70.3344 -4Z"
                    fill="white"
                    fill-opacity="0.3"
                  />
                  <g opacity="0.8">
                    <path
                      d="M51.4346 128.037L43.9502 135.516L51.4293 143L58.9137 135.521L51.4346 128.037Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.94 135.46L21.4802 128L14 135.48L21.4802 142.96L28.94 135.501L36.3997 142.96L43.88 135.48L36.3997 128L28.94 135.46Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </template>
          </CardComponent>
          <CardComponent
            title="Drone Solutions"
            subtitle="Opportunities from above"
            style="background: #267d7b;"
          >
            <template #icon>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  width="45"
                  height="45"
                  rx="10"
                  fill="white"
                />
                <path
                  d="M34.0048 12.9962H32.5042"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.5028 12.9962H28.0022"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0926 22H21.9077C21.3156 22.0011 20.7364 21.8271 20.243 21.4998L18.7544 20.4994C18.261 20.1721 17.6818 19.998 17.0897 19.9992H13.9964C12.8914 19.9992 11.9956 19.1034 11.9956 17.9983V17.9983C11.9956 16.8933 12.8914 15.9975 13.9964 15.9975H17.0897C17.6818 15.9986 18.261 15.8246 18.7544 15.4973L20.243 14.4969C20.7364 14.1696 21.3156 13.9955 21.9077 13.9967H24.0926C24.6847 13.9955 25.2639 14.1696 25.7573 14.4969L27.246 15.4893C27.7394 15.8166 28.3186 15.9906 28.9107 15.9895H32.0039C33.109 15.9895 34.0048 16.8853 34.0048 17.9903V17.9903C34.0048 19.0954 33.109 19.9912 32.0039 19.9912H28.0023L25.7573 21.4918C25.2648 21.8219 24.6856 21.9988 24.0926 22Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.4995 17.9983H24.5008"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="18.7793"
                  y="25.0013"
                  width="8.22242"
                  height="6.0025"
                  rx="1.17"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.0034 23.0004L30.3251 26.3938C30.1381 27.3295 29.3164 28.0029 28.3623 28.0025H27.0017"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.9968 23.0004L15.6751 26.3938C15.8621 27.3295 16.6838 28.0029 17.6379 28.0025H18.7794"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.0034 14.4969V15.9975"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.9979 12.9962H16.4973"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.4962 12.9962H11.9956"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.9968 14.4969V15.9975"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
            <template #pattern>
              <svg
                width="113"
                height="148"
                viewBox="0 0 113 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    opacity="0.2"
                    d="M96.5171 177.12C56.2773 188.519 14.2705 165.055 2.87959 124.815C-8.5189 84.5749 14.9455 42.5681 55.1853 31.1772C95.4251 19.7787 137.432 43.2431 148.823 83.4829C160.221 123.723 136.757 165.729 96.5171 177.12Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M137.485 86.6908C147.109 120.674 127.292 156.159 93.3092 165.783C59.3261 175.406 23.8413 155.59 14.2174 121.607C4.59356 87.6236 24.4101 52.1389 58.3932 42.515C92.3764 32.8911 127.861 52.7077 137.485 86.6908Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M126.147 89.9064C134.004 117.633 117.828 146.595 90.0936 154.445C62.3671 162.294 33.4045 146.125 25.5552 118.391C17.706 90.6648 33.8747 61.7021 61.6088 53.8529C89.3353 45.996 118.298 62.1723 126.147 89.8988V89.9064Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M114.809 93.1143C120.892 114.599 108.371 137.017 86.8857 143.107C65.4008 149.189 42.9829 136.668 36.9007 115.183C30.8185 93.6983 43.3394 71.2805 64.8244 65.1982C86.3094 59.116 108.727 71.6369 114.817 93.1219L114.809 93.1143Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M103.472 96.3299C107.787 111.558 98.8985 127.454 83.6777 131.769C68.4494 136.084 52.5537 127.204 48.2385 111.975C43.9233 96.747 52.8115 80.8513 68.0323 76.5361C83.2606 72.2209 99.1563 81.1016 103.472 96.3299Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M92.1336 99.5379C94.6742 108.517 89.4489 117.883 80.4621 120.424C71.4828 122.964 62.1168 117.739 59.5762 108.76C57.0356 99.7805 62.2609 90.4145 71.2402 87.8739C80.2194 85.3333 89.5854 90.5586 92.126 99.5379H92.1336Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M80.7884 102.753C81.5619 105.476 79.9693 108.32 77.2467 109.093C74.5241 109.867 71.6802 108.274 70.9066 105.552C70.1331 102.829 71.7257 99.9853 74.4483 99.2117C77.1709 98.4382 80.0148 100.031 80.7884 102.753Z"
                    fill="white"
                  />
                  <path
                    opacity="0.2"
                    d="M96.7674 2.2069L96.3199 6.77236L102.235 19.8848L103.851 15.6075L107.316 6.41592L106.573 1.88837L101.613 0L96.7598 2.19931L96.7674 2.2069ZM84.3906 5.5362L85.1338 10.0637L86.3472 11.5502L94.242 21.1968L95.6071 7.52316L95.6753 6.87095L93.7869 2.69226L88.501 2.16139L84.3906 5.5362ZM109.607 2.19931L107.991 6.48418L109.523 15.835L110.32 20.6887L118.715 9.00201L119.162 4.44412L114.855 1.32717L109.607 2.19931ZM76.3821 7.62933L73.2878 11.9597L75.1686 16.1384L77.4438 17.7689L86.8629 24.5337L84.5347 10.3292L81.6377 6.77994L76.3821 7.62933ZM119.329 9.22952L118.427 18.2922L117.904 23.5478L120.634 21.3106L129.037 14.4396L130.652 10.1472L127.3 6.03673L121.999 5.51344L119.322 9.2371L119.329 9.22952ZM66.0908 16.0625L64.2252 21.0451L67.1298 24.5944L79.1198 29.1219L80.5835 29.6831L74.6529 16.5707L70.9369 13.8936L66.0908 16.0777V16.0625ZM129.583 14.8264L126.542 22.8804L124.494 28.2801L137.606 22.3647L140.283 18.6411L138.395 14.4396L138.099 13.7874L133.117 11.9142L129.575 14.8264H129.583ZM58.3401 26.8695L57.8244 32.1554L61.5481 34.8325L74.524 36.1294L75.8664 36.2659L66.7582 25.1328L62.4657 23.5099L58.3477 26.8695H58.3401ZM138.031 22.8728L129.636 34.5595L135.301 33.6419L143.84 32.2389L146.677 29.9182L147.382 29.3343L146.927 26.5055L146.532 24.0938L144.993 22.9942L142.195 20.992L138.016 22.8804L138.031 22.8728ZM53.6457 39.307L54.5027 44.555L58.7952 46.1779L72.9997 43.8497L66.7203 39.3449L61.313 35.4544L56.7475 34.9918L53.6457 39.2994V39.307ZM146.972 32.3678L144.121 32.838L132.98 41.9613L147.298 43.3871L149.012 42.6135L151.47 41.5063L152.008 36.2204L148.618 32.1024L146.957 32.3754L146.972 32.3678ZM54.2145 47.5734L52.3337 52.5484L54.5179 57.3868L59.0909 57.8419L72.1958 51.9189L65.0215 49.2039L58.7421 46.8377L54.2145 47.5734ZM134.3 49.9547L147.769 55.0358L152 54.3381L152.289 54.2926L152.933 52.609L154.177 49.3328L151.978 44.4867L147.42 44.0317L134.3 49.9623V49.9547ZM55.0184 60.3825L54.4875 65.6684L57.8548 69.7788L62.3899 69.0432L73.5229 59.9274L61.4116 58.7216L59.2047 58.5017L55.026 60.39L55.0184 60.3825ZM136.689 57.5082L133.503 58.0239L142.816 64.7128L145.183 66.4192L149.74 66.8742L152.857 62.5666L151.985 57.311L151.727 57.2124L147.685 55.6881L136.681 57.5006L136.689 57.5082ZM137.834 74.3974L139.753 76.7408L144.045 78.3637L148.171 74.9965V74.9434L148.686 69.703L147.738 69.0204L144.963 67.0259L130.637 65.5925L137.834 74.3822V74.3974ZM62.6553 69.6423L59.1061 72.5393L59.9555 77.7873L64.2783 80.8815L68.4494 78.9932L72.2944 73.6541L76.8522 67.3065L62.6553 69.6347V69.6423ZM68.8816 79.5165L66.2046 83.2325L68.3887 88.0862L73.3637 89.9518L76.9129 87.0396L81.9941 73.5859L68.8816 79.5165ZM131.827 85.3105L135.544 87.98L140.397 85.8034L142.27 80.8209L139.366 77.2716L125.904 72.1905L131.827 85.3029V85.3105ZM121.961 91.5292L124.865 95.0861L130.106 94.2291L133.2 89.9063L131.312 85.7276L123.318 79.9866L119.625 77.3323L121.953 91.5292H121.961ZM78.0505 86.941L77.4438 87.4264L75.8208 91.7188L79.1881 95.8368L84.474 96.3601L87.1435 92.6289L88.5768 78.3106L78.0505 86.9334V86.941ZM95.9256 81.5186L87.7654 92.864L87.3104 97.4295L91.6255 100.539L96.866 99.6667L98.4889 95.3894L96.1683 81.1849L95.9256 81.5186ZM110.805 94.995L112.693 99.1737L117.987 99.7122L122.097 96.3374L121.362 91.8174L112.246 80.6768L110.813 95.0026L110.805 94.995ZM102.766 85.8793L99.1487 95.4501L99.8919 99.9776L104.859 101.858L109.705 99.6667L110.16 95.1012L104.23 81.9888L102.759 85.8793H102.766Z"
                    fill="white"
                  />
                </g>
              </svg>
            </template>
          </CardComponent>
        </div>
        <h3 class="font-semibold 4xl:CairoBlack font-boldtext-lg 4xl:text-xl 4xl:text-2xl mt-10 mt-9 mb-[15px] mx-1">
          Zain World
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 sm:auto-rows-auto my-4 gap-4">
          <CardComponent
            title="Transfer to Zain"
            subtitle="Select package & switch"
            style="color: #333"
            class="col-auto"
          >
            <template #icon>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="45" height="45" rx="10" fill="#2B8C8B" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33 16.657V21.961C33 22.545 32.526 23.019 31.942 23.019H26.125C25.541 23.019 25.067 22.545 25.067 21.961V14.558C25.067 13.974 25.541 13.5 26.125 13.5H29.908C30.194 13.5 30.468 13.616 30.668 13.822L32.702 15.921C32.893 16.118 33 16.382 33 16.657Z"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.85 30.871H27.479C29.727 30.871 31.55 29.048 31.55 26.8"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.071 32.093L25.85 30.872L27.071 29.651"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.15 15.129H18.521C16.273 15.129 14.45 16.952 14.45 19.2"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.929 13.907L20.15 15.129L18.929 16.35"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.932 26.138V31.442C20.932 32.026 20.458 32.5 19.874 32.5H14.057C13.473 32.5 13 32.026 13 31.442V24.038C13 23.454 13.474 22.98 14.058 22.98H17.84C18.126 22.98 18.4 23.096 18.6 23.302L20.634 25.401C20.825 25.599 20.932 25.863 20.932 26.138Z"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
          </CardComponent>
          <CardComponent
            title="eSIM"
            subtitle="Transfer to Zain eSIM"
            style="color: #333"
            class="col-auto"
          >
            <template #icon>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="45" height="45" rx="10" fill="#2F3275" />
                <path
                  d="M28.4 17.4L25.6 14.6C25.2 14.2 24.7 14 24.2 14H17C15.9 14 15 14.9 15 16V30C15 31.1 15.9 32 17 32H27C28.1 32 29 31.1 29 30V18.8C29 18.3 28.8 17.8 28.4 17.4Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line x1="19.5" y1="32" x2="19.5" y2="26" stroke="white" />
                <line x1="24.5" y1="32" x2="24.5" y2="21" stroke="white" />
                <circle cx="19.5" cy="25.5" r="1" stroke="white" />
                <circle cx="24.5" cy="20.5" r="1" stroke="white" />
              </svg>
            </template>
          </CardComponent>
          <CardComponent
            title="Maps & Coverage"
            subtitle="Check our coverage"
            class="col-span-2"
            style="color: #333"
          >
            <template #icon>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="45" height="45" rx="10" fill="#E99601" />
                <path
                  d="M27 24L27.01 18"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.4174 14.6046C29.1942 15.3813 29.1942 16.6407 28.4174 17.4174C27.6407 18.1942 26.3813 18.1942 25.6045 17.4174C24.8278 16.6407 24.8278 15.3813 25.6045 14.6046C26.3813 13.8278 27.6407 13.8278 28.4174 14.6046"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.522 28.568L30.322 22.568C30.135 21.633 29.314 20.96 28.361 20.96H17.64C16.687 20.96 15.866 21.633 15.679 22.568L14.479 28.568C14.231 29.806 15.178 30.96 16.44 30.96H29.56C30.822 30.961 31.769 29.806 31.522 28.568Z"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.05 30.38L23.53 25.67"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.54 21.3L31 30.33"
                  stroke="white"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
          </CardComponent>
        </div>
      </div>
      <FooterComponent class="mt-2 absolute">
      </FooterComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import HeaderContainer from "@/components/HeaderContainer.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import LineSelector from "@/components/LineSelector.vue";
import { chevronForward } from "ionicons/icons";
import { ref } from "vue";

const splideOptions = {
  type: 'loop',
  autoplay:true,
  speed: 1000,
  arrows: false,
  gap: "4em",
  pagination: true,
  perPage: 1
};
const currentIndex = ref(0);
const pages = ref(0);

let numberInputLabel = 'Contract number';
let inputPlaceholder = '1XXXXXXXXX';

function changeCurrentTab(tab){
  currentTab.value = tab;
  if(currentTab.value == 'Recharge'){
    numberInputLabel = 'Line number';
    inputPlaceholder = '05XXXXXXXX';
  }else{
    numberInputLabel = 'Contract Number';
    inputPlaceholder = '1XXXXXXXXX';
  }
}

let splideEl = null;

function hideDefaultPagination(splide, data) {
  data.list.classList.add("hidden");
  pages.value = splide.Components.Elements.slides.length;
  splideEl = splide;
}

function updatePagination(splide, newIndex) {
  currentIndex.value = newIndex;
}

function changeSlide(index){
  splideEl.go(index);
}

function updateLabel(e){
  if(e.target.value !== ""){
    e.target.nextSibling.classList.add("number-label-active");
  }else{
    e.target.nextSibling.classList.remove("number-label-active");
  }
}

const currentTab = ref("Bill Payment");
</script>

<style scoped>
.border-zain-primary{
  border: 1.5px solid var(--ion-color-primary)
}
.border-zain-lightgray{ border: 1.5px solid var(--ion-color-lightgray); }

</style>