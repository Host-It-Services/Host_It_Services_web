'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()
  const [displayText, setDisplayText] = useState("")
  const textArray = t('hero.title').split("")

  useEffect(() => {
    const typingEffect = () => {
      if (displayText.length < textArray.length) {
        setDisplayText((prev) => prev + textArray[prev.length])
      }
    }

    const typingInterval = setInterval(typingEffect, 200)

    return () => clearInterval(typingInterval)
  }, [displayText, textArray])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 md:pt-32 md:pb-20 to-primary-dark text-black bg-[url('/global-com.webp')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-white text-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {displayText}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 text-white text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.a
            href="https://hostitservices.com/billing/"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t('hero.registerDomainAriaLabel')}
          >
            {t('hero.cta')}          
          </motion.a>
          <motion.a
            href="#plans"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t('hero.getHostingAriaLabel')}
          >
            {t('hero.gwh')}          
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Hero

