import { Pressable, TextInput, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import axios from "axios";

export default function Cep() {

    const [cep, setCep] = useState('')
    const [data, setData] = useState(null)

    function buscarCep(cep) {
        axios.get(`https://parkingapisenai.azurewebsites.net/api/veiculos/placa/${placa}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log("Erro: ", err)
            })
    }

    return (
        <View>
            <TextInput
                placeholder="Digite seu cep"
                keyboardType="numeric"
                onChangeText={setCep}
                value={cep}
            >

            </TextInput>
            <TouchableOpacity onPress={buscarCep(cep)}> <Text>buscar cep</Text> </TouchableOpacity>

            {
                data && <Text>{data.placa}</Text>
            }

        </View>

    )
}