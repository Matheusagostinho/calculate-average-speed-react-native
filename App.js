import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { Button } from "./src/Components/Button";
import Constants from "expo-constants";
import { Input } from "./src/Components/Input";

export default function App() {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [result, setResult] = useState(0);
  const [isVisible, SetIsVisible] = useState(false);

  function calculateAverageSpeed(distance, time) {
    if (distance === 0 || time === 0) {
      setResult(false);
      console.log(result);
      SetIsVisible(true);
      return;
    }
    const hour = time / 60;
    setResult(Math.round(distance / hour));
    SetIsVisible(true);
    setTime(0);
    setDistance(0);
  }
  return (
    <View style={styles.container}>
      <Input
        value={distance}
        onChange={(text) => setDistance(text)}
        label="Informe sua Quilometragem"
        placeholder="km"
      />
      <Input
        value={time}
        onChange={(text) => setTime(text)}
        label="Informe os minutos gastos para percorrer"
        placeholder="min"
      />
      <Button onPress={() => calculateAverageSpeed(distance, time)}>
        Calcular velocidade média
      </Button>

      <StatusBar style="auto" />

      <Modal
        animationType={"fade"}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => SetIsVisible(false)}
        transparent
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {!result ? (
              <Text style={[styles.modalText, styles.center]}>
                Informe dados corretos!
              </Text>
            ) : (
              <>
                <Text style={styles.modalText}>
                  {" "}
                  Sua velocidade média é de:
                </Text>
                <Text style={styles.modalText1}> {result} km/h</Text>
              </>
            )}
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => {
                SetIsVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1d1d1d",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  text: {
    color: "#292929",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    height: "40%",
    backgroundColor: "#333333",
    borderRadius: 15,
    padding: 40,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonClose: {
    backgroundColor: "#d80f0f",
    borderRadius: 2,
    height: 30,
    paddingHorizontal: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
  textStyle: {
    color: "white",

    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#e9e9e9",
    fontWeight: "bold",
  },
  center: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  modalText1: {
    marginBottom: 15,
    textAlign: "center",
    color: "#e9e9e9",
    fontWeight: "bold",
    fontSize: 30,
  },
});
