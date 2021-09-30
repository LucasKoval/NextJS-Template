import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import Select from 'react-select'
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
    font-size: 1rem;
    height: 4rem;
    -webkit-box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
  }
  .Toastify__close-button > svg {
    color: ${({ theme }) => theme.color.darkGrey};
  }
  .Toastify__toast--info {
    background: #f4f8fa; //Original
    /* background-image: url(/img/toast-bg-desktop.jpg); */
    color: ${({ theme }) => theme.color.darkGrey};
    border-top: 1px solid #3598db;
    border-bottom: 1px solid #3598db;

    .Toastify__progress-bar {
      background: #3598db;
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      /* background-image: url(/img/toast-bg-mobile.jpg); */
    }
  }
  .Toastify__toast--success {
    background: #e4ebd6; //Original
    /* background-image: url(/img/toast-bg-desktop.jpg); */
    color: ${({ theme }) => theme.color.darkGrey};
    border-top: 1px solid #08bc0d;
    border-bottom: 1px solid #08bc0d;
    .Toastify__progress-bar {
      /* background: #bfd592; */ //Original
      background: #08bc0d;
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      /* background-image: url(/img/toast-bg-mobile.jpg); */
    }
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--error {
    background: #f5b7b1; //Original
    /* background-image: url(/img/toast-bg-desktop.jpg); */
    color: ${({ theme }) => theme.color.darkGrey};
    border-top: 1px solid #e74d3d;
    border-bottom: 1px solid #e74d3d;
    .Toastify__progress-bar {
      background: #e74d3d;
    }
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      /* background-image: url(/img/toast-bg-mobile.jpg); */
    }
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

const Title = styled.h1`
  &.notFound {
    text-align: center;
    margin-bottom: 1rem;
  }
`

const Input = styled.input`
  width: 95%;
  height: 40px;
  margin: 13px 0;
  padding: 0 6px 0 13px;
  border: 1px solid #d9dadb;
  border-radius: 6px;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140.4%;
  color: ${({ theme }) => theme.color.darkGrey};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  :focus {
    border: 1px solid #24cdc9;
  }
  &.half {
    width: 45%;
  }
  &.all {
    width: 95%;
  }
  &.full {
    width: 100%;
  }
`

const SelectInput = styled.select`
  width: 95%;
  height: 40px;
  margin: 13px 0;
  padding: 0 44px 0 13px;
  border: 1px solid #d9dadb;
  border-radius: 6px;
  outline: none;
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140.4%;
  color: ${({ theme }) => theme.color.darkGrey};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  :focus {
    background-image: linear-gradient(45deg, #ff6962 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, #ff6962 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    outline: 0;
  }
  -moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  &.half {
    display: flex;
    width: 45%;
  }
  &.all {
    display: flex;
    width: 95%;
  }
`

const CustomSelect = styled(Select)`
  width: 95%;
  height: 40px;
  margin: 13px 0;
  border: 1px solid #d9dadb;
  border-radius: 6px;
  outline: none;
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140.4%;
  color: ${({ theme }) => theme.colors.primary};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:disabled {
    background-color: #f2f2f2;
    color: #999999;
    cursor: default;
  }
  &.half {
    width: 45%;
  }
  &.all {
    width: 95%;
  }
  &.full {
    width: 100%;
  }
`

const selectStyles = {
  control: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    backgroundColor: isDisabled ? '#f2f2f2' : 'white',
    border: 'none',
    boxShadow: isFocused ? '0 0 0 1px #24cdc9' : null,
  }),
  dropdownIndicator: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      color: isFocused ? '#24cdc9' : isSelected ? '#24cdc9' : '#CCCCCC',
      '&:hover': {
        color: '#24cdc9',
      },
    }
  },
  menu: (styles) => ({
    ...styles,
    boxShadow: '0 0 0 1px #24cdc9',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: '0',
    border: 'none',
  }),
  placeholder: (styles, { isDisabled }) => ({
    ...styles,
    color: isDisabled ? '#999999' : '#4F6276',
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      borderRadius: 'inherit',
      backgroundColor: isDisabled
        ? '#f2f2f2'
        : isSelected
        ? '#ff6962'
        : isFocused
        ? 'rgba(36, 205, 201, 0.15)'
        : null,
      color: isDisabled ? '#999999' : isSelected ? '#fff' : '#4F6276',
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? '#ff6962' : null),
      },
    }
  },
}

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

const ErrorMessage = styled.span`
  display: flex;
  justify-content: left;
  padding-left: 1%;
  font-size: 14px;
  color: rgba(245, 16, 0, 0.8);
  opacity: 0.9;
  &.half {
    display: flex;
    width: 45%;
  }
  &.all {
    display: flex;
    width: 95%;
  }
`

export {
  GlobalStyle,
  ToastStyledContainer,
  BodyContainer,
  MainSection,
  PageContainer,
  Title,
  Input,
  SelectInput,
  CustomSelect,
  selectStyles,
  ErrorContainer,
  ErrorMessage,
}
