import { View, Text } from "react-native";
import { LoginContainer, Img } from "./styles"

export default function Login() {

    return (
        <LoginContainer>
            <Img source={require("../assets/planets.png")}></Img>
        </LoginContainer>
    )

}