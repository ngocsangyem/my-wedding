<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const revealElements = document.querySelectorAll(".section-map .split-reveal, .section-map .fade-reveal")
  revealElements.forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    })
  })
})
</script>

<template>
  <section class="section-map bg-white text-black py-24 px-6 md:py-40 md:px-8 min-h-screen flex flex-col items-center relative z-50 mb-[20vh] [clip-path:none] md:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]">
    <div class="meta-text fade-reveal text-sm uppercase tracking-[0.1em] opacity-80">Getting There</div>
    <h2 class="editorial-text split-reveal mt-4 text-center font-serif font-normal text-[clamp(3rem,8vw,9rem)] text-black leading-none">
      The Journey
    </h2>

    <div class="locations-grid grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 mt-16 md:mt-24 w-full max-w-[1400px]">

      <!-- Church -->
      <div class="location-block fade-reveal flex flex-col gap-8">
        <div class="map-frame w-full aspect-video md:aspect-[4/3] relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] group">
          <iframe class="map-iframe w-full h-full border-0 grayscale contrast-[1.1] brightness-105 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0299957356464!2d-73.97639338459356!3d40.75846537932676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bdb102b%3A0xea6f5927a61a3d42!2sSt.%20Patrick's%20Cathedral!5e0!3m2!1sen!2sus!4v1698999999999!5m2!1sen!2sus" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="loc-header flex flex-col gap-2 border-l-2 border-accent pl-6">
          <span class="loc-type font-sans text-xs uppercase tracking-[0.15em] text-[#888]">Ceremony</span>
          <h3 class="loc-title font-serif text-[2.2rem] leading-[1.1]">St. Patrick's<br>Cathedral</h3>
        </div>

        <div class="loc-meta-row flex justify-between items-start mt-2">
          <div class="loc-text-col max-w-[60%]">
            <p class="loc-address font-sans opacity-70 leading-relaxed text-[0.95rem]">
              5th Ave, New York, NY 10022<br>
              <span class="text-[#999] text-[0.85em]">Enter via Main Doors</span>
            </p>
            <a href="https://goo.gl/maps/StPatricksCathedral" target="_blank" class="link-arrow inline-flex items-center gap-2 no-underline text-black font-sans text-[0.8rem] uppercase tracking-[0.1em] mt-6 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
              Navigate Here &rarr;
            </a>
          </div>
          <div class="text-center hidden md:block">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=St+Patricks+Cathedral+NYC" class="qr-minimal w-20 h-20 border border-[#eee] p-[5px] transition-transform duration-300 hover:scale-110 hover:border-accent" alt="Scan for Church">
            <span class="qr-label block mt-2 text-[0.6rem] text-[#999] uppercase tracking-[0.05em] text-center">Scan</span>
          </div>
        </div>
      </div>

      <!-- Reception -->
      <div class="location-block fade-reveal flex flex-col gap-8">
        <div class="map-frame w-full aspect-video md:aspect-[4/3] relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] group">
          <iframe class="map-iframe w-full h-full border-0 grayscale contrast-[1.1] brightness-105 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0647572686076!2d-73.9776766845936!3d40.75924347932682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9cfcb0c05%3A0x7d4d167969323c94!2sThe%20Modern!5e0!3m2!1sen!2sus!4v1698999999999!5m2!1sen!2sus" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="loc-header flex flex-col gap-2 border-l-2 border-accent pl-6">
          <span class="loc-type font-sans text-xs uppercase tracking-[0.15em] text-[#888]">Reception</span>
          <h3 class="loc-title font-serif text-[2.2rem] leading-[1.1]">The Modern<br>NYC</h3>
        </div>

        <div class="loc-meta-row flex justify-between items-start mt-2">
          <div class="loc-text-col max-w-[60%]">
            <p class="loc-address font-sans opacity-70 leading-relaxed text-[0.95rem]">
              9 W 53rd St, New York, NY 10019<br>
              <span class="text-[#999] text-[0.85em]">Valet Parking Available</span>
            </p>
            <a href="https://goo.gl/maps/TheModernNYC" target="_blank" class="link-arrow inline-flex items-center gap-2 no-underline text-black font-sans text-[0.8rem] uppercase tracking-[0.1em] mt-6 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
              Navigate Here &rarr;
            </a>
          </div>
          <div class="text-center hidden md:block">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=The+Modern+NYC" class="qr-minimal w-20 h-20 border border-[#eee] p-[5px] transition-transform duration-300 hover:scale-110 hover:border-accent" alt="Scan for Restaurant">
            <span class="qr-label block mt-2 text-[0.6rem] text-[#999] uppercase tracking-[0.05em] text-center">Scan</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
