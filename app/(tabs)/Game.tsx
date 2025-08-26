import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React from "react";
import TabsMin from "../../Components/TabsMin";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useEffect, useState } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {TouchableOpacity} from "react-native";

const Game = () => {
  const windowWidth = Dimensions.get("window").width;
  const animatedValue = useRef(new Animated.Value(windowWidth)).current;
  const [textWidth, setTextWidth] = useState(0);
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchBalance = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        setLoading(false);
        return;
      }

      const response = await fetch(
        "http://192.154.230.43:3000/api/wallet/balance",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("API Response:", data); // Debugging

      if (
        data.status === "success" &&
        data.data &&
        data.data.balance !== undefined
      ) {
        setBalance(data.data.balance);
      } else {
        console.error("Failed to fetch balance:", data.message);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: -textWidth, // Move off-screen to the left
          duration: textWidth * 20, // Adjust duration to control speed
          useNativeDriver: true,
        })
      ).start();
    };
    if (textWidth > 0) {
      startAnimation();
    }
    startAnimation();
  }, [textWidth, animatedValue]);

  return (
    <GestureHandlerRootView>
      <StatusBar style="light" />
      <ScrollView>
        <SafeAreaView className="bg-green-500 min-h-[35vh] rounded-b-[40px] p-4">
          <View className="bg-white w-full items-center rounded-3xl my-4">
            {/* <View className="flex-row items-center gap-2 mt-2">
              <Text className="text-xl font-extrabold">0.00</Text>
              <Ionicons name="refresh" size={20} color="black" />
            </View> */}

            <TouchableOpacity
              className="flex flex-row items-center mt-3"
              onPress={fetchBalance}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#16a34a" />
              ) : (
                <>
                  <Text className="text-green-600 font-bold text-2xl">
                    {balance !== null ? `₹${balance}` : "₹0"}
                  </Text>
                  <FontAwesome5
                    name="sync-alt"
                    size={16}
                    color="#ccc"
                    className="ml-2"
                  />
                </>
              )}
            </TouchableOpacity>

            <View className="flex-row items-center gap-2">
              <Ionicons name="wallet" size={30} color="green" />
              <Text className="text-xl font-bold">Wallet Balance</Text>
            </View>

            <View className="flex-row justify-between gap-3 mt-10 my-4">
              <Link href="/AddMoney">
                {" "}
                <View className="bg-green-600 p-2 px-10 rounded-full">
                  <Text className="text-white text-lg text-center">
                    Deposit
                  </Text>
                </View>{" "}
              </Link>

              <Link href="/WithdrawMoney">
                {" "}
                <View className="bg-green-600 p-2 rounded-full px-10">
                  <Text className="text-white text-lg text-center">
                    Withdraw
                  </Text>
                </View>
              </Link>
            </View>
          </View>

          <View className="bg-white p-1 rounded-full flex-row my-2 mb-5">
            <View className="h-8 overflow-hidden">
              <Animated.View
                style={{
                  flexDirection: "row",
                  transform: [{ translateX: animatedValue }],
                }}
              >
                {/* Wrap the text inside Animated.Text */}
                <Animated.Text
                  onLayout={(e) => {
                    const width = e.nativeEvent.layout.width;
                    setTextWidth(width); // Measure the text width
                  }}
                >
                  Play at your own Risk. It may be Addictive.
                </Animated.Text>
              </Animated.View>
            </View>
            <View className="bg-green-500 rounded-full p-2">
              <Text className="text-white font-bold">🔥Details</Text>
            </View>
          </View>
        </SafeAreaView>
        <TabsMin />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Game;
