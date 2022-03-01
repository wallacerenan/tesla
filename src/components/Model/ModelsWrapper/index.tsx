import { useCallback, useState } from 'react'
import { useRef } from 'react'
import { Model } from 'types/model'
import { Container } from './styles'

import Context from 'context/Models'
import OverlaysRoot from '../OverlaysRoot'
import ModelOverlay from '../ModelOverlay'

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<Model[]>([])

  const registerModel = useCallback((model: Model) => {
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state =>
      state.filter(model => model.name !== modelName)
    )
  }, [])

  const getModelByName = useCallback(
    (modelName: string) => {
      return registeredModels.find(item => item.name === modelName) || null
    },
    [registeredModels]
  )

  return (
    <Context.Provider
      value={{
        getModelByName,
        unregisterModel,
        registerModel,
        wrapperRef,
        registeredModels,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.name} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>
        {children}
      </Container>
    </Context.Provider>
  )
}

export default ModelsWrapper
