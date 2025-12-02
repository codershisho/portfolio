<template>
  <header class="bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800" data-v-2e3f553f>
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-2e3f553f>
      <div class="flex justify-between h-16" data-v-2e3f553f>
        <div class="flex" data-v-2e3f553f>
          <div class="flex-shrink-0 flex items-center" data-v-2e3f553f>
            <a href="#hero" @click.prevent="scrollTo('hero')" class="text-2xl font-bold font-display bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent cursor-pointer" data-v-2e3f553f>Portfolio</a>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8" data-v-2e3f553f>
            <a href="#hero" @click.prevent="scrollTo('hero')" class="border-transparent text-gray-600 dark:text-gray-300 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors cursor-pointer" data-v-2e3f553f>ホーム</a>
            <a href="#about" @click.prevent="scrollTo('about')" class="border-transparent text-gray-600 dark:text-gray-300 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors cursor-pointer" data-v-2e3f553f>私について</a>
            <a href="#skills" @click.prevent="scrollTo('skills')" class="border-transparent text-gray-600 dark:text-gray-300 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors cursor-pointer" data-v-2e3f553f>スキル</a>
            <a href="#projects" @click.prevent="scrollTo('projects')" class="border-transparent text-gray-600 dark:text-gray-300 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors cursor-pointer" data-v-2e3f553f>プロジェクト</a>
            <a href="#contact" @click.prevent="scrollTo('contact')" class="border-transparent text-gray-600 dark:text-gray-300 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors cursor-pointer" data-v-2e3f553f>お問い合わせ</a>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <ThemeToggle />
          <!-- Mobile menu button -->
          <div class="-mr-2 flex items-center sm:hidden" data-v-2e3f553f>
            <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors" aria-controls="mobile-menu" aria-expanded="false" data-v-2e3f553f>
              <span class="sr-only" data-v-2e3f553f>メニューを開く</span>
              <svg :class="{'hidden': isOpen, 'block': !isOpen }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-v-2e3f553f>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-2e3f553f></path>
              </svg>
              <svg :class="{'block': isOpen, 'hidden': !isOpen }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-v-2e3f553f>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-2e3f553f></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="sm:hidden" id="mobile-menu" data-v-2e3f553f>
      <div class="pt-2 pb-3 space-y-1" data-v-2e3f553f>
        <a href="#hero" @click.prevent="scrollTo('hero'); isOpen = false" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors cursor-pointer" data-v-2e3f553f>ホーム</a>
        <a href="#about" @click.prevent="scrollTo('about'); isOpen = false" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors cursor-pointer" data-v-2e3f553f>私について</a>
        <a href="#skills" @click.prevent="scrollTo('skills'); isOpen = false" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors cursor-pointer" data-v-2e3f553f>スキル</a>
        <a href="#projects" @click.prevent="scrollTo('projects'); isOpen = false" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors cursor-pointer" data-v-2e3f553f>プロジェクト</a>
        <a href="#contact" @click.prevent="scrollTo('contact'); isOpen = false" class="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary-500 hover:text-gray-900 dark:hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors cursor-pointer" data-v-2e3f553f>お問い合わせ</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const { scrollToSection } = useScroll()

const scrollTo = (sectionId: string) => {
  scrollToSection(sectionId)
}
</script>

<style scoped>
.router-link-active {
  @apply border-primary-500 text-gray-900 dark:text-white;
}
</style>
