import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Container, Wrapper } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Link href="/" passHref>
          <a>
            <Image
              alt="Tesla logo"
              src="/icons/logo.svg"
              width={144}
              height="100%"
            />
          </a>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Header
