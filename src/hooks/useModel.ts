import { useCallback, useContext, useEffect } from 'react'

import Context from 'context/Models'

export function useModel(modelName: string) {
  const context = useContext(Context)

  const { registerModel, unregisterModel, getModelByName } = context

  useEffect(
    () => () => unregisterModel(modelName),
    [modelName, unregisterModel]
  )

  const getModel = useCallback(
    () => getModelByName(modelName),
    [getModelByName, modelName]
  )

  return {
    registerModel,
    getModel,
  }
}
