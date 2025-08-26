import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Svg, { Circle } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WalletPage = () => {
  const totalLimit = 200000;
  const [walletBalance, setWalletBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  const progressPercentage = (walletBalance / totalLimit) * 100;
  const progressColor = "green";

  // Circular progress settings
  const strokeWidth = 10;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progressStrokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;

  // Function to fetch wallet balance from API
   const fetchWalletBalance = async () => {
    try {
      setLoading(true);
      
      // Retrieve token from AsyncStorage
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }
  
      // Fetch wallet balance from API with Authorization header
      const response = await fetch(
        "http://192.154.230.43:3000/api/wallet/balance",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Include token in the request
          },
        }
      );
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch balance");
      }
  
      setWalletBalance(data.data.balance);
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWalletBalance();
  }, []);

  return (
    <ScrollView className="bg-gray-100">
      <StatusBar style="light" />
      <View className="mb-4">
        
        <View className="bg-green-500 p-5 items-center pb-3">
          <Text className="text-3xl text-white py-3 font-extrabold">
            Wallet
          </Text>
          <Ionicons className="my-2" name="wallet" size={40} color="white" />
          <View className="items-center my-2">
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <>
                <Text className="text-white text-xl">{`₹${walletBalance}`}</Text>
                <Text className="text-white text-xl font-bold">
                  Total Amount
                </Text>
              </>
            )}
          </View>
        </View>

        {/* Circular Progress Bar */}
        <View className="items-center my-8">
          <View>
            <Svg
              width={radius * 2 + strokeWidth * 2}
              height={radius * 2 + strokeWidth * 2}
              className="absolute"
            >
              {/* Background Circle */}
              <Circle
                cx={radius + strokeWidth}
                cy={radius + strokeWidth}
                r={radius}
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Progress Circle */}
              <Circle
                cx={radius + strokeWidth}
                cy={radius + strokeWidth}
                r={radius}
                stroke={progressColor}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={progressStrokeDashoffset}
                strokeLinecap="round"
                rotation="-90"
                origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}
              />
            </Svg>
            {/* Center Percentage Text */}
            <View
              style={{
                position: "absolute",
                left: strokeWidth,
                right: strokeWidth,
                top: strokeWidth,
                bottom: strokeWidth,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text className="text-2xl font-bold">{`${progressPercentage.toFixed(
                0
              )}%`}</Text>
            </View>
          </View>
        </View>

        <View className="items-center mx-4">
          {loading ? (
            <ActivityIndicator size="large" color="green" />
          ) : (
            <>
              <Text className="text-md font-bold">{`Current Balance: ₹${walletBalance}`}</Text>
              <TouchableOpacity className="items-center w-full bg-green-600 p-3 rounded-full my-3">
                <Text className="text-lg text-white font-bold">
                  Add To Wallet
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Feature Buttons Section */}
        <View className="mx-4 my-14">
          <View className="flex-row justify-between gap-2">
            <Link href="/AddMoney">
              <View className="items-center gap-3">
                <Ionicons
                  className="bg-white rounded-xl p-1 shadow-xl"
                  name="wallet"
                  size={35}
                  color="orange"
                />
                <View className="items-center">
                  <Text className="text-sm font-bold">Add</Text>
                  <Text className="text-sm font-bold">Money</Text>
                </View>
              </View>
            </Link>
            <Link href="/WithdrawMoney">
              <View className="items-center gap-3">
                <Ionicons
                  className="bg-white rounded-xl p-1 shadow-xl"
                  name="wallet"
                  size={35}
                  color="blue"
                />
                <View className="items-center">
                  <Text className="text-sm font-bold">Withdrawal</Text>
                  <Text className="text-sm font-bold">Money</Text>
                </View>
              </View>
            </Link>
            <Link href="/Transaction">
              <View className="items-center gap-3">
                <Ionicons
                  className="bg-white rounded-xl p-1 shadow-xl"
                  name="wallet"
                  size={35}
                  color="red"
                />
                <View className="items-center">
                  <Text className="text-sm font-bold">Deposit</Text>
                  <Text className="text-sm font-bold">History</Text>
                </View>
              </View>
            </Link>

            <Link href="/Transaction">
              <View className="items-center gap-3">
                <Ionicons
                  className="bg-white rounded-xl p-1 shadow-xl"
                  name="wallet"
                  size={35}
                  color="yellow"
                />
                <View className="items-center">
                  <Text className="text-sm font-bold">Withdrawal</Text>
                  <Text className="text-sm font-bold">History</Text>
                </View>
              </View>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WalletPage;
