import React from 'react';
import { AiFillGithub, AiFillCodepenCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

function Footer() {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkItem>Call</LinkItem>
          <LinkItem href='111-111-111-1111'>111-111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem>Email</LinkItem>
          <LinkItem href='mailto:contact@contact.com'>contact@contact.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>jkerljkvbjn eewbr erw req</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://codepen.com'>
            <AiFillCodepenCircle size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
