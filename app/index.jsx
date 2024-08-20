import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Me toca importar para que me funcione
import { ScrollView } from "react-native-gesture-handler";
import { images } from "@/constants";

// Componente App
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image 
            source={images.logo}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <Image 
          source={images.cards}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode='contain'
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Descubre infinitas posibilidades con{''}
              <Text className="text-secondary-200"> Aora </Text>
            </Text>

            <Image 
                source={images.path}
                className="w-[136px] h-[15px] absolute 
                -bottom-2 -right-8"
                resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
          Donde la creatividad se encuentra con la innovación:
          Embárcate en un viaje de exploración ilimitada con
          </Text>

          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
