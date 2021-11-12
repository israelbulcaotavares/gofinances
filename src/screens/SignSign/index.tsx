import { useContext } from 'react';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoSvg from '../../assets/logo.svg'

import { AuthContext } from '../../AuthContext'

import { SignInSocialButton } from '../../components/SignInSocialButton';

import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from './styles'

export function SignIn() {
    const data = useContext(AuthContext);
    console.log(data)

    return (
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
                <FooterWrapper>
                    <SignInSocialButton
                        title="Entrar com Google"
                        svg={GoogleSvg}

                    />

                    <SignInSocialButton
                        title="Entrar com Apple"
                        svg={AppleSvg}

                    />

                </FooterWrapper>
            </Footer>
        </Container>

    );


}