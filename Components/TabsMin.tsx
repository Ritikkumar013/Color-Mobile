import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Min1 from "../Components/Min1";
import Min3 from "../Components/Min3";
import Min5 from "../Components/Min5";
import Min10 from "../Components/Min10";

type MinuteItem = {
  id: string;
  time: string;
  label: string;
  image: any;
};

const minutesData: MinuteItem[] = [
  {
    id: "1",
    time: "1 min",
    label: "WinGo",
    image: require("../assets/images/clock.png"),
  },
  {
    id: "2",
    time: "3 min",
    label: "WinGo",
    image: require("../assets/images/clock.png"),
  },
  {
    id: "3",
    time: "5 min",
    label: "WinGo",
    image: require("../assets/images/clock.png"),
  },
  {
    id: "4",
    time: "10 min",
    label: "WinGo",
    image: require("../assets/images/clock.png"),
  },
];

const TabsMin = () => {
  const [selectedTab, setSelectedTab] = useState("1");

  const renderTab = ({ item }: { item: MinuteItem }) => (
    <TouchableOpacity
      onPress={() => setSelectedTab(item.id)}
      className={`p-2 px-[19px] items-center rounded-xl ${
        selectedTab === item.id ? "bg-green-700" : "bg-white"
      }`}
    >
      <Image source={item.image} className="w-8 h-8" />
      <Text
        className={`text-sm font-bold ${
          selectedTab === item.id ? "text-white" : "text-black"
        }`}
      >
        {item.label}
      </Text>
      <Text
        className={`text-sm ${
          selectedTab === item.id ? "text-white" : "text-black"
        }`}
      >
        {item.time}
      </Text>
    </TouchableOpacity>
  );

  // Function to get the correct component based on selectedTab
  const getSelectedComponent = () => {
    switch (selectedTab) {
      case "1":
        return <Min1 />;
      case "2":
        return <Min3 />;
      case "3":
        return <Min5 />;
      case "4":
        return <Min10 />;
      default:
        return <Min1 />;
    }
  };

  return (
    <View className="bg-white mx-4 rounded-xl p-3 -mt-4">
      <FlatList
        data={minutesData}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={renderTab}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 0 }}
      />

      {/* Display Selected Component */}
      <View className="mt-4 p-3 border border-gray-300 rounded-xl">
        {getSelectedComponent()}
      </View>
    </View>
  );
};

export default TabsMin;
