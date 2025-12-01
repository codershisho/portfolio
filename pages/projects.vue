<template>
  <div class="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          My Projects
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Projects - Portfolio',
  meta: [
    { name: 'description', content: 'My projects' }
  ]
})

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Application',
    description: 'A full-featured e-commerce platform built with Nuxt 3 and Stripe integration.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    link: '#'
  },
  {
    title: 'Task Management App',
    category: 'Productivity',
    description: 'A real-time task management application using Vue 3 and Firebase.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    link: '#'
  },
  {
    title: 'Portfolio Site',
    category: 'Personal',
    description: 'This portfolio site built with Nuxt 3 and TailwindCSS.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    link: '#'
  }
]
</script>
