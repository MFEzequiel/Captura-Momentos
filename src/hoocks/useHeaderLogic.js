import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { SetState } from '../Context/productContext'
import { $, $$, cl } from './jquery'
import { useProduct } from './useProduct'

export function useHeaderLogic () {
  const { filter, setFilter } = useContext(SetState)
  const [theme, setTheme] = useState('light')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const html = $('html')
  html.setAttribute('data-theme', theme)

  useEffect(() => {
    window
      .matchMedia(`(prefers-color-scheme: ${theme})`)
      .addEventListener('change', () => {
        if (
          window.matchMedia &&
          window.matchMedia(`(prefers-color-scheme: ${theme})`).matches
        ) {
          return setTheme('light')
        } else {
          return setTheme('dark')
        }
      })
  }, [])

  const handleClick = useCallback(() => {
    const nav = $('.header-nav')
    const btl = $$('.header-button-line')

    btl.forEach(el => {
      el.classList.toggle('header-button-active')
    })
    nav.classList.toggle('header-nav-active')
  }, [])

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { error, handleClick, handleTheme }
}
