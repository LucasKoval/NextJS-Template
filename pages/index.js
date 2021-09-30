import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import { BodyContainer, MainSection, PageContainer } from '@/styles/mainStyles'

export default function Home() {
  const router = useRouter()
  /*/// Show the spinner when loading the component (NOT_IN_USE)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (loading) {
    return (
      <BodyContainer className="BodyContainer">
        <Loader type="Watch" color="#58a6ff" height={100} width={100} />
      </BodyContainer>
    )
  }
  */
  const redirect = () => {
    router.push('/test')
    toast.success('Exito!')
  }

  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
        <h1>Home</h1>
        <button onClick={redirect}>Go to Test</button>
      </PageContainer>
    </MainSection>
  )
}
