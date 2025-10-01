import { EntryContainer, Img, Logo, Form, Arrow, Btn, Back } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useNavigation } from "@react-navigation/native"

export default function Entry() {

    const navigator = useNavigation()

    return (
        <EntryContainer>
            <Arrow onPress={() => navigator.goBack()}>
                            <Back source={require("../../assets/back.png")}> 
                            </Back>
             </Arrow>
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