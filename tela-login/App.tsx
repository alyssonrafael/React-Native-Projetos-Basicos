import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/favicon.png")}
        style={{ margin: 60, marginTop: 120 }}
      />

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>
        Enter your username and password to login
      </Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="User Name" />
        <TouchableOpacity style={styles.textRight}>
          <Text>Forgot Username</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="PassWord" />
        <TouchableOpacity style={styles.textRight}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, { marginBottom: 12 }]}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>

      <Text style={{ marginBottom: 12 }}>Or login in with</Text>

      <View style={styles.rowButtons}>
        <TouchableOpacity style={styles.buttonLog}>
          <View style={styles.logos}>
            <Ionicons name="logo-google" size={20} />
            <Text style={{ marginLeft: 8 }}>Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonLog, { backgroundColor: "#454B60" }]}
        >
          <View style={styles.logos}>
            <Ionicons name="logo-facebook" size={20} color={"#fff"} />
            <Text style={{ color: "#fff", marginLeft: 8 }}>Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.textLink}>
        <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "700" }}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textLink}>
        <Text style={{ fontSize: 16 }}>Need help?</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "700" }}>Visit our help center</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 18,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "700",
    width: "70%",
    textAlign: "center",
    marginBottom: 12,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 12,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#454B60",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  textRight: {
    alignSelf: "flex-end",
    marginRight: 15,
    color: "#454B60",
  },
  button: {
    backgroundColor: "#454B60",
    width: 309,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  logos: {
    flexDirection: "row",
  },
  buttonLog: {
    width: "auto",
    height: 45,
    padding: 12,
    paddingHorizontal: 22,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#454B60",
    borderWidth: 1,
    borderRadius: 12,
  },
  textLink: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
});
