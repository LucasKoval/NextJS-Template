import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { GlobalContext } from '@/context/GlobalContext'
import { FcHome, FcDocument } from 'react-icons/fc'
import { SidebarSection, SidebarItem, Title } from './styles'

const Sidebar = () => {
  const router = useRouter()
  const { sidebarMenu, closeMenu } = useContext(GlobalContext)
  const [selected, setSelected] = useState(false)

  const goHome = () => {
    router.push('/')
    toast.success('Welcome Home!')
  }
  const goToPage = (id) => {
    router.push(`/page${id}`)
    toast.success('Redireccionando!')
  }

  const handleClickAway = () => {
    closeMenu()
  }

  return (
    sidebarMenu && (
      <ClickAwayListener onClickAway={handleClickAway}>
        <SidebarSection className="SidebarSection">
          <SidebarItem onClick={() => goHome()}>
            <FcHome />
            <h2>Home</h2>
          </SidebarItem>
          <SidebarItem onClick={() => goToPage('1')}>
            <FcDocument />
            <h2>Page 1</h2>
          </SidebarItem>
          <SidebarItem onClick={() => goToPage('2')}>
            <FcDocument />
            <h2>Page 2</h2>
          </SidebarItem>
          <SidebarItem onClick={() => goToPage('3')}>
            <FcDocument />
            <h2>Page 3</h2>
          </SidebarItem>
        </SidebarSection>
      </ClickAwayListener>
    )
  )
}

export default Sidebar
