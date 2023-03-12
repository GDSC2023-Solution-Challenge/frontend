import React, { ReactNode } from 'react'
import { Button } from '../Button'
import StyledWrapper from './Layout.styled'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      <header>
        <div className="wrapper common-container">
          <div className="logo">find by</div>
          <div className="rt">
            <Button>검색하기</Button>
            <Button>작성하기</Button>
          </div>
        </div>
      </header>
      <main className="common-container">{children}</main>
      <footer className="common-container">footer</footer>
    </StyledWrapper>
  )
}

export default Layout
