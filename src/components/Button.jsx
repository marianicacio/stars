import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default function Button({label, color, navigate}) {
    const navigator = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigator.navigate(navigate)} style={[styles.button, { backgroundColor: color }]}>
            <Text  style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
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