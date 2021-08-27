import React, { useState } from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BodyContainer, MainSection, PageContainer } from '../styles/mainStyles'

export default function Home() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1200)

  if (loading) {
    return (
      <BodyContainer className="BodyContainer">
        <Loader type="Watch" color="#58a6ff" height={100} width={100} />
      </BodyContainer>
    )
  }

  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer"></PageContainer>
    </MainSection>
  )
}
