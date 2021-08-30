import React from 'react'
import { useRouter } from 'next/router'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { MainSection, PageContainer } from '@/styles/mainStyles'

export default function Home() {
  const router = useRouter()

  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
        <h1>Testing</h1>
        <button onClick={() => router.push('/')}>Go to Home</button>
      </PageContainer>
    </MainSection>
  )
}
