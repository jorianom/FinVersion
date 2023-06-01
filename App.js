import {
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    Alert,
    TouchableOpacity,
} from "react-native";
import { React, useState } from "react";
import logo from "./assets/icon.png";
import * as imagePicker from "expo-image-picker";

const App = () => {
    const [selectImage, setSelectImage] = useState(null);
    const openImage = async () => {
        let permision = await imagePicker.requestMediaLibraryPermissionsAsync();
        if (permision.granted === false) {
            alert("Permisos necesarios");
            return;
        }
        const pickerResult = await imagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (pickerResult.canceled === true) {
            return;
        }
        setSelectImage({ localUri: pickerResult.uri });
    };
    return (
        <View style={style.container}>
            <Text style={style.title}>Hello World</Text>
            <Image
                source={{
                    uri:
                        selectImage !== null
                            ? selectImage.localUri
                            : "https://picsum.photos/200",
                }}
                style={style.img}
            />
            <Image source={logo} style={style.img} />
            <Button
                color="red"
                title="Prees me"
                //onPress={() => {
                //  console.log("press"); }}
                onPress={openImage}
            />
            <TouchableOpacity style={style.button} onPress={() => Alert.alert("Helloo")}>
                <Text style={style.title}>Press Here</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#292929",
    },
    title: { fontSize: 30, color: "#fff" },
    img: {
        height: 200,
        width: 200,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        color: "#fff",
    },
});

export default App;
