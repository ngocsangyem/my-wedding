<script setup lang="ts">
import SectionHero from '@/components/SectionHero.vue'
import IntroSection from '@/components/IntroSection.vue'
import VenueSection from '@/components/VenueSection.vue'
import RSVPSection from '@/components/RSVPSection.vue'
import MapSection from '@/components/MapSection.vue'
</script>

<template>
  <div>
    <SectionHero />
    <IntroSection />
    <VenueSection />
    <RSVPSection />
    <MapSection />

    <!-- Footer Spacer -->
    <section class="section-footer h-[40vh] flex items-center justify-center pointer-events-none relative z-10"></section>
  </div>
</template>
