import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { GlobalContext } from '@/context/GlobalContext'
import { HeaderSection, Title, ImageContainer } from './styles'

const Header = () => {
  const { sidebarMenu, openMenu, closeMenu, themeStyle, setThemeStyle } = useContext(GlobalContext)

  const themeToggler = () => {
    themeStyle === 'light' ? setThemeStyle('dark') : setThemeStyle('light')
  }

  return (
    <HeaderSection className="HeaderSection">
      <ImageContainer className="searchIcon">
        {sidebarMenu ? (
          <GrClose onClick={closeMenu} style={{ color: '#D8D9D3' }} />
        ) : (
          <GiHamburgerMenu onClick={openMenu} />
        )}
      </ImageContainer>

      <Title>NextJS Template</Title>

      <ImageContainer className="myAvatar" onClick={() => themeToggler()}>
        <Image
          src="/icon/themeToogle.png"
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
