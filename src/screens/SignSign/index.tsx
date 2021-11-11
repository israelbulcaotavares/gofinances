import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoSvg from '../../assets/logo.svg'

import { 
Container,
Header,
TitleWrapper,
Title,
SignInTitle,
Footer,
} from './styles'

export function SignIn(){

    return(
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    
                <Title>
                    Controle suas{'\n'} 
                    finanças de forma{'\n'}  
                    muito simples{'\n'} 
                </Title>

                <SignInTitle>
                    Faça login com {'\n'} 
                    uma das conta abaixo
                </SignInTitle>
 
                </TitleWrapper>

            </Header>

            <Footer>

            </Footer>
        </Container>

    );


}