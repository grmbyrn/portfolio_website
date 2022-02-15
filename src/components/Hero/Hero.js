import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

function Hero(props){
  return(
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          hnuigeruvghbe wpuirenhvcjfmiohp hsgirhgp miroc;iah  ihrviognio;acifmo;srmvhg inog;gsn;
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
      </LeftSection>
    </Section>
  )
}

export default Hero;