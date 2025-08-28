import "../../global.css";
import { Tabs } from "expo-router";
import React from "react";
import Header from "@/Components/commonComponents/Header";
import { View } from "react-native";
import { Image, Linking } from "react-native";
import index from "@/app/(tabs)";

export default function RootLayout() {
  const handleDownload = () => {
    const apkUrl = "https://diuvin.com/app.apk"; // replace with your APK URL
    Linking.openURL(apkUrl).catch((err) =>
      console.error("Failed to open URL", err)
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
          paddingTop: 7,

          alignItems: "center",
        },
        headerShown: false,
        
      }}
    >
      <Tabs.Screen
        name="Download"
        options={{
          tabBarIcon: () => (
            <Image
              className="w-24 h-9"
              source={require("../../assets/images/download.png")}
              resizeMode="contain"
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            handleDownload(); // Triggers the download
          },
        }}
      />
      <Tabs.Screen
        name="Wallet"
        options={{
          title: "Wallet",
          tabBarIcon: () => (
            <Image
              className="w-24 h-9"
              source={require("../../assets/images/wallet1.png")}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        initialParams={index}
        options={{
          headerShown: true,
          header: () => <Header />,

          tabBarIcon: () => (
            <View className="bg-green-600 p-1 rounded-full">
              <Image
                className="w-20 h-8"
                source={require("../../assets/images/gameHome.png")}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Game"
        options={{
          title: "Game",
          tabBarIcon: () => (
            <Image
              className="w-24 h-9"
              source={require("../../assets/images/win.png")}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Account"
        options={{
          tabBarIcon: () => (
            <Image
              className="w-24 h-9"
              source={require("../../assets/images/profile (1).png")}
              resizeMode="contain"
            />
          ),
          title: "Account",
        }}
      />
    </Tabs>
  );
}

