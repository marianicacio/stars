import { MenuContainer, Img, Logo, Nav, Arrow } from "./styles"
import Button from "../../components/Button"
import Input from "../../components/Input"

export default function Menu() {
    return (
        <MenuContainer>
            <Arrow source={require("../../assets/back.png")}></Arrow>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Nav>
                <Button label={"Entrada"}/>
                <Button label={"Lista de Veículo"}/>
                <Button label={"Saída"}/>
            </Nav>
        </MenuContainer>
    )
}