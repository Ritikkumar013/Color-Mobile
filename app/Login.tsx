import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const register = () => {
    router.push("/Register");
  };

  const handleLogin = async () => {
    if (!phoneNumber || !password) {
      Alert.alert("Error", "Please enter phone number and password");
      return;
    }

    try {
      const response = await fetch("http://192.154.230.43:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: phoneNumber,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      const token = data?.data?.token; // Extract token
      if (!token) {
        throw new Error("Token not received from server.");
      }

      await AsyncStorage.setItem("token", token); // Store token

      // Alert.alert("Success", "Login successful!");

      console.log("Token Stored:", token);

      // Navigate to Home Screen
      router.push("/(tabs)");
    } catch (error) {
      Alert.alert("Login Failed", (error as Error).message);
    }
  };
  return (
    <GestureHandlerRootView className="">
      <ScrollView className="">
        <SafeAreaView className="bg-[#4CAF50] pt-10">
          <View className="items-center">
            <Image
              className="w-32 h-12"
              source={require("../assets/images/headerlogo.png")}
              resizeMode="contain"
            />
          </View>
          <View className="mx-4 my-7">
            <Text className="text-white text-lg font-extrabold">Login</Text>
            <Text className="text-white text-sm font-extrabold">
              Please Login with your phone number
            </Text>
          </View>
        </SafeAreaView>

        <View className="items-center border-b-2 border-green-600 mx-6 py-2 mb-5">
          <Image
                      className="w-8 h-12"
                      source={require("../assets/images/cellphone.webp")}
                      resizeMode="contain"
                    />
          <Text className="text-xl font-bold text-green-600 mb-2">
            Login Using phone
          </Text>
        </View>

        <View className="mx-4 mt-4">
          <View className="flex-row items-center gap-2">
            <Image
              className="w-6 h-14"
              source={require("../assets/images/cellphone.webp")}
              resizeMode="contain"
            />
            <Text className="font-bold text-lg">Phone number</Text>
          </View>
          <TextInput
            className="bg-white rounded-md p-3"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />
        </View>

        <View className="mx-4 mt-4">
          <View className="flex-row gap-2 items-center">
            <Image
              className="w-8 h-16"
              source={require("../assets/images/reset.png")}
              resizeMode="contain"
            />
            <Text className="font-bold text-lg">Password</Text>
          </View>
          <View className="relative">
            <TextInput
              className="bg-white rounded-md p-3"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              <Image
                className="w-7 h-7"
                source={
                  showPassword
                    ? require("../assets/images/eye-hide.png")
                    : require("../assets/images/eye.png")
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mx-4 my-7">
          <TouchableOpacity
            onPress={handleLogin}
            className="w-full items-center bg-green-600 p-3 rounded-full"
          >
            <Text className="text-white text-xl font-bold">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={register}
            className="w-full items-center  border-2 border-green-600 p-3 rounded-full my-3"
          >
            <Text className="text-green-600 text-xl font-bold">Register</Text>
          </TouchableOpacity>

          <Link href="/ForgotPassword">
            <Text className="text-green-600 text-lg text-center font-extrabold">
              Forgot password ?
            </Text>
          </Link>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Login;
