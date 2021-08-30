import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

h1, h2, h3, h4, p, span, strong, input, select, option, button, div, a {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}
`

const ToastStyledContainer = styled(ToastContainer)`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    font-size: 0.8rem;
  }
  .Toastify__close-button > svg {
    color: grey;
  }
  .Toastify__toast--info {
    background: #f4f8fa;
    color: grey;
    .Toastify__progress-bar {
      background: #dadbdc;
    }
  }
  .Toastify__toast--success {
    background: #e4ebd6;
    color: grey;
    .Toastify__progress-bar {
      background: #bfd592;
    }
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--error {
    background: #f5b7b1;
    color: grey;
  }
`

const BodyContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8b949e;
  background-color: ${({ theme }) => theme.color.darkBlue};
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    min-height: 100vh;
    height: -webkit-fill-available;
  }
`

const MainSection = styled.main`
  width: 100%;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    height: -webkit-fill-available;
  }
`

const PageContainer = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 90%;
    height: -webkit-fill-available;
    flex-flow: column;
    justify-content: center;
  }
`

const ErrorContainer = styled.div`
  img {
    border-radius: 75px;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    margin-top: 5rem;
    img {
      width: '300px';
      height: '169px';
    }
  }
`

const NotFound = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`

export {
  GlobalStyle,
  ToastStyledContainer,
  BodyContainer,
  MainSection,
  PageContainer,
  ErrorContainer,
  NotFound,
}
