import styled from 'styled-components'

const FooterSection = styled.footer`
  width: 100%;
  height: 100px;
  box-shadow: 0 0 5px #8b949e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.darkGrey};
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    height: 9.5rem;
  }
`

const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    flex-flow: column;
    height: 9.5rem;
  }
`

const SubContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    margin: 0.4rem 0;
  }
`

const Title = styled.h4`
  margin: 0;
`

const Credits = styled.p`
  font-size: 17px;
  margin: 0;
  color: ${({ theme }) => theme.color.lightBlue};
`

export { FooterSection, Container, SubContainer, Title, Credits }
