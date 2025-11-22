<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const images = [
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2370&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2370&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591700331354-f7eea65d1ce8?q=80&w=2370&auto=format&fit=crop"
]

onMounted(() => {
  const slides = document.querySelectorAll('.slide')
  const slideDuration = 6
  const fadeDuration = 1.5
  const slideTimeline = gsap.timeline({ repeat: -1 })

  slides.forEach((slide, index) => {
    const nextSlide = slides[index + 1] || slides[0]
    gsap.set(slide, { opacity: index === 0 ? 1 : 0, scale: 1 })

    const tl = gsap.timeline({ defaults: { ease: "none" } })
    tl.to(slide, { scale: 1.15, duration: slideDuration + fadeDuration, ease: "power1.out" }, 0)

    if(index < slides.length) {
      slideTimeline.add(tl, index * (slideDuration - fadeDuration))
      slideTimeline.to(slide, { opacity: 0, duration: fadeDuration }, `> -${fadeDuration}`)

      if (nextSlide) {
        slideTimeline.to(nextSlide, { opacity: 1, duration: fadeDuration }, `<`)
      }
    }
  })
})
</script>

<template>
  <div class="bg-layer fixed inset-0 w-full h-screen overflow-hidden pointer-events-none">
    <img
      v-for="(src, index) in images"
      :key="index"
      :src="src"
      class="slide absolute inset-0 w-full h-full object-cover opacity-0 scale-100 will-change-transform"
      :alt="`Wedding ${index + 1}`"
    >
  </div>
</template>
