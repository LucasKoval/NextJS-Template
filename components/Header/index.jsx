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
      <ImageContainer className="burger">
        {sidebarMenu ? (
          <GrClose onClick={closeMenu} style={{ color: '#D8D9D3' }} />
        ) : (
          <GiHamburgerMenu onClick={openMenu} />
        )}
      </ImageContainer>

      <Title>NextJS Template</Title>

      <ImageContainer className="themeToogle" onClick={() => themeToggler()}>
        <Image
          src="/icon/themeToogle.png"
          alt="SearchIcon"
          width="40"
          height="40"
          className="themeToogle"
        />
      </ImageContainer>
    </HeaderSection>
  )
}

export default Header
