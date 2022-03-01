import { ReactNode } from 'react'
import { Container } from './styles'

import { useModel } from 'hooks/useModel'
import { useEffect } from 'react'
import { useRef } from 'react'

import Image from 'next/image'

type Props = {
  modelName: string
  overlayNode: ReactNode
  modelImage: string
}

export const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  modelImage,
  ...props
}) => {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = sectionRef.current

    if (element) {
      registerModel({
        name: modelName,
        overlayNode,
        description: '',
        imgSrc: modelImage,
        sectionRef,
      })
    }
  }, [modelImage, modelName, overlayNode, registerModel])

  return (
    <Container ref={sectionRef} {...props}>
      <Image
        alt={modelName}
        src={modelImage}
        objectFit="cover"
        layout="fill"
        className="image"
      />
      {children}
    </Container>
  )
}

export default ModelSection
