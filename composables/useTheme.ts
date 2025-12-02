export const useTheme = () => {
    const colorMode = useState('theme', () => 'light')

    const setTheme = (theme: 'light' | 'dark') => {
        colorMode.value = theme
        if (process.client) {
            localStorage.setItem('theme', theme)
            if (theme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }

    const toggleTheme = () => {
        setTheme(colorMode.value === 'light' ? 'dark' : 'light')
    }

    const initTheme = () => {
        if (process.client) {
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            const theme = savedTheme || (prefersDark ? 'dark' : 'light')
            setTheme(theme)
        }
    }

    return {
        colorMode,
        setTheme,
        toggleTheme,
        initTheme
    }
}
