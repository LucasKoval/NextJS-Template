import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { IoHomeOutline, IoDocumentTextOutline } from 'react-icons/io5'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { GlobalContext } from '@/context/GlobalContext'
import { HeaderSection, Title, SidebarItem, ImageContainer } from './styles'

const Header = () => {
  const router = useRouter()
  const { sidebarMenu, openMenu, closeMenu, themeStyle, setThemeStyle } = useContext(GlobalContext)
  const [selected, setSelected] = useState(false)

  const themeToggler = () => {
    themeStyle === 'light' ? setThemeStyle('dark') : setThemeStyle('light')
  }

  const goHome = () => {
    router.push('/')
    toast.success('Welcome Home!')
  }

  const goToPage = (id) => {
    router.push(`/page${id}`)
    toast.success('Redireccionando!')
  }

  return (
    <HeaderSection className="HeaderSection">
      <ImageContainer className="burger">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <IoHomeOutline />
              <li>Home</li>
            </a>
            <a href="#">
              <IoDocumentTextOutline />
              <li>Page 1</li>
            </a>
            <a href="#">
              <IoDocumentTextOutline />
              <li>Page 2</li>
            </a>
            <a href="#">
              <IoDocumentTextOutline />
              <li>Page 3</li>
            </a>
          </ul>
        </div>
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
