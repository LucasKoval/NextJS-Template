import styled from 'styled-components'

export const SidebarSection = styled.div`
  width: 6rem;
  height: 100%;
  padding: 1.5rem 0;
  background-color: ${(props) => props.theme.bgColor.sidebar};
  color: ${(props) => props.theme.fontColor.sidebar};
  transition: all 0.5s ease;
`

export const SidebarItem = styled.div`
  text-align: center;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  color: ${(props) => props.theme.fontColor.sidebar};
  transition: all 0.5s ease;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 1.3rem;
  }
`
