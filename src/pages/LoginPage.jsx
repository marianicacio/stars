import { View, Text } from "react-native";
import { LoginContainer, Img, Logo, Input, Form, Nav, P, A } from "./styles"
import Button from "../components/Button"

export default function Login() {

    return (
        <LoginContainer>
            <Img source={require("../assets/planets.png")}></Img>
            <Logo source={require("../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" primary />
                <Button />
            </Form>
            <Nav>
                <P>
                    Não tem login!
                    <A>Cadastre-se</A>
                </P>
            </Nav>
        </LoginContainer>
    )

}