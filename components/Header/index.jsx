import React from 'react'
import Image from 'next/image'
import { HeaderSection, Title, ImageContainer } from './styles'

const Header = () => {
  return (
    <HeaderSection className="HeaderSection">
      <ImageContainer className="searchIcon">
        <Image
          src="/images/search.webp"
          alt="SearchIcon"
          width="50"
          height="50"
          className="searchIcon"
        />
      </ImageContainer>

      <Title>NextJS Template</Title>

      <ImageContainer className="myAvatar">
        <Image
          src="/images/avatar.jpg"
          alt="SearchIcon"
          width="64"
          height="64"
          className="myAvatar"
        />
      </ImageContainer>
    </HeaderSection>
  )
}

export default Header
