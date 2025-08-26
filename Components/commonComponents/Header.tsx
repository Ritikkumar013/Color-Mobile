import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Header() {
  return (
    <SafeAreaView className="flex-row justify-between bg-white px-2 py-2">
      {/* <StatusBar style="dark" /> */}
      <View className="">
        <Image
          className="w-32 h-12"
          source={require("../../assets/images/logoD.png")}
          resizeMode="contain"
        />
      </View>
      <View className="flex-row gap-3">
        <View>
          {/* <TouchableOpacity className="bg-green-500 border-2 border-green-500  px-4 p-1 rounded-md">
            <Text className="text-md text-white font-extrabold">Login</Text>
          </TouchableOpacity> */}

          <Link href='/Login'><View className="bg-green-500 border-2 border-green-500  px-4 p-1 rounded-md"><Text className="text-md text-white font-extrabold">Login</Text></View></Link>
        </View>
        <View>
          {/* <TouchableOpacity className="border-2 border-green-500 px-4 p-1 rounded-md">
            <Text className="text-md text-green-600 font-extrabold">
              Register
            </Text>
          </TouchableOpacity> */}

<Link href='/Register'><View className="border-2 border-green-500 px-4 p-1 rounded-md">
<Text className="text-md text-green-600 font-extrabold">
              Register
            </Text>
  </View></Link>

        </View>
      </View>
    </SafeAreaView>
  );
}
