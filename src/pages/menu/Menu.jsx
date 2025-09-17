import { MenuContainer, Img, Logo, Nav, Arrow, Modal, ModalContainer, Title, ModalBtn, ButtonFake, Label } from "./styles"
import Button from "../../components/Button"
import Input from "../../components/Input"
import React, { useState } from "react"

export default function Menu() {


    const [modalVisible, setModal] = useState(false)

    return (
        <MenuContainer>
            <Arrow source={require("../../assets/back.png")}></Arrow>
            <Img source={require("../../assets/planets.png")}></Img>
            <Logo source={require("../../assets/logo.png")}></Logo>
            <Nav>
                <Button color="#FF92C2" label={"Entrada"} />
                <ButtonFake style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} onPress={() => setModal(true)}>
                    <Label>Lista de Veiculos</Label>
                </ButtonFake>
                <Button color="#FF92C2" label={"Saída"} />
            </Nav>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <ModalContainer>
                    <Title>
                        Olá! Esse é um modal 😄
                    </Title>
                    <ModalBtn
                        onPress={() => setModal(false)}
                    >
                        <Label>Fechar</Label>
                    </ModalBtn>

                </ModalContainer>


            </Modal>
        </MenuContainer>
    )
}