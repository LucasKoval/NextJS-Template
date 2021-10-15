import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Drawer } from '@material-ui/core'
import { SwipeableDrawer } from '@material-ui/core'
import { GlobalContext } from '@/context/GlobalContext'
import { SidebarSection, Title, ImageContainer } from './styles'

const Sidebar = () => {
  const router = useRouter()
  const { sidebarMenu } = useContext(GlobalContext)

  const toHome = () => {
    router.push('/')
    toast.success('Exito!')
  }
  const toTest = () => {
    router.push('/test')
    toast.success('Exito!')
  }

  return (
    sidebarMenu && (
      <SidebarSection className="SidebarSection">
        {/* <Drawer anchor={'left'} variant="permanent"> */}
        <div>
          <h2 onClick={toHome}>Home</h2>
        </div>
        <div>
          <h2 onClick={toTest}>Test</h2>
        </div>
        {/* </Drawer> */}
      </SidebarSection>
    )
  )
}

export default Sidebar
