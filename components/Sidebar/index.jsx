import React from 'react'
import { Drawer } from '@material-ui/core'
import { SwipeableDrawer } from '@material-ui/core'
import { SidebarSection, Title, ImageContainer } from './styles'

const Sidebar = () => {
  return (
    <SidebarSection className="SidebarSection">
      <Drawer anchor={'left'} variant="permanent">
        <div>
          <h1>Sidebar</h1>
        </div>
      </Drawer>
    </SidebarSection>
  )
}

export default Sidebar
