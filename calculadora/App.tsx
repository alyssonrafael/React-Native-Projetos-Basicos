import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

export default function App() {
  //estado para armazenar o valor atual e a expressao
  const [currentValue, setCurrentValue] = useState("");
  const [expression, setExpression] = useState("");

 //funçao para adicionar um numero ao valor atual e a expressao
  function handleNumberPress(num: number) {
    setCurrentValue((prev) => prev + num.toString());
    setExpression((prev) => prev + num.toString());
  }
 //funçao para adicionar uma operaçao a expressao
  function handleOperation(op: string) {
    if (currentValue === "") return;
    setExpression((prev) => prev + `${op}`);
    setCurrentValue("");
  }
  //funçao para adicionar um ponto ao valor atual e a expressao
  function handleDecimal() {
    if (!currentValue.includes(".")) {
      setCurrentValue((prev) => prev + ".");
      setExpression((prev) => prev + ".");
    }
  }
 //funçao para calcular a porcentagem
  function handlePercentage() {
    if (currentValue !== "") {
      const percentValue = (parseFloat(currentValue) / 100).toString();
      setCurrentValue(percentValue);
      setExpression((prev) => prev.slice(0, -currentValue.length) + percentValue);
    }
  }
//funçao para calcular a expressao
  function calculate() {
    try {
      //se o valor atual for vazio, nao faz nada
      if (currentValue === "") return;
      //avalia a expressão dinâmica contida na variável expression e retorna o seu resultado
      const result = Function('return ' + expression)();
      //atualiza o valor atual e a expressao
      setExpression(result.toString());
      setCurrentValue(result.toString());
      //se ocorrer um erro, exibe um alerta
    } catch (error) {
      Alert.alert("Erro", "Expressão inválida");
    }
  }
//funçao para limpar o valor atual e a expressao
  function clear() {
    setCurrentValue("");
    setExpression("");
  }
//funçao para deletar o ultimo caractere do valor atual e da expressao
  function deleteLast() {
    setExpression((prev) => prev.slice(0, -1));
    setCurrentValue((prev) => prev.slice(0, -1));
  }

  return (
    <View style={styles.container}>
      {/*quando nao ha expressao nao mostra nada*/}
      <Text style={styles.expressaoText}>{expression || ""}</Text>
      {/*primeira linha*/}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button,styles.operationButton]} onPress={clear}><Text style={styles.buttonText}>AC</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.operationButton]} onPress={handlePercentage}><Text style={styles.buttonText}>%</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.operationButton]} onPress={deleteLast}><Text style={styles.buttonText}>⌫</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.operationButton]} onPress={() => handleOperation("/")}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
      </View>
      {/*segunda linha*/}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(7)}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(8)}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(9)}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.operationButton]} onPress={() => handleOperation("*")}><Text style={styles.buttonText}>x</Text></TouchableOpacity>
      </View>
      {/*terceira linha*/}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(4)}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(5)}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(6)}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.operationButton]} onPress={() => handleOperation("-")}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
      </View>
      {/*quarta linha*/}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(1)}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(2)}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(3)}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.operationButton]} onPress={() => handleOperation("+")}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
      </View>
      {/*quinta linha*/}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => { handleNumberPress(0); handleNumberPress(0); }}><Text style={styles.buttonText}>00</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(0)}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDecimal}><Text style={styles.buttonText}>,</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.igualButton]} onPress={calculate}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  expressaoText: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "right",
    width: "80%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  igualButton: {
    backgroundColor: "#ff9500",
  },
  operationButton: {
    backgroundColor: "#ddd",
  },
});