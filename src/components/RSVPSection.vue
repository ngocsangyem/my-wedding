<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

// Countdown Logic (Simplified for Vue)
const days = ref('00')
const hours = ref('00')
const mins = ref('00')
const secs = ref('00')

const weddingDate = new Date('September 21, 2025 00:00:00').getTime()

const updateTime = () => {
  const now = new Date().getTime()
  const gap = weddingDate - now
  if (gap < 0) return

  const d = Math.floor(gap / (1000 * 60 * 60 * 24))
  const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((gap % (1000 * 60)) / 1000)

  days.value = d.toString().padStart(2, '0')
  hours.value = h.toString().padStart(2, '0')
  mins.value = m.toString().padStart(2, '0')
  secs.value = s.toString().padStart(2, '0')
}

const celebrateRSVP = (e: Event) => {
  const btn = e.target as HTMLButtonElement
  alert('RSVP Sent! We can\'t wait to see you.')

  const rect = btn.getBoundingClientRect()
  const startX = rect.left + rect.width / 2
  const startY = rect.top

  let container = document.getElementById('petal-container')
  if (!container) {
    container = document.createElement('div')
    container.id = 'petal-container'
    container.className = 'fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]'
    document.body.appendChild(container)
  }

  const petalCount = 30
  const colors = ['#FFFFFF', '#E5CFCF', '#F4F4F4']

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div')
    petal.classList.add('petal')
    const size = Math.random() * 10 + 8
    petal.style.width = `${size}px`
    petal.style.height = `${size}px`
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] ?? '';

    gsap.set(petal, { x: startX, y: startY, opacity: 1, scale: 0 })
    container.appendChild(petal)

    const endX = (Math.random() - 0.5) * 400
    const endY = -(Math.random() * 150 + 100)

    const tl = gsap.timeline()
    tl.to(petal, { x: startX + endX, y: startY + endY, rotation: Math.random() * 360, scale: 1, duration: 0.6 + Math.random() * 0.4, ease: "power1.out" })
    tl.to(petal, { y: window.innerHeight + 50, x: `+=${(Math.random() - 0.5) * 50}`, rotation: `+=${Math.random() * 180}`, duration: 2 + Math.random(), ease: "power1.in", }, "-=0.2")
    tl.to(petal, { opacity: 0, duration: 0.5 }, "-=0.5")
    tl.call(() => petal.remove())
  }
}

onMounted(() => {
  setInterval(updateTime, 1000)
  updateTime()

  // Animate sections
  const revealElements = document.querySelectorAll(".section-rsvp .split-reveal, .section-rsvp .fade-reveal")
  revealElements.forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    })
  })

  // Initial Reel Animation logic omitted for brevity, can be added back if needed for strict visual match
})
</script>

<template>
  <section class="section-rsvp bg-accent text-black min-h-screen py-24 px-8 flex flex-col items-center justify-start relative z-20 md:pb-16 pb-32">
    <h2 class="editorial-text split-reveal text-center font-serif italic text-[clamp(1.5rem,4vw,4rem)]">Be Part of Our Story</h2>

    <div class="countdown-wrap fade-reveal mt-12 flex gap-4 md:gap-8">
      <div class="count-unit flex flex-col items-center" v-for="(val, label) in {Days: days, Hrs: hours, Mins: mins, Secs: secs}" :key="label">
        <div class="reel-window h-[2.5rem] md:h-[3.5rem] overflow-hidden relative block [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_75%,transparent_100%)]">
          <div class="num-item h-[2.5rem] md:h-[3.5rem] flex items-center justify-center font-serif text-[2rem] md:text-[3rem] leading-[2.5rem] md:leading-[3.5rem] tabular-nums">
            {{ val }}
          </div>
        </div>
        <span class="count-label text-[0.6rem] md:text-[0.75rem] uppercase tracking-[0.2em] mt-2">{{ label }}</span>
      </div>
    </div>

    <form class="rsvp-form fade-reveal w-full max-w-2xl mt-12 md:mt-20 flex flex-col gap-8 md:gap-10" @submit.prevent="(e) => celebrateRSVP(e)">
      <div class="form-row grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="form-group flex flex-col gap-3 text-left group">
          <label class="font-sans text-xs uppercase tracking-[0.1em] opacity-60 font-medium transition-colors group-focus-within:text-black">Full Name</label>
          <input type="text" class="form-input bg-transparent border-none border-b border-black/30 py-2 font-serif text-xl md:text-2xl text-black outline-none transition-colors duration-300 focus:border-black placeholder-black/20" placeholder="Jane Doe" required>
        </div>
        <div class="form-group flex flex-col gap-3 text-left group">
          <label class="font-sans text-xs uppercase tracking-[0.1em] opacity-60 font-medium transition-colors group-focus-within:text-black">Email</label>
          <input type="email" class="form-input bg-transparent border-none border-b border-black/30 py-2 font-serif text-xl md:text-2xl text-black outline-none transition-colors duration-300 focus:border-black placeholder-black/20" placeholder="jane@example.com" required>
        </div>
      </div>

      <div class="form-group flex flex-col gap-3 text-left group">
        <label class="font-sans text-xs uppercase tracking-[0.1em] opacity-60 font-medium transition-colors group-focus-within:text-black">Relationship</label>
        <select class="form-input bg-transparent border-none border-b border-black/30 py-2 font-serif text-xl md:text-2xl text-black outline-none transition-colors duration-300 focus:border-black cursor-pointer" required>
          <option value="" disabled selected>Choose relationship</option>
          <option value="family">Family</option>
          <option value="friend">Friend</option>
          <option value="colleague">Colleague</option>
        </select>
      </div>

      <div class="form-group flex flex-col gap-3 text-left">
        <label class="font-sans text-xs uppercase tracking-[0.1em] opacity-60 font-medium">Will you be attending?</label>
        <div class="radio-group flex gap-8 mt-2">
          <label class="radio-option flex items-center gap-3 cursor-pointer font-serif text-lg md:text-xl">
            <input type="radio" name="attendance" value="yes" checked class="peer sr-only">
            <span class="w-5 h-5 border border-black rounded-full flex items-center justify-center peer-checked:before:bg-black before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-transparent before:transition-colors"></span>
            <span>Yes, joyfully!</span>
          </label>
          <label class="radio-option flex items-center gap-3 cursor-pointer font-serif text-lg md:text-xl">
            <input type="radio" name="attendance" value="no" class="peer sr-only">
            <span class="w-5 h-5 border border-black rounded-full flex items-center justify-center peer-checked:before:bg-black before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-transparent before:transition-colors"></span>
            <span>Regretfully decline</span>
          </label>
        </div>
      </div>

      <div class="form-group flex flex-col gap-3 text-left group">
        <label class="font-sans text-xs uppercase tracking-[0.1em] opacity-60 font-medium transition-colors group-focus-within:text-black">Message / Dietary</label>
        <input type="text" class="form-input bg-transparent border-none border-b border-black/30 py-2 font-serif text-xl md:text-2xl text-black outline-none transition-colors duration-300 focus:border-black placeholder-black/20" placeholder="Any dietary restrictions?">
      </div>

      <button type="submit" class="btn-submit relative self-center mt-8 px-12 py-6 bg-transparent border border-black text-black font-sans text-base uppercase tracking-[0.1em] transition-all duration-300 hover:bg-black hover:text-accent w-full md:w-auto text-center cursor-pointer">Confirm RSVP</button>
    </form>
  </section>
</template>
