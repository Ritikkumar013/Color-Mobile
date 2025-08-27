import { View, Text, Image, Animated, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRef, useEffect, useState } from "react";
import Winning from "../../Components/Winning";
import { ScrollView } from "react-native-virtualized-view";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";

export default function App() {
  const windowWidth = Dimensions.get("window").width;
  const animatedValue = useRef(new Animated.Value(windowWidth)).current;
  const [textWidth, setTextWidth] = useState(0);

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
      <SafeAreaView className="flex-1 px-3">
      <StatusBar style="dark" />
        <ScrollView
          showsVerticalScrollIndicator={false} // Hides the scroll indicator
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          
          <Image
            className="w-full h-48 rounded-xl mb-3"
            source={require("../../assets/images/game-icon2.jpg")}
            resizeMethod="auto"
            resizeMode="cover"
          />
          <View className="bg-white p-2 rounded-full flex-row my-2 mb-5">
            <View className="h-8 overflow-hidden">
              <Animated.View
                style={{
                  flexDirection: "row",
                  transform: [{ translateX: animatedValue }],
                }}
              >
                <Text
                  onLayout={(e) => {
                    const width = e.nativeEvent.layout.width;
                    setTextWidth(width); // Measure the text width
                  }}
                >
                  Play at your own Risk.It may be Adictive
                </Text>
              </Animated.View>
            </View>
            <View className="bg-green-500 p-1 px-2 rounded-full">
              <Text className="text-white font-bold">🔥Details</Text>
            </View>
          </View>
          <View className="border-l-4 border-green-500 mb-4">
            <Text className="text-xl font-extrabold px-2">Lottery</Text>
          </View>
          <TouchableOpacity>
          <LinearGradient
            colors={["#388E3C", "#C8E6C9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              minHeight: 112,
              padding: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              flexDirection: "row",
              overflow: "visible",
            }}
          >
           
              <View>
                <Text className="text-xl font-extrabold text-white my-3">
                  1 Minute Wingo
                </Text>
                <Text className="font-bold text-white">
                  Guess number /Green/Purple/Red to win
                </Text>
              </View>
              <View style={{ position: "absolute", right: 16, top: -30 }}>
                <Image
                  source={require("../../assets/images/balls.png")}
                  style={{ width: 105, height: 105 }}
                  resizeMode="contain"
                />
              </View>
            
          </LinearGradient>
          </TouchableOpacity>
          <View className="bg-white flex-row justify-between p-3 rounded-b-xl mb-7">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("../../assets/images/pro.jpg")}
                className="w-8 h-8 rounded-full"
                resizeMode="contain"
              />
              <Text>Mem***TiA</Text>
            </View>

            <Text>Won ₹7854</Text>
          </View>
          <TouchableOpacity style={{ flex: 1 }}>
            <LinearGradient
              colors={["#388E3C", "#C8E6C9"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                minHeight: 112,
                padding: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                flexDirection: "row",
                overflow: "visible",
              }}
            >
              <View>
                <Text className="text-xl font-extrabold text-white my-3">
                  3 Minute Wingo
                </Text>
                <Text className="font-bold text-white">
                  Guess number /Green/Purple/Red to win
                </Text>
              </View>
              <View style={{ position: "absolute", right: 16, top: -30 }}>
                <Image
                  source={require("../../assets/images/balls.png")}
                  style={{ width: 105, height: 105 }}
                  resizeMode="contain"
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View className="bg-white flex-row justify-between p-3 rounded-b-xl mb-7">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("../../assets/images/pro.jpg")}
                className="w-8 h-8 rounded-full"
                resizeMode="contain"
              />
              <Text>Mem***TiA</Text>
            </View>
            <Text>Won ₹7854</Text>
          </View>
          <LinearGradient
            colors={["#388E3C", "#C8E6C9"]} // Gradient colors: green to blue
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              minHeight: 112, // min-h-28 equivalent
              padding: 12, // p-3 equivalent
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              flexDirection: "row",
              overflow: "visible",
            }}
          >
            <View>
              <Text className="text-xl font-extrabold text-white my-3">
                5 Minute Wingo
              </Text>
              <Text className="font-bold text-white">
                Guess number /Green/Purple/Red to win
              </Text>
            </View>
            <View style={{ position: "absolute", right: 16, top: -30 }}>
              <Image
                source={require("../../assets/images/balls.png")}
                style={{ width: 105, height: 105 }} // w-24 h-24 equivalent
                resizeMode="contain"
              />
            </View>
          </LinearGradient>
          <View className="bg-white flex-row justify-between p-3 rounded-b-xl mb-7">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("../../assets/images/avatar1.png")}
                className="w-8 h-8 rounded-full"
                resizeMode="contain"
              />
              <Text>Mem***TiA</Text>
            </View>
            <Text>Won ₹7854</Text>
          </View>
          <LinearGradient
            colors={["#388E3C", "#C8E6C9"]} // Gradient colors: green to blue
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              minHeight: 112, // min-h-28 equivalent
              padding: 12, // p-3 equivalent
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              flexDirection: "row",
              overflow: "visible",
            }}
          >
            <View>
              <Text className="text-xl font-extrabold text-white my-3">
                10 Minute Wingo
              </Text>
              <Text className="font-bold text-white">
                Guess number /Green/Purple/Red to win
              </Text>
            </View>
            <View style={{ position: "absolute", right: 16, top: -30 }}>
              <Image
                source={require("../../assets/images/balls.png")}
                style={{ width: 105, height: 105 }} // w-24 h-24 equivalent
                resizeMode="contain"
              />
            </View>
          </LinearGradient>
          <View className="bg-white flex-row justify-between p-3 rounded-b-xl mb-7">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("../../assets/images/avatar1.png")}
                className="w-8 h-8 rounded-full"
                resizeMode="contain"
              />
              <Text>Mem***TiA</Text>
            </View>
            <Text>Won ₹7854</Text>
          </View>
          <View>
            <View className="border-l-4 border-green-500 mb-5">
              <Text className="text-xl font-extrabold px-2">
                Winning Information
              </Text>
            </View>
          </View>
          <ScrollView>
            {/* <Winning /> */}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
