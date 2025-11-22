<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Lenis from 'lenis' // UPDATED: New package name
import TheLoader from '@/components/TheLoader.vue';
import BackgroundSlideshow from '@/components/BackgroundSlideshow.vue';

const isLoaded = ref(false)
let lenis: Lenis | null = null

// Initialize Lenis but keep it stopped until loader finishes
onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true, // Updated property name for newer Lenis versions if needed, usually 'smooth' is deprecated or aliased
  })

  lenis.stop() // Lock scroll initially

  function raf(time: number) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})

// Unlock scroll when loader emits 'complete'
const handleLoaderComplete = () => {
  isLoaded.value = true
  lenis?.start()
}
</script>

<template>
  <div class="antialiased text-white bg-black font-sans selection:bg-accent selection:text-black">
    <!-- Noise Overlay -->
    <div class="fixed inset-0 pointer-events-none z-[9999] opacity-[0.07] bg-noise w-full h-full"></div>

    <!-- Components -->
    <TheLoader @complete="handleLoaderComplete" />
    <BackgroundSlideshow />

    <!-- Main Content -->
    <main class="relative z-10">
      <RouterView />
    </main>
  </div>
</template>
