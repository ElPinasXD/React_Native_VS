import { StyleSheet , Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

// Componente App
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-3xl text-black font-pblack">Estoy en INDEX</Text>
    <StatusBar style='auto' />
    <Link href="/home" className="text-green-500 mt-5 text-2xl">Home</Link>
    <Link href="/Register" className="text-red-500 mt-5 text-2xl">Registro</Link>
  </View>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});*/

