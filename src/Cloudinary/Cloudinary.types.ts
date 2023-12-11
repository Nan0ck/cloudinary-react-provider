import { Cloudinary } from '@cloudinary/url-gen'

export interface CloudinaryProviderProps {
  children: React.ReactNode
  cloudName: string
}

export type CloudinaryContextType = {
  client: Cloudinary
}
