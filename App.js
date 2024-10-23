import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {counter}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          onPress={() => setCounter(counter + 1)}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text>+</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setCounter(counter - 1)}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text>-</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap:10,
    backgroundColor: "beige"
  },
  text: {
    fontFamily: "Verdana",
    fontSize: 50,
  },
  button: {
    borderColor: "#fff",
    borderRadius: 50,
    backgroundColor: "pink",
    justifyContent:"center",
    alignItems:"center",
    width:50,
    height:50,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: 150,
    justifyContent:"space-between"
  },
});
