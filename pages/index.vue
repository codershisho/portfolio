<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 transition-colors">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-up">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span class="block text-gray-900 dark:text-white">こんにちは、</span>
              <span class="block bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent">
                フルスタック開発者です
              </span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              最新技術でデジタル体験を構築。美しく機能的なWebアプリケーションの作成に情熱を注いでいます。
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#projects" @click.prevent="scrollTo('projects')" class="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                プロジェクトを見る
              </a>
              <a href="#contact" @click.prevent="scrollTo('contact')" class="px-8 py-4 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-gray-800 transition-all">
                お問い合わせ
              </a>
            </div>
          </div>
          <div class="relative animate-fade-in">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 opacity-20 absolute inset-0 blur-3xl"></div>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Developer" class="relative rounded-2xl shadow-2xl">
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase mb-2">私について</h2>
          <p class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">情熱的な開発者</p>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Web開発者として5年以上の経験があります。新しい技術を学び、素晴らしいものを作ることが大好きです。
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              ユーザー体験を第一に考え、パフォーマンスとデザインの両立を追求しています。
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div v-for="skill in aboutSkills" :key="skill.name" class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all">
              <div class="text-4xl mb-3">{{ skill.icon }}</div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase mb-2">スキル</h2>
          <p class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">技術スタック</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="skill in skills" :key="skill.name" class="group p-8 bg-white dark:bg-gray-950 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center">
                <span class="text-5xl mr-4">{{ skill.icon }}</span>
                <div>
                  <p class="text-sm font-medium text-primary-600 dark:text-primary-400">{{ skill.category }}</p>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ skill.name }}</h3>
                </div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600 dark:text-gray-400">習熟度</span>
                <span class="font-semibold text-gray-900 dark:text-white">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  class="h-full bg-gradient-to-r from-primary-600 to-accent-600 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase mb-2">プロジェクト</h2>
          <p class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">制作実績</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <img :src="project.imageUrl" :alt="project.title" class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <p class="text-sm font-medium text-primary-400 mb-2">{{ project.category }}</p>
              <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
              <p class="text-gray-300 mb-4">{{ project.description }}</p>
              <a :href="project.link" class="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors">
                詳細を見る
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase mb-2">お問い合わせ</h2>
          <p class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">ご連絡ください</p>
          <p class="text-lg text-gray-600 dark:text-gray-300">ご質問やお仕事のご依頼がございましたら、お気軽にお問い合わせください。</p>
        </div>
        <form class="space-y-6 bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-xl">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">お名前（姓）</label>
              <input type="text" id="firstName" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors">
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">お名前（名）</label>
              <input type="text" id="lastName" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors">
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">メールアドレス</label>
            <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">メッセージ</label>
            <textarea id="message" rows="5" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"></textarea>
          </div>
          <button type="submit" class="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium hover:from-primary-700 hover:to-accent-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
            送信する
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio - フルスタック開発者',
  meta: [
    { name: 'description', content: 'フルスタック開発者のポートフォリオサイト' }
  ]
})

const { scrollToSection } = useScroll()

const scrollTo = (sectionId: string) => {
  scrollToSection(sectionId)
}

const aboutSkills = [
  {
    name: 'フロントエンド',
    description: 'モダンなUI/UX',
    icon: '💻'
  },
  {
    name: 'バックエンド',
    description: '堅牢なAPI設計',
    icon: '⚙️'
  },
  {
    name: 'デザイン',
    description: '美しいインターフェース',
    icon: '🎨'
  },
  {
    name: 'DevOps',
    description: 'CI/CD & クラウド',
    icon: '🚀'
  }
]

const skills = [
  {
    name: 'JavaScript',
    category: '言語',
    level: 90,
    icon: '⚡'
  },
  {
    name: 'TypeScript',
    category: '言語',
    level: 85,
    icon: '📘'
  },
  {
    name: 'Python',
    category: '言語',
    level: 75,
    icon: '🐍'
  },
  {
    name: 'Vue.js',
    category: 'フレームワーク',
    level: 90,
    icon: '💚'
  },
  {
    name: 'Nuxt.js',
    category: 'フレームワーク',
    level: 85,
    icon: '🚀'
  },
  {
    name: 'React',
    category: 'フレームワーク',
    level: 80,
    icon: '⚛️'
  },
  {
    name: 'Node.js',
    category: 'バックエンド',
    level: 85,
    icon: '🟢'
  },
  {
    name: 'TailwindCSS',
    category: 'スタイリング',
    level: 90,
    icon: '🎨'
  },
  {
    name: 'Git',
    category: 'ツール',
    level: 85,
    icon: '📦'
  }
]

const projects = [
  {
    title: 'ECプラットフォーム',
    category: 'Webアプリケーション',
    description: 'Nuxt 3とStripe統合による本格的なECサイト',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    link: '#'
  },
  {
    title: 'タスク管理アプリ',
    category: '生産性ツール',
    description: 'Vue 3とFirebaseを使用したリアルタイムタスク管理',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    link: '#'
  },
  {
    title: 'ポートフォリオサイト',
    category: '個人サイト',
    description: 'Nuxt 3とTailwindCSSで構築したこのサイト',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    link: '#'
  }
]
</script>
