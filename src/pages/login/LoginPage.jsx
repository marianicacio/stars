import { View, Text } from "react-native";
import { LoginContainer, Img, Logo, Form, Nav, P, A } from "./styles"
import Button from "../../components/Button"
import Input from "../../components/Input"

export default function Login() {

    return (
        <LoginContainer>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" password={true}/>
                <Button label="Entrar"/>
            </Form>
            <Nav>
                <P>
                    Não tem login! <A>Cadastre-se</A>
                </P>
            </Nav>
        </LoginContainer>
    )

}