import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default function Button() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>Entrar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FF92C2",
        width: "30%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        height: 44,
    }
}
)