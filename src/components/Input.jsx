import { TextInput, View, Image, StyleSheet } from "react-native";

export default function Input({ placeholder, password, value, onChangeText }) {
    return (

        <View style={styles.form}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} value={value}/>
            {
                password ? (
                    <Image style={styles.img} source={require("../assets/invisible.png")} /> 
                ) : (
                    <Image style={{opacity: 0}} source={require("../assets/invisible.png")} /> 
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        alignSelf: "center",
        backgroundColor: "#FFC8FB",
        width: "100%",
        paddingLeft: 20,
        height: 50,
        borderRadius: 10,
        color: "#595758"
    },


    img: {
        position: "absolute",
        width: 24,
        height: 24,
        right: 18
    },

    form: {
        width: "76%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    }
})