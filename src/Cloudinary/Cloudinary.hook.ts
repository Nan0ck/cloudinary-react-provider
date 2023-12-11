import { useContext } from 'react'
import { CloudinaryContextType } from './Cloudinary.types'
import { CloudinaryContext } from './Clourdinary'

export const useCloudinary = (): CloudinaryContextType => {
  const cloudinary = useContext(CloudinaryContext)
  if (!cloudinary) {
    throw new Error('useCloudinary must be used within a CloudinaryProvider')
  }
  return cloudinary
}
