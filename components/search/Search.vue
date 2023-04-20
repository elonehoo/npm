<script setup lang="ts">

const router = useRouter()

const input = ref<HTMLInputElement>()

onKeyStroke('/', (e) => {
  e.preventDefault()
  router.replace('/collection/all')
})

const categorySearch = ref('')

</script>

<template>
  <div mb--3 md:mx-6 md:mt-6>
    <div class="border-b py-3  flex md:shadow md:rounded outline-none md:py-1 px-4 border-x border-b md:border-t border-base">
      <div i-carbon-search m-auto flex-none opacity-60 />
      <form action="/collection/all" class="flex-auto" role="search" method="get" @submit.prevent>
        <input
          ref="input"
          v-model="categorySearch"
          aria-label="Search"
          class="text-base outline-none w-full py-1 px-4 m-0 bg-transparent"
          name="s"
          placeholder="Search NPM Packages..."
          autofocus
          autocomplete="off"
          @keydown="onKeydown"
        >
      </form>

      <button class="flex items-center opacity-60 hover:opacity-80">
        <div v-show="categorySearch" i-carbon:close m-auto text-lg -mr-1 @click="categorySearch = ''" />
      </button>
    </div>
  </div>
</template>
