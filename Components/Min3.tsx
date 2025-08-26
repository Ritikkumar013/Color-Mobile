import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import ChangePassword from "@/app/ChangePassword";

const numberImages: { [key: number]: any } = {
  0: require("../assets/images/No_images/0.png"),
  1: require("../assets/images/No_images/1.png"),
  2: require("../assets/images/No_images/2.png"),

  3: require("../assets/images/No_images/3.png"),
  4: require("../assets/images/No_images/4.png"),
  5: require("../assets/images/No_images/5.png"),

  6: require("../assets/images/No_images/6.png"),
  7: require("../assets/images/No_images/7.png"),
  8: require("../assets/images/No_images/8.png"),
  9: require("../assets/images/No_images/9.png"),
};

const Min3 = () => {
  const [time, setTime] = useState(180); // Set initial time to 3 minutes (180 seconds)
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  // Convert time into MM:SS format and separate digits
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");

    return [...minutes, ":", ...remainingSeconds]; // Returns an array for styling each digit
  };

  return (
    <View>
      <View className="bg-green-600 flex-row justify-between p-3 rounded-xl py-5 items-center">
        {/* Left Section (Unchanged) */}
        <View>
          <View className="border border-white rounded-2xl items-center px-3 flex-row gap-1 py-1">
            <Image
              source={require("../assets/images/howtoplay.png")}
              className="w-5 h-5"
            />
            <Text className="text-white font-bold text-sm">How to play</Text>
          </View>
          <Text className="font-extrabold text-white px-3 py-2">
            Win Go 3 min
          </Text>
        </View>

        {/* Right Section (Modified to match image) */}
        <View className="items-center px-1">
          {/* Time Remaining Title */}
          <Text className="text-white text-lg font-extrabold mb-1">
            Time Remaining
          </Text>

          {/* Timer in Block Style */}
          <View className="flex-row gap-1">
            {formatTime(time).map((char, index) => (
              <View
                key={index}
                className={`${
                  char === ":" ? "bg-white" : "bg-white"
                } rounded-md px-2`}
              >
                <Text className="text-green-600 text-lg font-extrabold">
                  {char}
                </Text>
              </View>
            ))}
          </View>

          {/* Extra Number Below Timer */}
          <Text className="text-white text-center mt-1">2025485252</Text>
        </View>
      </View>
{/* Game Section   */}
      <View className="my-5">
        <View className="flex-row justify-between ">
          <View className="bg-green-500 px-7 p-2 rounded-tr-2xl rounded-bl-2xl">
            <Text className="text-lg text-white font-bold">Green</Text>
          </View>

          <View className="bg-violet-500 px-7 p-2 rounded-tr-2xl rounded-bl-2xl">
            <Text className="text-lg text-white font-bold">Violet</Text>
          </View>

          <View className="bg-red-500 px-7 p-2 rounded-tr-2xl rounded-bl-2xl">
            <Text className="text-lg text-white font-bold">Red</Text>
          </View>
        </View>

        <View className="flex flex-row flex-wrap justify-center gap-4 my-4">
          {numbers.map((number, index) => (
            <TouchableOpacity
              key={index}
              className="h-16 w-16 rounded-full overflow-hidden items-center justify-center"
              onPress={() => console.log(`Number ${number} pressed`)} // Replace with your logic
            >
              <Image
                source={numberImages[number]} // Replace with your actual image mapping logic
                className="h-full w-full object-cover"
              />
            </TouchableOpacity>
          ))}
        </View>

        <View className="container flex-row gap-2 items-center">
          <View>
            <TouchableOpacity className="border border-green-500 p-3 px-5 rounded-xl">
              <Text className="text-lg text-green-500 font-semibold">
                Random
              </Text>
            </TouchableOpacity>
          </View>
          <View>
          <View className="flex-row gap-2">
            {[3, 5, 10, 20, 50].map((multiplier) => (
              <TouchableOpacity
                key={multiplier}
                className="p-2 hover:bg-green-500 hover:text-white bg-gray-200 rounded-lg text-gray-700"
              >
                <Text className="text-sm">x{multiplier}</Text>
              </TouchableOpacity>
            ))}
          </View>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default Min3;
