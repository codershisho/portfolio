<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-all transform hover:scale-105">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="project.imageUrl" :alt="project.title">
    </div>
    <div class="flex-1 p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-primary-600 dark:text-primary-400">
          {{ project.category }}
        </p>
        <a :href="project.link" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ project.title }}
          </p>
          <p class="mt-3 text-base text-gray-500 dark:text-gray-300">
            {{ project.description }}
          </p>
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a :href="project.link" class="text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition-colors">
            View Project &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>
