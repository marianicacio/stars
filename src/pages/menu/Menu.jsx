import { MenuContainer, Img, Logo, Nav, Arrow, Modal, ModalContainer, ModalBtn, ButtonFake, Label, Close, Cards, ModalAdd } from "./styles"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Input from "../../components/Input"
import React, { useState } from "react"
import { Dimensions, StyleSheet } from "react-native"

export default function Menu() {


    const [modalVisible, setModal] = useState(false)
    const screenHeight = Dimensions.get("window").height

    return (
        <MenuContainer>
            <Arrow source={require("../../assets/back.png")}></Arrow>
            <Img style={
                modalVisible ? (styles.imageSumido) : (styles.image)
            } source={require("../../assets/planets.png")}></Img>
            <Logo style={
                modalVisible ? (styles.imageSubida) : (styles.image)
            } source={require("../../assets/logo.png")}></Logo>
            <Nav>
                <Button color="#FF92C2" label={"Entrada"} />
                <ButtonFake style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onPress={() => setModal(true)}>
                    <Label>Lista de Veiculos</Label>
                </ButtonFake>
                <Button color="#FF92C2" label={"Saída"} />
            </Nav>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <ModalContainer style={[styles.modalView, { height: screenHeight / 1.35 }]}>
                    <ModalBtn
                        onPress={() => setModal(false)}
                    >
                        <Close source={require("../../assets/close.png")}></Close>
                    </ModalBtn>
                    <Cards>
                        <Card placa={"JKLIH-5F"} data={"27-08"} hora={"18:00"}></Card>
                        <Card placa={"JKLIH-5F"} data={"27-08"} hora={"18:00"}></Card>
                        <Card placa={"JKLIH-5F"} data={"27-08"} hora={"18:00"}></Card>
                        <Card placa={"JKLIH-5F"} data={"27-08"} hora={"18:00"}></Card>
                        <Card placa={"JKLIH-5F"} data={"27-08"} hora={"18:00"}></Card>
                        <Card placa={"JKLIH-5F"} data={"27-08"} hora={"18:00"}></Card>
                    </Cards>
                    <ModalAdd><Button color="#595758" label={"Criar"} /></ModalAdd>
                </ModalContainer>


            </Modal>
        </MenuContainer>
    )
}

const styles = StyleSheet.create({
    modalView: {
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#FFC8FB",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 20,
        alignItems: "center",
    },

    imageSumido: {
        display: "none"
    },

    imageSubida: {
        marginTop: -20,
        animationType: "slide"
    }
})