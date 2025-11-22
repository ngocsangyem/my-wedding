<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits(['complete'])

// Image List for the stack
const images = [
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=987&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=987&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1675851210020-045950ac0215?q=80&w=973&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1673897888993-a1db844c2ca1?q=80&w=987&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550784718-990c6de52adf?q=80&w=984&auto=format&fit=crop"
]

onMounted(() => {
  const loaderTl = gsap.timeline({
    onComplete: () => {
      emit('complete')
    }
  })

  // 1. POP & STACK (Entrance)
  loaderTl.fromTo(".loader-card",
    {
      scale: 0,
      opacity: 0,
      rotation: () => Math.random() * 30 - 15
    },
    {
      scale: 1,
      opacity: 1,
      rotation: () => Math.random() * 20 - 10,
      duration: 1.0,
      stagger: 0.5,
      ease: "back.out(1.4)"
    }
  )

  // 2. PAUSE
  loaderTl.to({}, { duration: 0.5 })

  // 3. EXIT (Gravity Drop)
  loaderTl.to(".loader-card", {
    y: window.innerHeight + 400,
    rotation: () => Math.random() * 60 - 30,
    opacity: 0,
    duration: 1.0,
    stagger: {
      each: 0.45,
      from: "end"
    },
    ease: "power2.in"
  }, "exit")

  // 4. REVEAL CONTENT
  loaderTl.to(".loader-overlay", {
    yPercent: -100,
    duration: 1.2,
    ease: "power2.inOut"
  }, ">")
})
</script>

<template>
  <div class="loader-overlay fixed inset-0 w-full h-screen bg-loader z-[9999] flex justify-center items-center visible">
    <div class="loader-stack relative w-[220px] h-[280px] md:w-[280px] md:h-[350px] [perspective:1200px]">
      <img
        v-for="(src, index) in images"
        :key="index"
        :src="src"
        class="loader-card absolute inset-0 w-full h-full object-cover border-[12px] border-white border-b-[30px] shadow-2xl opacity-0 origin-center will-change-transform"
        :alt="`Loader ${index + 1}`"
      >
    </div>
  </div>
</template>
