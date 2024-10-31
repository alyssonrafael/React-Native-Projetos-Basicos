import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import ModalPassword from "@/src/components/modal/ModalPassword";
import { Ionicons } from "@expo/vector-icons";

let charset = "aABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, serPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(event: GestureResponderEvent): void {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    serPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <>
      <View style={styles.container}>
        <Ionicons
          name="lock-closed"
          size={100}
          color="#000"
          style={styles.logo}
        />
        <Text style={styles.title}> {size} Caracteres</Text>

        <View style={styles.area}>
          <Slider
            style={{ height: 50 }}
            minimumValue={6}
            maximumValue={20}
            maximumTrackTintColor="#ff0000"
            minimumTrackTintColor="#000"
            thumbTintColor="#392de9"
            value={size}
            onValueChange={(value) => setSize(Math.round(value))}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}> Gerar SENHA</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <ModalPassword
            password={passwordValue}
            handleClose={() => setModalVisible(false)}
          />
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 22,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },
});
