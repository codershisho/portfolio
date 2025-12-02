<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-all transform hover:scale-105">
    <div class="p-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-4xl mr-4">{{ skill.icon }}</span>
          <div>
            <p class="text-sm font-medium text-primary-600 dark:text-primary-400">
              {{ skill.category }}
            </p>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-1">
              {{ skill.name }}
            </h3>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex justify-between mb-1">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.level }}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div 
            class="bg-gradient-to-r from-primary-600 to-primary-400 h-2.5 rounded-full transition-all duration-500"
            :style="{ width: skill.level + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  skill: {
    type: Object,
    required: true
  }
})
</script>
