import { View, Text } from "react-native";
import { LoginContainer, Img, Logo, Input, Form } from "./styles"
import Button from "../components/Button"

export default function Login() {

    return (
        <LoginContainer>
            <Img source={require("../assets/planets.png")}></Img>
            <Logo source={require("../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" primary/>
                <Button/>
            </Form>
        </LoginContainer>
    )

}