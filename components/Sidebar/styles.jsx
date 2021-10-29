import styled from 'styled-components'

export const SidebarSection = styled.div`
  position: fixed;
  left: 0;
  width: 6rem;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.bgColor.sidebar};
  color: ${(props) => props.theme.fontColor.sidebar};
  box-shadow: rgb(139 148 158) 0px 0px 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.5s ease;
  overflow: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
    width: 5px;
  }
  ::-webkit-scrollbar-button:increment,
  ::-webkit-scrollbar-button {
    display: none;
  }
  ::-webkit-scrollbar:horizontal {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.bgColor.header};
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 20px;
  }
  :hover {
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.lightBlue};
      border-radius: 20px;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 5rem;
    padding: 0.8rem 0;
  }
`

export const SidebarItem = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 1rem 0;
  svg {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 0.8rem 0;
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
