import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

export function Input({ value, onChange, label, placeholder }) {
  return (
    <View style={styles.inputBlock}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#a5a5a5"
        keyboardType="decimal-pad"
      />
    </View>
  );
}
