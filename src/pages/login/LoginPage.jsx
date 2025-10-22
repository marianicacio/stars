import { View, Text, Alert } from "react-native";
import { LoginContainer, Img, Logo, Form, Nav, P, A, Btn } from "./styles"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { fetchUsers } from "../../../api";

export default function Login() {

    const navigator = useNavigation()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getVeiculos();
            setVeiculos(data);
        };
        fetchData();
    }, []);

    const handleLogin = async () => {
        console.log("Botão clicado"); // Teste se a função é chamada
        try {
            const users = await fetchUsers();
            const user = users.find(
                (u) => u.email === email && u.password === password
            );

            if (user) {
                Alert.alert("Sucesso", `Bem-vindo, ${user.name}!`);
                setEmail("");
                setPassword("");
                navigator.navigate("Home");
            } else {
                Alert.alert("Erro", "Usuário ou senha incorretos");
            }
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <LoginContainer>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Form>
                <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
                <Input placeholder="Senha" value={password} onChangeText={setPassword} password={true} />
                <Btn>
                    <Button onPress={handleLogin} label="Entrar" color={"#FF92C2"} />
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