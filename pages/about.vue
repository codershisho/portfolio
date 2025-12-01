<template>
  <div class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A passionate developer
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          I have been working as a web developer for over 5 years. I love to learn new technologies and build cool things.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="skill in skills" :key="skill.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <!-- Heroicon name: outline/check -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ skill.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ skill.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About - Portfolio',
  meta: [
    { name: 'description', content: 'About me' }
  ]
})

const skills = [
  {
    name: 'Frontend Development',
    description: 'Expertise in Vue.js, Nuxt.js, React, and modern CSS frameworks like TailwindCSS.',
  },
  {
    name: 'Backend Development',
    description: 'Experience with Node.js, Express, and database management.',
  },
  {
    name: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces.',
  },
  {
    name: 'DevOps',
    description: 'Familiar with CI/CD pipelines, Docker, and cloud deployment.',
  },
]
</script>
