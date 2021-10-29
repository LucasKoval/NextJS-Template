import styled from 'styled-components'

const HeaderSection = styled.header`
  width: 100%;
  height: 6.5rem;
  position: relative;
  box-shadow: 0 0 5px #8b949e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.fontColor.header};
  background-color: ${(props) => props.theme.bgColor.header};
  transition: all 0.5s ease;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    height: 4.5rem;
    position: fixed;
    top: 0;
    z-index: 100;
  }
`

const Title = styled.h1`
  text-align: center;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 1.3rem;
  }
`

const ImageContainer = styled.div`
  &.burger {
    width: 4rem;
    margin-left: 2rem;
    svg {
      font-size: 2rem;
      :hover {
        transform: scale(1.2);
      }
      path {
        stroke: ${({ theme }) => theme.color.grey};
      }
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      width: 2.3rem;
      margin-left: 1rem;
      :hover {
        transform: none;
      }
    }
  }
  &.themeToogle {
    width: 3rem;
    height: 3rem;
    margin-right: 2rem;
    div {
      overflow: visible !important;
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        :hover {
          box-shadow: 0 0 10px #58a6ff;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 1rem;
      div {
        overflow: visible !important;
        img {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          :hover {
            box-shadow: none;
          }
        }
      }
    }
  }
`

export { HeaderSection, Title, ImageContainer }
