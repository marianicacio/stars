import { View, Text } from "react-native";
import { LoginContainer, Img, Logo, Form, Nav, P, A, Btn } from "./styles"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useNavigation } from "@react-navigation/native";

export default function Login() {

    const navigator = useNavigation()

    return (
        <LoginContainer>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" password={true} />
                <Btn>
                    <Button navigate={"Home"} label="Entrar" color={"#FF92C2"}/>
                </Btn>
            </Form>
            <Nav>
                <P>
                    Não tem login! <A onPress={() => navigator.navigate("Register")}>Cadastre-se</A>
                </P>
            </Nav>
        </LoginContainer>
    )

}