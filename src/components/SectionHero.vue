<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to(".hero-center", {
    scale: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-hero",
      start: "top top",
      end: "80% top",
      scrub: true
    }
  })
})
</script>

<template>
  <section class="section-hero h-screen flex flex-col justify-between p-8 relative z-10 w-full">
    <div class="hero-header flex justify-between items-start mix-blend-difference text-white/90">
      <div class="text-sm uppercase tracking-widest opacity-80">EST. 2025</div>
      <div class="text-sm uppercase tracking-widest opacity-80">NYC</div>
    </div>
    <div class="hero-center text-center">
      <h1 class="display-text font-serif font-normal leading-none tracking-tight origin-center text-[3.5rem] md:text-[clamp(3rem,8vw,9rem)]">
        Anna &<br>James
      </h1>
    </div>
    <div class="hero-footer flex justify-between items-end text-white/80">
      <div class="text-sm uppercase tracking-widest opacity-80">Scroll to Begin</div>
      <div class="text-sm uppercase tracking-widest opacity-80">09.21.25</div>
    </div>
  </section>
</template>
