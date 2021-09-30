import styled from 'styled-components'

const SidebarSection = styled.div``

const Title = styled.h1`
  text-align: center;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 1.3rem;
  }
`

export { SidebarSection, Title }
