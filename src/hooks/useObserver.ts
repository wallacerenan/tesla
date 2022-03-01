import { useMotionValue } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'

const defaultThreshold = () => {
  const values: number[] = []

  const lenght = new Array(10).fill(0).map((_, index) => (index + 1) / 10)

  lenght.forEach(value => {
    values.push(value)

    if (value < 1) {
      values.push(value + 0.05)
    }
  })

  return values.map(value => parseFloat(value.toFixed(2)))
}

export default function useObserver(ref: React.RefObject<HTMLElement>) {
  const [visible, setVisible] = useState<boolean>(false)

  const visibility = useMotionValue<number>(0)

  const callback = useCallback<IntersectionObserverCallback>(
    ([observerEntry]) => {
      setVisible(observerEntry.isIntersecting)
      console.log('intersectionRatio: ', observerEntry.intersectionRatio)
      visibility.updateAndNotify(observerEntry.intersectionRatio)
    },
    [visibility]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: defaultThreshold(),
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, callback])

  return { visibility, visible }
}
