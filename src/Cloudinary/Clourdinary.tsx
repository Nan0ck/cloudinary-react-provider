import React from 'react'

import { createContext } from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { CloudinaryProviderProps, CloudinaryContextType } from './Cloudinary.types'

export const CloudinaryContext = createContext<CloudinaryContextType | null>(null)

export const CloudinaryProvider = ({ children, cloudName }: CloudinaryProviderProps) => {
  const client = new Cloudinary({ cloud: { cloudName } })
  return <CloudinaryContext.Provider value={{ client }}>{children}</CloudinaryContext.Provider>
}
