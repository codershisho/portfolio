export const useScroll = () => {
    const scrollToSection = (sectionId: string) => {
        if (process.client) {
            const element = document.getElementById(sectionId)
            if (element) {
                const headerOffset = 80
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        }
    }

    return {
        scrollToSection
    }
}
