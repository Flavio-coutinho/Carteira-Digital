import React from 'react';
import { SafeAreaView } from 'react-native';
import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle';
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from './styles';

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>
                    <Title>Seja bem vindo(a) {"\n"} Carteira Digital</Title>

                    <Description>Entrar com redes sociais</Description>
                    <ViewButton>

                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocialGoogle title="facebook" />

                    </ViewButton>
                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>

            </Container>
        </SafeAreaView>

    )
}

export { Login };