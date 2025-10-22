import { MenuContainer, Img, Logo, Nav, Arrow, Modal, ModalContainer, ModalBtn, ButtonFake, Label, Close, Cards, ModalAdd, Back } from "./styles"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Input from "../../components/Input"
import React, { useState } from "react"
import { Dimensions, StyleSheet, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { fetchCars } from "../../../api" // <-- IMPORTA API

export default function Menu() {
    const [modalVisible, setModal] = useState(false)
    const [veiculos, setVeiculos] = useState([])
    const [loading, setLoading] = useState(false)

    const screenHeight = Dimensions.get("window").height
    const navigator = useNavigation()

    const fetchVeiculos = async () => {
        try {
            setLoading(true)
            const data = await fetchCars()
            setVeiculos(data || [])
        } catch (error) {
            console.log("Erro ao buscar veículos:", error)
        } finally {
            setLoading(false)
        }
    }

    const abrirModal = () => {
        setModal(true)
        fetchVeiculos()
    }

    return (
        <MenuContainer>
            <Arrow onPress={() => navigator.navigate("Login")}>
                <Back source={require("../../assets/back.png")} />
            </Arrow>

            <Img style={modalVisible ? (styles.imageSumido) : (styles.image)} source={require("../../assets/planets.png")} />
            <Logo style={modalVisible ? (styles.imageSubida) : (styles.image)} source={require("../../assets/logo.png")} />

            <Nav>
                <Button color="#FF92C2" label={"Entrada"} onPress={() => navigator.navigate("Entry")} />
                <ButtonFake onPress={abrirModal}>
                    <Label>Lista de Veiculos</Label>
                </ButtonFake>
                <Button color="#FF92C2" label={"Saída"} onPress={() => navigator.navigate("Exit")} />
            </Nav>

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <ModalContainer style={[styles.modalView, { height: screenHeight / 1.35 }]}>
                    <ModalBtn onPress={() => setModal(false)}>
                        <Close source={require("../../assets/close.png")} />
                    </ModalBtn>

                    <Cards>
                        {loading ? (
                            <Text>Carregando...</Text>
                        ) : veiculos.length === 0 ? (
                            <Text>Nenhum veículo encontrado.</Text>
                        ) : (
                            veiculos.map((item) => (
                                <Card
                                    key={item.id}
                                    placa={item.placa}
                                    data={item.dt_entrada?.split("T")[0]}
                                    hora={item.dt_entrada?.split("T")[1]?.slice(0,5)}
                                />
                            ))
                        )}
                    </Cards>

                    <ModalAdd>
                        <Button color="#595758" label={"Criar"} onPress={() => navigator.navigate("Entry")} />
                    </ModalAdd>
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
        padding: 20, alignItems: "center", 
    },

     imageSumido: { 
        display: "none" 
    }, 

    imageSubida: { 
        marginTop: -20, 
        animationType: "slide" 
    } 

})