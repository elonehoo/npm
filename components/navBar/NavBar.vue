<script lang="ts" setup>

  const route = useRoute()

  const showNav= computed(() => !route.path.startsWith('/collection'))

  const isHomepage= computed(() => route.path === '/')
</script>

<template>
  <nav
    class="dragging"
    flex="~ gap4 none"
    p4 relative bg-base z-10 border="b base" text-xl
  >
    <div flex-auto />
      <NavBarLogo />
      <NavBarGitHub />
      <ToggleDarkToggle flex-none />
  </nav>
</template>
