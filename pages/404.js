import React from 'react'
import Image from 'next/image'
import { ErrorContainer, NotFound } from '../styles/mainStyles'

export default function Error404() {
  return (
    <ErrorContainer>
      <NotFound>
        Oops!.. <br /> Something went wrong (404)
      </NotFound>
      <Image src="/images/notFound.gif" alt="Not found" width="480" height="270" />
    </ErrorContainer>
  )
}
