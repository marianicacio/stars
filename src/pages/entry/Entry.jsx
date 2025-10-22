import { EntryContainer, Img, Logo, Form, Arrow, Btn, Back } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from "react"
import { Alert } from "react-native"

import { RegisterVeiculo } from "../../../api"

export default function Entry() {

    const navigator = useNavigation()

    const [placa, setPlaca] = useState("")

    const agora = new Date();
    const dataHora = agora.toLocaleString("pt-BR");
    
    const handleRegister = async () => {
            console.log("handleRegister iniciado");
    
            const cadastro = await RegisterVeiculo(placa, dataHora);
            console.log("valor retornado:", cadastro);
    
            if (cadastro) {
                Alert.alert("Sucesso", `Veiculo cadastrado!`);
                setPlaca("");
                navigator.navigate("Home")
            } else {
                Alert.alert("Erro", "Não foi possível cadastrar");
            }
        };

    return (
        <EntryContainer>
            <Arrow onPress={() => navigator.goBack()}>
                            <Back source={require("../../assets/back.png")}> 
                            </Back>
             </Arrow>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="Placa do Veículo" value={placa} onChangeText={setPlaca} />
                <Btn>
                    <Button color="#595758" label="Entrar" onPress={handleRegister} />
                </Btn>
            </Form>
        </EntryContainer>
    )
}