import { useContext, useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

import Context from 'context/Models'

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(Context)

  const scrollY = useMotionValue(0)
  const scrollYProgress = useMotionValue(0)

  useEffect(() => {
    const element = wrapperRef.current

    if (element) {
      const updateScrollValue = () => {
        if (element) {
          const { scrollTop, scrollHeight, offsetHeight } = element

          const fullScroll = scrollHeight - offsetHeight

          scrollY.set(scrollTop)
          scrollYProgress.set(scrollTop / fullScroll)
        }
      }

      wrapperRef.current.addEventListener('scroll', updateScrollValue)

      return () => element?.removeEventListener('scroll', updateScrollValue)
    }
  }, [wrapperRef, scrollY, scrollYProgress])

  return { scrollY, scrollYProgress }
}
