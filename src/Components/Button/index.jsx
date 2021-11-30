import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Button({ children, onPress }) {
  return (
    <View style={styles.actions}>
      <TouchableOpacity style={styles.action} onPress={onPress}>
        <Text style={styles.actionText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
