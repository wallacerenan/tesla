import { ReactNode, RefObject } from 'react'

export type Model = {
  name: string
  description: string
  imgSrc: string
  overlayNode: ReactNode
  sectionRef: RefObject<HTMLElement>
}
