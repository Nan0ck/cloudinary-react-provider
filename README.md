# Cloudinary React Provider

![npm](https://img.shields.io/npm/v/cloudinary-react-provider)
![npm bundle size](https://img.shields.io/bundlephobia/min/cloudinary-react-provider)
![GitHub issues](https://img.shields.io/github/issues/your-username/cloudinary-react-provider)
![GitHub license](https://img.shields.io/github/license/your-username/cloudinary-react-provider)

A React library that provides a Context Provider for easy integration of Cloudinary in your React applications.

## Installation

```bash
npm install cloudinary-react-provider @cloudinary/url-gen @cloudinary/react
```

## Usage

### 1. Wrap your application with `CloudinaryProvider`

Wrap your application with the `CloudinaryProvider` at the root level to provide the Cloudinary client to all components.

```jsx
import React from 'react'
import { CloudinaryProvider } from 'cloudinary-react-provider'

const App = () => {
  return (
    <CloudinaryProvider cloudName='your-cloud-name'>{/* Your application components go here */}</CloudinaryProvider>
  )
}

export default App
```

### 2. Use the `useCloudinary` hook to access the Cloudinary client

Use the `useCloudinary` hook in any component to access the Cloudinary client instance.

```jsx
import React from 'react'
import { useCloudinary } from 'cloudinary-react-provider'
import { AdvancedImage } from '@cloudinary/react'

const MyComponent = () => {
  const { client } = useCloudinary()
  const image = client.image('image_public_id')
  // Use the cloudinary instance here

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
}

export default MyComponent
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
