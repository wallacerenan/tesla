import { createContext, RefObject } from 'react'
import { Model } from 'types/model'

type ModelsContext = {
  wrapperRef: RefObject<HTMLElement>
  registeredModels: Model[]
  registerModel: (model: Model) => void
  unregisterModel: (modelName: string) => void
  getModelByName: (modelName: string) => Model | null
}

export default createContext<ModelsContext>({} as ModelsContext)
