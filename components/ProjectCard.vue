<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="project.imageUrl" :alt="project.title">
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-indigo-600">
          {{ project.category }}
        </p>
        <a :href="project.link" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ project.title }}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {{ project.description }}
          </p>
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a :href="project.link" class="text-indigo-600 hover:text-indigo-500 font-medium">
            View Project &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>
