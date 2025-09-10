import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default function Button({label}) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.label}>{label}</Text>
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
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginTop: 50
    },

    label: {
        color: "white"
    }
}
)