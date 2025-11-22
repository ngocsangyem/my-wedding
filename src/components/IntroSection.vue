<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

// Images
const images = {
  img1: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  img2: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=1000&auto=format&fit=crop",
  img3: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  img4: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop"
}

onMounted(() => {
  const revealElements = document.querySelectorAll(".section-intro .split-reveal, .section-intro .fade-reveal")
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
    const images = document.querySelectorAll(".intro-img-scatter")
    images.forEach((img, i) => {
      const direction = i % 2 === 0 ? -1 : 1
      gsap.fromTo(img,
        { yPercent: 40 * direction },
        {
          yPercent: -20 * direction,
          ease: "none",
          scrollTrigger: { trigger: ".section-intro", start: "top bottom", end: "bottom top", scrub: 1 }
        }
      )
    })
  } else {
    // UX Fixed: Mobile Stack Animation
    gsap.from(".intro-img-scatter", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: { trigger: ".section-intro", start: "top 70%" }
    })
  }
})
</script>

<template>
  <section class="section-intro bg-accent text-black min-h-screen md:min-h-[150vh] flex flex-col md:justify-center md:items-center relative z-20 overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.3)] py-24 px-6 md:p-0">

    <!-- Text -->
    <div class="intro-content-layer relative z-20 text-center flex flex-col items-center gap-8 max-w-3xl md:p-8 mb-12 md:mb-0 mx-auto">
      <h2 class="editorial-text split-reveal font-serif italic text-[3rem] md:text-[clamp(1.5rem,4vw,4rem)] leading-tight md:leading-none">
        "We loved with a love that was more than love."
      </h2>
      <p class="fade-reveal mt-4 md:mt-8 leading-relaxed max-w-md text-center text-sm md:text-base">
        Join us for a weekend of celebration, art, and romance in the heart of the city. We cannot wait to share this chapter with our favorite people.
      </p>
    </div>

    <!-- Images -->
    <div class="intro-gallery relative w-full h-auto grid grid-cols-2 gap-4 mt-8 md:mt-0 md:absolute md:top-0 md:left-0 md:h-full md:block md:pointer-events-none z-10 md:z-[1]">
      <img :src="images.img1" class="intro-img-scatter i-img-1 w-full h-[250px] object-cover rounded-lg md:rounded md:absolute md:top-[15%] md:left-[8%] md:w-[18vw] md:h-[24vw] opacity-100 md:opacity-90 z-20" alt="Couple">
      <img :src="images.img2" class="intro-img-scatter i-img-2 w-full h-[250px] object-cover rounded-lg md:rounded mt-8 md:mt-0 md:absolute md:bottom-[20%] md:left-[5%] md:w-[15vw] md:h-[15vw] opacity-100 md:opacity-90 z-10" alt="Hands">
      <img :src="images.img3" class="intro-img-scatter i-img-3 w-full h-[300px] col-span-2 object-cover rounded-lg md:rounded md:col-span-1 md:h-[250px] md:absolute md:top-[10%] md:right-[5%] md:w-[22vw] md:h-[16vw] opacity-100 md:opacity-90 z-10" alt="Atmosphere">
      <img :src="images.img4" class="intro-img-scatter i-img-4 w-full h-[250px] object-cover rounded-lg md:rounded md:absolute md:bottom-[15%] md:right-[10%] md:w-[16vw] md:h-[22vw] opacity-100 md:opacity-90 z-20" alt="Flowers">
    </div>
  </section>
</template>
