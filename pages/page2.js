import React from 'react'
import { useRouter } from 'next/router'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Sidebar from '@/components/Sidebar'
import { MainSection, PageContainer } from '@/styles/globalStyles'

export default function Home() {
  const router = useRouter()

  return (
    <MainSection className="MainSection">
      <Sidebar />
      <PageContainer className="PageContainer">
        <h1>Page 2</h1>
      </PageContainer>
    </MainSection>
  )
}
