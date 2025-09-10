import { RegisterContainer, Img, Logo, Form, Arrow } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Register() {
    return (
        <RegisterContainer>
            <Arrow source={require("../../assets/back.png")}></Arrow>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" password={true} />
                <Button label="Criar"/>
            </Form>
        </RegisterContainer>
    )
}