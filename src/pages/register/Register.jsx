import { RegisterContainer, Img, Logo, Form, Arrow, Btn, Back } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useNavigation } from "@react-navigation/native"

export default function Register() {

       const navigator = useNavigation()

    return (
        <RegisterContainer>
            <Arrow onPress={() => navigator.goBack()}>
                <Back source={require("../../assets/back.png")}>
                </Back>
            </Arrow>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" password={true} />
                <Btn>
                    <Button label="Criar" color={"#FF92C2"} />
                </Btn>
            </Form>
        </RegisterContainer>
    )
}