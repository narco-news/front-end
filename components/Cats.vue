<template>
  <div class="cats flex flex-row justify-center flex-wrap h-auto py-4 mx-4">
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/mexican-dto">Mexican DTOs</n-link>
    </div>
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/central-america">Central America</n-link>
    </div>
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/south-america">South America</n-link>
    </div>
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/southeast-asia">Southeast Asia</n-link>
    </div>
    <!-- <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/central-asia">Central Asia</n-link>
    </div>
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/middle-east">Middle East</n-link>
    </div>-->
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/uk-scene">UK Scene</n-link>
    </div>
    <!-- <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/europe">Europe</n-link>
    </div>-->
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/femme-fatale">Femme Fatale</n-link>
    </div>
    <div class="px-2 lg:px-4">
      <n-link
        class="borderLeftRight text-md md:text-lg"
        to="/tag/film-and-television"
      >Film and Television</n-link>
    </div>
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/development">Development</n-link>
    </div>
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/opinion">Opinion</n-link>
    </div>
    <div class="px-2 lg:px-4">
      <n-link class="borderLeftRight text-md md:text-lg" to="/tag/announcements">Announcements</n-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cats {
  background-color: #eef3ed;
  a {
    color: #017374;
    font-weight: 500;
  }
}
.borderMarker a {
  position: relative !important;
}

.borderMarker::after a {
  content: '' !important;
  position: absolute !important;
  z-index: -1 !important;
  top: 70% !important;
  left: -0.1px !important;
  right: -0.1px !important;
  bottom: 0 !important;
  transition: top 0.1s ease-in-out !important;
  background-color: rgba(87, 120, 243, 0.5) !important;
}

.borderMarker:hover::after a {
  top: 0 !important;
}
</style>
