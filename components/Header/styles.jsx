import styled from 'styled-components'

const HeaderSection = styled.header`
  width: 100%;
  height: 6.5rem;
  position: fixed;
  top: 0;
  box-shadow: 0 0 5px #8b949e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.fontColor.header};
  background-color: ${(props) => props.theme.bgColor.header};
  transition: all 0.5s ease;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    height: 4.5rem;
    z-index: 100;
  }
`

const Title = styled.h1`
  text-align: center;
  margin: 0;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 1.3rem;
  }
`

export const SidebarItem = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 0;
  svg {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 0.5rem 0;
  }
`

const ImageContainer = styled.div`
  &.burger {
    display: block;
    position: relative;
    top: 4px;
    margin-left: 2rem;
    z-index: 1;
    user-select: none;
    -webkit-user-select: none;
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      margin-left: 1rem;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.fontColor.header};
      transition: color 0.3s ease;
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.fontColor.menu};
      }
    }

    input {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;
      cursor: pointer;
      opacity: 0;
      z-index: 2;
      -webkit-touch-callout: none;
    }

    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background-color: ${(props) => props.theme.fontColor.header};
      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      &:first-child {
        transform-origin: 0% 0%;
      }
      &:nth-last-child(2) {
        transform-origin: 0% 100%;
      }
    }

    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: ${(props) => props.theme.fontColor.header};
      &:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
      &:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
      }
    }

    ul.menu {
      position: absolute;
      width: 300px;
      margin: 36px 0 0 -50px;
      padding: 25px 50px;
      box-shadow: rgb(139 148 158) 2px 2px 5px -2px;
      border-bottom-right-radius: 10px;
      background-color: ${(props) => props.theme.bgColor.header};
      list-style-type: none;
      transform-origin: 0% 0%;
      transform: translate(-100%, 0);
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      -webkit-font-smoothing: antialiased;

      a {
        display: flex;
        align-items: center;
        svg {
          font-size: 1.5rem;
          margin-right: 1rem;
        }
      }

      @media (max-width: ${({ theme }) => theme.device.mobile}) {
        width: 250px;
        margin: 20px 0 0 -50px;
      }

      li {
        padding: 10px 0;
        font-size: 22px;
      }
    }

    input:checked ~ ul {
      transform: none;
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
