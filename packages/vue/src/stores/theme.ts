import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useDarkStore = defineStore('dark', () => {
  const dark = ref<boolean>(false)
  const toggleDark = () => {
    dark.value = !dark.value
  }
  watch(dark, () => {
    if (dark.value) {
      document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  })
  return { dark, toggleDark }
})

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<string>('light')
  const setTheme = (_theme: string) => {
    const html = document.getElementsByTagName('html')[0]

    /**取消现有主题 */
    html.classList.toggle(theme.value)

    /**设置新主题 */
    theme.value = _theme
    html.classList.toggle(theme.value)
  }
  return { theme, setTheme }
})
