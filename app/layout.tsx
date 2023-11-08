import type { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <title>My App</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

