<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const images = {
  img1: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  img2: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=1000&auto=format&fit=crop",
  img3: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  img4: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop",
  img5: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"
}

onMounted(() => {
  const revealElements = document.querySelectorAll(".section-venue .split-reveal, .section-venue .fade-reveal")
  revealElements.forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    })
  })

  if (window.innerWidth > 768) {
    const images = document.querySelectorAll(".venue-img")
    images.forEach((img, i) => {
      const direction = i % 2 === 0 ? -1 : 1
      gsap.fromTo(img,
        { yPercent: 40 * direction },
        {
          yPercent: -20 * direction,
          ease: "none",
          scrollTrigger: { trigger: ".section-venue", start: "top bottom", end: "bottom top", scrub: 1 }
        }
      )
    })
  } else {
    // Opacity Fix: Dedicated Trigger for Venue
    gsap.from(".venue-img", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: { trigger: ".section-venue", start: "top 70%" }
    })
  }
})
</script>

<template>
  <section class="section-venue bg-black text-accent min-h-screen md:min-h-[150vh] flex flex-col md:justify-center md:items-center relative z-20 overflow-hidden py-24 px-6 md:p-0">

    <div class="venue-content-layer relative z-20 text-center flex flex-col items-center gap-8 max-w-3xl md:p-8 mb-16 md:mb-0 mx-auto">
      <div class="meta-text fade-reveal text-accent text-sm uppercase tracking-widest opacity-80">The Location</div>
      <h2 class="display-text split-reveal font-serif font-normal leading-none tracking-tight text-[3.5rem] md:text-[clamp(3rem,8vw,9rem)] text-white">The Public<br>Library</h2>

      <div class="venue-details mt-4 md:mt-8 flex flex-col md:flex-row gap-8 md:gap-16 text-white w-full justify-center">
        <div class="detail-block fade-reveal flex flex-col gap-2">
          <span class="meta-text text-[#999] text-xs uppercase tracking-widest">Ceremony</span>
          <span class="font-serif text-2xl">4:30 PM</span>
        </div>
        <div class="detail-block fade-reveal flex flex-col gap-2">
          <span class="meta-text text-[#999] text-xs uppercase tracking-widest">Cocktails</span>
          <span class="font-serif text-2xl">6:00 PM</span>
        </div>
        <div class="detail-block fade-reveal flex flex-col gap-2">
          <span class="meta-text text-[#999] text-xs uppercase tracking-widest">Reception</span>
          <span class="font-serif text-2xl">7:30 PM</span>
        </div>
      </div>
    </div>

    <!-- Venue Gallery (Float Grid) -->
    <div class="venue-gallery relative w-full h-auto grid grid-cols-2 gap-4 md:gap-0 md:absolute md:top-0 md:left-0 md:w-full md:h-full md:block md:pointer-events-none z-10 md:z-[1]">

      <div class="flex flex-col gap-4">
        <img :src="images.img1" class="venue-img v-img-1 w-full h-[240px] object-cover rounded-lg grayscale md:grayscale-0 md:rounded md:absolute md:top-[10%] md:left-[5%] md:w-[20vw] md:h-[25vw] transition-all duration-500 hover:grayscale-0 z-20" alt="Couple 1">
        <img :src="images.img3" class="venue-img v-img-3 w-full h-[300px] object-cover rounded-lg grayscale md:grayscale-0 md:rounded md:absolute md:bottom-[10%] md:left-[12%] md:w-[15vw] md:h-[15vw] transition-all duration-500 hover:grayscale-0 z-20" alt="Atmosphere">
      </div>

      <div class="flex flex-col gap-4 mt-12">
        <img :src="images.img2" class="venue-img v-img-2 w-full h-[200px] object-cover rounded-lg grayscale md:grayscale-0 md:rounded md:absolute md:top-[15%] md:right-[8%] md:w-[18vw] md:h-[12vw] transition-all duration-500 hover:grayscale-0 z-10" alt="Hands">
        <img :src="images.img4" class="venue-img v-img-4 w-full h-[280px] object-cover rounded-lg grayscale md:grayscale-0 md:rounded md:absolute md:bottom-[20%] md:right-[5%] md:w-[22vw] md:h-[28vw] transition-all duration-500 hover:grayscale-0 z-10" alt="Flowers">
      </div>

      <img :src="images.img5" class="venue-img v-img-5 col-span-2 w-full h-[150px] object-cover rounded-lg grayscale md:grayscale-0 opacity-60 md:opacity-60 md:rounded md:absolute md:top-[50%] md:left-[-5%] md:w-[12vw] md:h-[18vw] transition-all duration-500 hover:grayscale-0 z-0" alt="Detail 5">
    </div>
  </section>
</template>
