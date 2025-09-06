import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Pedometer, Accelerometer, Gyroscope } from "expo-sensors";

export default function StepCounter() {
  const [haveAcc, setAcc] = useState<string|null>(null);
  const [haveGyro, setGyro] = useState<string|null>(null);
  useEffect(()=>{
    Gyroscope.isAvailableAsync().then((answer)=>{
      setGyro(String(answer));
    })
    Accelerometer.isAvailableAsync().then((answer)=>{
      setAcc(String(answer));
    })

  },[]);
  Accelerometer.isAvailableAsync()
  return (
    <View style={styles.container}>
      <Text>Gyro: {haveGyro ?? "..."} AND Accelerometer: {haveAcc ?? "..."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18, marginVertical: 4 },
  steps: { fontSize: 40, color: "green", marginTop: 20 },
  note: { marginTop: 20, fontStyle: "italic", color: "gray", textAlign: "center" },
});
