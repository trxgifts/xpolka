import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://scan.huobichain.com/token/0x35b7edf15fde1d61937617e981754f8bd0e2c7d6"
      >
        XPolka Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://anyswap.exchange/swap"
      >
        Uniswap XPK-ETH
      </StyledLink>
      <StyledLink target="_blank" href="https://www.facebook.com/Xpolka.Finance">
        Facebook
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/xpolka_finance">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/xPOLKA">
        Telegram
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
