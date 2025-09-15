import { EntryContainer, Img, Logo, Form, Arrow, Btn } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Entry() {
    return (
        <EntryContainer>
            <Arrow source={require("../../assets/back.png")}></Arrow>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="Placa do Veículo" />
                <Btn>
                    <Button color="#595758" label="Entrar" />
                </Btn>
            </Form>
        </EntryContainer>
    )
}