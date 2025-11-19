import React from 'react'

const AuthorContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='custom-container flex w-full flex-col gap-4 pt-4 pb-10 md:gap-10 md:pt-12 md:pb-29.5'>{children}</div>
  )
}

export default AuthorContainer