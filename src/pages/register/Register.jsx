import { RegisterContainer, Img, Logo, Form, Arrow, Btn, Back } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

import { registerUser } from "../../../api";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigator = useNavigation()

    const handleRegister = async () => {
        console.log("handleRegister iniciado");
        console.log("Dados:", {email, name, password });

        // Verificar se todos os campos foram preenchidos
        if (!name || !email || !password) {
            Alert.alert("Atenção", "Preencha todos os campos antes de continuar.");
            return; // impede de continuar
        }

        // Verificar se o email termina com @gmail.com
        if (!email.includes("@gmail.com") || email.startsWith("@")) {
            Alert.alert("E-mail inválido", "Digite um e-mail Gmail válido, como exemplo@gmail.com");
            return;
        }


        const user = await registerUser( email, name, password);
        console.log("user retornado:", user);

        if (user) {
            Alert.alert("Sucesso", `Usuário ${user.name} cadastrado!`);
            setName("")
            setEmail("");
            setPassword("");
            navigator.navigate("Home")
        } else {
            Alert.alert("Erro", "Não foi possível cadastrar");
        }
    };


    return (
        <RegisterContainer>
            <Arrow onPress={() => navigator.goBack()}>
                <Back source={require("../../assets/back.png")}>
                </Back>
            </Arrow>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="Nome" value={name} onChangeText={setName}/>
                <Input placeholder="E-mail" value={email} onChangeText={setEmail}/>
                <Input placeholder="Senha" value={password} onChangeText={setPassword} password={true} />
                <Btn>
                    <Button label="Criar" onPress={(handleRegister)} color={"#FF92C2"} />
                </Btn>
            </Form>
        </RegisterContainer>
    )
}