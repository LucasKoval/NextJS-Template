import React from 'react'
import Image from 'next/image'
import { ErrorContainer, Title } from '@/styles/mainStyles'

export default function Error404() {
  return (
    <ErrorContainer>
      <Title className="notFound">
        Oops!.. <br /> Something went wrong (404)
      </Title>
      <Image src="/img/not-found.gif" alt="Not found" width="480" height="270" />
    </ErrorContainer>
  )
}
