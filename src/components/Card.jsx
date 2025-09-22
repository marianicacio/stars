import { View, StyleSheet, Text } from "react-native";

export default function Card({ placa, data, hora }) {
    return (
        <View style={styles.card}>
            <Text>{placa}
            </Text>
            <View style={styles.cardWrapper}>
                <Text>{data}</Text>
                <Text>{hora}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "95%",
        borderRadius: 10,
        flexDirection: "row",
        gap: 148,
        justifyContent: "space-between",
        padding: 23,
        alignItems: "center",
        backgroundColor: "#FFEEF2"
    },

    cardWrapper: {
        flexDirection: "row",
        gap: 15
    }
})