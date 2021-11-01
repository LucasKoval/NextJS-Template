import React from 'react'
import Image from 'next/image'
import { MainSection, PageContainer, ErrorContainer, Title } from '@/styles/globalStyles'

export default function Custom404() {
  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
        <ErrorContainer>
          <Title className="notFound">
            Oops!.. <br /> Something went wrong (404)
          </Title>
          <Image src="/img/not-found.gif" alt="Not found" width="480" height="270" />
        </ErrorContainer>
      </PageContainer>
    </MainSection>
  )
}
