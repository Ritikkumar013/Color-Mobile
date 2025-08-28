// import "../../global.css";
// import { Tabs } from "expo-router";
// import React from "react";
// import Header from "@/Components/commonComponents/Header";
// import { View } from "react-native";
// import { Image, Linking } from "react-native";
// import index from "@/app/(tabs)";

// export default function RootLayout() {
//   const handleDownload = () => {
//     const apkUrl = "https://diuvin.com/app.apk"; // replace with your APK URL
//     Linking.openURL(apkUrl).catch((err) =>
//       console.error("Failed to open URL", err)
//     );
//   };

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarStyle: {
//           height: 70,
//           paddingTop: 12,
//           paddingBottom: 12,
//           alignItems: "center",
//           justifyContent: "center",
          
//         },
//         headerShown: false,
//         tabBarLabelStyle: {
//           fontSize: 11,
//           marginTop: 4,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="Download"
//         options={{
//           title: "Download",
//           tabBarIcon: () => (
//             <Image
//               className="w-10 h-10"
//               source={require("../../assets/images/download.png")}
//               resizeMode="contain"
//             />
//           ),
//         }}
//         listeners={{
//           tabPress: (e) => {
//             e.preventDefault();
//             handleDownload(); // Triggers the download
//           },
//         }}
//       />
//       <Tabs.Screen
//         name="Wallet"
//         options={{
//           title: "Wallet",
//           tabBarIcon: () => (
//             <Image
//               className="w-8 h-8"
//               source={require("../../assets/images/wallet1.png")}
//               resizeMode="contain"
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="index"
//         initialParams={index}
//         options={{
//           headerShown: true,
//           header: () => <Header />,
//           title: "", // Remove the title for index tab
//           tabBarIcon: () => (
//             <View className="bg-green-600 p-[5px] px-6 rounded-full">
//               <Image
//                 className="w-8 h-8"
//                 source={require("../../assets/images/gameHome.png")}
//                 resizeMode="contain"
//               />
//             </View>
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="Game"
//         options={{
//           title: "Game",
//           tabBarIcon: () => (
//             <Image
//               className="w-8 h-8"
//               source={require("../../assets/images/win.png")}
//               resizeMode="contain"
//             />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="Account"
//         options={{
//           title: "Account",
//           tabBarIcon: () => (
//             <Image
//               className="w-8 h-8"
//               source={require("../../assets/images/profile (1).png")}
//               resizeMode="contain"
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

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
      initialRouteName="index" // This sets index as the landing page
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingTop: 12,
          paddingBottom: 12,
          alignItems: "center",
          justifyContent: "center",
          
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="Download"
        options={{
          title: "Download",
          tabBarIcon: () => (
            <Image
              className="w-10 h-10"
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
              className="w-8 h-8"
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
          title: "", 
          tabBarIcon: () => (
            <View className="bg-green-600 p-[5px] px-6 rounded-full">
              <Image
                className="w-8 h-8"
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
              className="w-8 h-8"
              source={require("../../assets/images/win.png")}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Account"
        options={{
          title: "Account",
          tabBarIcon: () => (
            <Image
              className="w-8 h-8"
              source={require("../../assets/images/profile (1).png")}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}