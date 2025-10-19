import { EntryContainer, Img, Logo, Form, Arrow, Btn, Back } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useNavigation } from "@react-navigation/native"

import { useState, useEffect } from "react"

import { saidaVeiculo } from "../../../api"

export default function Entry() {

    const navigator = useNavigation()

    const [placa, setPlaca] = useState("")

    const handleExit = async () => {

        const response = await saidaVeiculo(placa)

        if(response) {

            navigator.navigate("Home")

        }

    }

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
                    <Button onPress={handleExit} color="#595758" label="Sair" />
                </Btn>
            </Form>
        </EntryContainer>
    )
}