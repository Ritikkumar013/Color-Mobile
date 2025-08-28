// import React from "react";
// import { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Linking,
//   ActivityIndicator,
// } from "react-native";
// import {
//   FontAwesome5,
//   FontAwesome,
//   Feather,
//   MaterialIcons,
//   Fontisto,
// } from "@expo/vector-icons";
// import { Link, useRouter } from "expo-router";
// import GPopup from "@/Components/GPopup";
// import Telegram from "@/Components/Telegram";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Account = () => {
//   const fetchBalance = async () => {
//     try {
//       setLoading(true);
//       const token = await AsyncStorage.getItem("token");

//       if (!token) {
//         console.error("No token found");
//         setLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "http://192.154.230.43:3000/api/wallet/balance",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();
//       console.log("API Response:", data); // Debugging

//       if (
//         data.status === "success" &&
//         data.data &&
//         data.data.balance !== undefined
//       ) {
//         setBalance(data.data.balance);
//       } else {
//         console.error("Failed to fetch balance:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching balance:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBalance();
//   }, []);

//   const handleDownload = () => {
//     const apkUrl = "https://diuvin.com/app.apk"; // replace with your APK URL
//     Linking.openURL(apkUrl).catch((err) =>
//       console.error("Failed to open URL", err)
//     );
//   };

//   // const user = {
//   //   name: "MemberpD6SF",
//   //   uid: "369751",
//   //   mobile: "+9189**091236",
//   //   balance: "₹4.7",
//   // };
//   const router = useRouter();
//   const support = () => {
//     router.push("/Support");
//   };

//   const settings = () => {
//     router.push("/ChangePassword");
//   };

//   const wallet = () => {
//     router.push("/Wallet");
//   };
//   const deposit = () => {
//     router.push("/AddMoney");
//   };
//   const withraw = () => {
//     router.push("/WithdrawMoney");
//   };

//   const transaction = () => {
//     router.push("/Transaction");
//   };

//   // const avatar = require("../../assets/images/Profile.png");
//   const [isPopupVisible, setPopupVisible] = useState(false);
//   const [balance, setBalance] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);
//   return (
//     <ScrollView className="bg-green-50 max-w-md">
//       <StatusBar style="light" />
//       {/* Header Section */}
//       <SafeAreaView className="bg-green-500 p-5 items-center rounded-b-[30px] pb-20">
//         <View className="flex flex-row items-center">
//           <Image
//             source={require("../../assets/images/Profile.png")}
//             className="w-16 h-16 rounded-full border-2 border-white"
//           />
//           <View className="ml-4">
//             <Text className="text-lg font-bold text-white">MemberpD6SF</Text>
//             <Text className="text-sm text-white">UID: 369751</Text>
//             <Text className="text-sm text-white">Mobile: +9189**091236</Text>
//           </View>
//         </View>
//       </SafeAreaView>

//       {/* Balance Section */}
//       <View className="bg-white p-4 rounded-xl flex flex-col shadow-md mx-4 -mt-12">
//         <View className="flex flex-row justify-between items-center shadow-md">
//           <Text className="text-gray-700 font-bold text-lg">Total Balance</Text>
//           <TouchableOpacity
//             className="flex flex-row items-center"
//             onPress={fetchBalance}
//           >
//             {loading ? (
//               <ActivityIndicator size="small" color="#16a34a" />
//             ) : (
//               <>
//                 <Text className="text-green-600 font-bold text-xl">
//                   {balance !== null ? `₹${balance}` : "₹0"}
//                 </Text>
//                 <FontAwesome5
//                   name="sync-alt"
//                   size={16}
//                   color="#ccc"
//                   className="ml-2"
//                 />
//               </>
//             )}
//           </TouchableOpacity>
//         </View>

//         <View className="mt-4 flex flex-row justify-around">
//           <TouchableOpacity onPress={wallet} className="items-center">
//             <Fontisto name="wallet" size={24} color="#ff5e57" />
//             <Text className="text-gray-600 mt-2">Wallet</Text>
//           </TouchableOpacity>

//           <TouchableOpacity className="items-center" onPress={deposit}>
//             <FontAwesome5 name="piggy-bank" size={24} color="#ffa502" />
//             <Text className="text-gray-600 mt-2">Deposit</Text>
//           </TouchableOpacity>
//           <TouchableOpacity className="items-center" onPress={withraw}>
//             <MaterialIcons name="credit-card" size={24} color="#1e90ff" />
//             <Text className="text-gray-600 mt-2">Withdraw</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       {/* History Section */}
//       <View className="mx-4 mt-4">
//         <View className="container flex flex-row justify-between gap-3">
//           <TouchableOpacity
//             onPress={transaction}
//             className="flex-1 bg-white rounded-xl shadow-md "
//           >
//             <View className="container flex-row items-center gap-3 justify-center p-3">
//               <FontAwesome5 name="money-bill" size={26} color="#3498db" />
//               <View>
//                 <Text className="text-sm font-bold">Bet</Text>
//                 <Text className="text-sm">My Bet History</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <View className="flex-1 bg-white rounded-xl shadow-md ">
//             <Link href="/Transaction">
//               {" "}
//               <View className="conatiner flex-row gap-3 justify-center items-center p-3">
//                 <FontAwesome5 name="exchange-alt" size={26} color="#27ae60" />
//                 <View>
//                   <Text className="font-semibold">Transaction</Text>
//                   <Text className="text-gray- text-sm">My Transaction</Text>
//                 </View>
//               </View>
//             </Link>
//           </View>
//         </View>

//         <View className="flex flex-row justify-between my-3 gap-3">
//           <TouchableOpacity
//             onPress={transaction}
//             className="flex-1 bg-white rounded-xl shadow-md "
//           >
//             <View className="container flex-row justify-center items-center gap-3 p-3">
//               <FontAwesome5 name="piggy-bank" size={26} color="#e74c3c" />
//               <View>
//                 <Text className="text-sm font-bold">Deposit</Text>
//                 <Text className="text-sm">My Deposit history</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={transaction}
//             className="flex-1 bg-white rounded-xl shadow-md"
//           >
//             <View className="container flex-row justify-center items-center gap-3 p-3">
//               <FontAwesome5 name="credit-card" size={20} color="#f39c12" />
//               <View>
//                 <Text className="text-sm font-bold">Withdraw</Text>
//                 <Text className="text-gray-600 text-sm">
//                   My Withdraw history
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Section 4 */}
//       <View className="bg-white mx-4 rounded-lg my-2 mb-4">
//         <Link href="/Profile">
//           <View className="container flex-row justify-between items-center p-3 border-b border-gray-300">
//             <View className="flex-row items-center gap-2">
//               <Image
//                 className="w-10 h-8"
//                 source={require("../../assets/images/promote.png")}
//                 resizeMode="contain"
//               />
//               <Text className="text-lg font-bold">My Profile</Text>
//             </View>
//             <View>
//               <Image
//                 className="w-9 h-10"
//                 source={require("../../assets/images/next.png")}
//                 resizeMode="contain"
//               />
//             </View>
//           </View>
//         </Link>

//         <TouchableOpacity
//           onPress={settings}
//           className="container flex-row justify-between items-center p-3 border-b border-gray-300"
//         >
//           <View className="flex-row items-center gap-2">
//             <Image
//               className="w-10 h-8"
//               source={require("../../assets/images/setting.png")}
//               resizeMode="contain"
//             />
//             <Text className="text-lg font-bold">Settings</Text>
//           </View>
//           <View>
//             <Image
//               className="w-9 h-10"
//               source={require("../../assets/images/next.png")}
//               resizeMode="contain"
//             />
//           </View>
//         </TouchableOpacity>
//         <Link href="/AboutUs">
//           <View className="container flex-row justify-between items-center p-3 border-b border-gray-300">
//             <View className="flex-row items-center gap-2">
//               <Image
//                 className="w-10 h-8"
//                 source={require("../../assets/images/agent.png")}
//                 resizeMode="contain"
//               />
//               <Text className="text-lg font-bold">About Us</Text>
//             </View>
//             <View>
//               <Image
//                 className="w-9 h-10"
//                 source={require("../../assets/images/next.png")}
//                 resizeMode="contain"
//               />
//             </View>
//           </View>
//         </Link>

//         <TouchableOpacity
//           onPress={support}
//           className="container flex-row justify-between items-center p-3 border-b border-gray-300"
//         >
//           <View className="flex-row items-center gap-2">
//             <Image
//               className="w-10 h-8"
//               source={require("../../assets/images/ticket.png")}
//               resizeMode="contain"
//             />
//             <Text className="text-lg font-bold">Support</Text>
//           </View>
//           <View>
//             <Image
//               className="w-9 h-10"
//               source={require("../../assets/images/next.png")}
//               resizeMode="contain"
//             />
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => setPopupVisible(true)}
//           className="container flex-row justify-between items-center p-3 border-b border-gray-300"
//         >
//           <View className="flex-row items-center gap-2">
//             <Image
//               className="w-10 h-8"
//               source={require("../../assets/images/videos.png")}
//               resizeMode="contain"
//             />
//             <Text className="text-lg font-bold">Guide</Text>
//           </View>
//           <View>
//             <Image
//               className="w-9 h-10"
//               source={require("../../assets/images/next.png")}
//               resizeMode="contain"
//             />
//             <GPopup
//               visible={isPopupVisible}
//               onClose={() => setPopupVisible(false)}
//             />
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleDownload}
//           className="container flex-row justify-between items-center p-3 border-b border-gray-300"
//         >
//           <View className="flex-row items-center gap-2">
//             <Image
//               className="w-10 h-8"
//               source={require("../../assets/images/app.png")}
//               resizeMode="contain"
//             />
//             <Text className="text-lg font-bold">App Download</Text>
//           </View>
//           <View>
//             <Image
//               className="w-9 h-10"
//               source={require("../../assets/images/next.png")}
//               resizeMode="contain"
//             />
//           </View>
//         </TouchableOpacity>
//         <Telegram />
//       </View>

//       {/* Logout Section */}
//       <View className="mt-2 mb-6 mx-4">
//         {/* <Link href='/Profile'> <TouchableOpacity  className="bg-green-500 py-3 rounded-full items-center">
//           <Text className="text-white text-lg font-extrabold">Log Out</Text>
//         </TouchableOpacity> </Link> */}

//         <Link
//           className="bg-green-500 py-3 rounded-full items-center"
//           href="/Login"
//         >
//           <View className="w-full bg-green-500 px-3 rounded-full items-center">
//             <Text className="text-white text-lg font-extrabold">Log Out</Text>
//           </View>
//         </Link>
//       </View>
//     </ScrollView>
//   );
// };

// export default Account;

import React from "react";
import { useState } from "react";
import { StatusBar as RNStatusBar } from "react-native"; // Add this import
import { StatusBar } from "expo-status-bar"; // Keep this for the StatusBar component

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  ActivityIndicator,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Feather,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import GPopup from "@/Components/GPopup";
import Telegram from "@/Components/Telegram";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Type definitions for user profile
interface UserProfile {
  _id: string;
  name: string;
  number: {
    value: string;
    verified: boolean;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface UserProfileResponse {
  success: boolean;
  message: string;
  data: UserProfile;
}

const Account = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [profileLoading, setProfileLoading] = useState(false);

  const fetchUserProfile = async () => {
    try {
      setProfileLoading(true);
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        setProfileLoading(false);
        return;
      }

      const response = await fetch(
        "http://192.154.230.43:3000/api/users/profile", // Update with your actual profile endpoint
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data: UserProfileResponse = await response.json();
      console.log("Profile API Response:", data); // Debugging

      if (data.success && data.data) {
        setUserProfile(data.data);
      } else {
        console.error("Failed to fetch user profile:", data.message);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    } finally {
      setProfileLoading(false);
    }
  };
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
        // Fix floating point precision issues and round to 2 decimal places
        const roundedBalance = Math.round(data.data.balance * 100) / 100;
        setBalance(roundedBalance);
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
    fetchUserProfile();
  }, []);

  const handleDownload = () => {
    const apkUrl = "https://diuvin.com/app.apk"; // replace with your APK URL
    Linking.openURL(apkUrl).catch((err) =>
      console.error("Failed to open URL", err)
    );
  };

  const router = useRouter();
  const support = () => {
    router.push("/Support");
  };

  const settings = () => {
    router.push("/ChangePassword");
  };

  const wallet = () => {
    router.push("/Wallet");
  };
  const deposit = () => {
    router.push("/AddMoney");
  };
  const withraw = () => {
    router.push("/WithdrawMoney");
  };

  const transaction = () => {
    router.push("/BetHistory");
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <ScrollView className="bg-green-50 max-w-md">
      <StatusBar style="light" translucent={true} />
      {/* Header Section */}
      <SafeAreaView
        className="bg-green-500 p-5 items-center rounded-b-[30px] pb-20"
        style={{ paddingTop: RNStatusBar.currentHeight }}
      >
        <View className="flex flex-row items-center">
          <Image
            source={require("../../assets/images/Profile.png")}
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <View className="ml-4">
            {profileLoading ? (
              <>
                <Text className="text-lg font-bold text-white">Loading...</Text>
                <Text className="text-sm text-white">UID: Loading...</Text>
                <Text className="text-sm text-white">Mobile: Loading...</Text>
              </>
            ) : userProfile ? (
              <>
                <Text className="text-lg font-bold text-white">
                  {userProfile.name}
                </Text>
                <Text className="text-sm text-white">
                  UID: {userProfile._id}
                </Text>
                <Text className="text-sm text-white">
                  Mobile: {userProfile.number.value}
                </Text>
              </>
            ) : (
              <>
                <Text className="text-lg font-bold text-white">
                  MemberpD6SF
                </Text>
                <Text className="text-sm text-white">UID: 369751</Text>
                <Text className="text-sm text-white">
                  Mobile: +9189**091236
                </Text>
              </>
            )}
          </View>
        </View>
      </SafeAreaView>

      {/* Balance Section */}
      <View className="bg-white p-4 rounded-xl flex flex-col shadow-md mx-4 -mt-12">
        <View className="flex flex-row justify-between items-center shadow-md">
          <Text className="text-gray-700 font-bold text-lg">Total Balance</Text>
          <TouchableOpacity
            className="flex flex-row items-center"
            onPress={fetchBalance}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#16a34a" />
            ) : (
              <>
                <Text className="text-green-600 font-bold text-xl">
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
        </View>

        <View className="mt-4 flex flex-row justify-around">
          <TouchableOpacity onPress={wallet} className="items-center">
            <Fontisto name="wallet" size={24} color="#ff5e57" />
            <Text className="text-gray-600 mt-2">Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center" onPress={deposit}>
            <FontAwesome5 name="piggy-bank" size={24} color="#ffa502" />
            <Text className="text-gray-600 mt-2">Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center" onPress={withraw}>
            <MaterialIcons name="credit-card" size={24} color="#1e90ff" />
            <Text className="text-gray-600 mt-2">Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* History Section */}
      <View className="mx-4 mt-4">
        <View className="container flex flex-row justify-between gap-3">
          <TouchableOpacity
            onPress={transaction}
            className="flex-1 bg-white rounded-xl shadow-md "
          >
            <View className="container flex-row items-center gap-3 justify-center p-3">
              <FontAwesome5 name="money-bill" size={26} color="#3498db" />
              <View>
                <Text className="text-sm font-bold">Bet</Text>
                <Text className="text-sm">My Bet History</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View className="flex-1 bg-white rounded-xl shadow-md ">
            <Link href="/Transaction">
              {" "}
              <View className="conatiner flex-row gap-3 justify-center items-center p-3">
                <FontAwesome5 name="exchange-alt" size={26} color="#27ae60" />
                <View>
                  <Text className="font-semibold">Transaction</Text>
                  <Text className="text-gray- text-sm">My Transaction</Text>
                </View>
              </View>
            </Link>
          </View>
        </View>

        <View className="flex flex-row justify-between my-3 gap-3">
          <TouchableOpacity
            onPress={transaction}
            className="flex-1 bg-white rounded-xl shadow-md "
          >
            <View className="container flex-row justify-center items-center gap-3 p-3">
              <FontAwesome5 name="piggy-bank" size={26} color="#e74c3c" />
              <View>
                <Text className="text-sm font-bold">Deposit</Text>
                <Text className="text-sm">My Deposit history</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={transaction}
            className="flex-1 bg-white rounded-xl shadow-md"
          >
            <View className="container flex-row justify-center items-center gap-3 p-3">
              <FontAwesome5 name="credit-card" size={20} color="#f39c12" />
              <View>
                <Text className="text-sm font-bold">Withdraw</Text>
                <Text className="text-gray-600 text-sm">
                  My Withdraw history
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section 4 */}
      <View className="bg-white mx-4 rounded-lg my-2 mb-4">
        <Link href="/Profile">
          <View className="container flex-row justify-between items-center p-3 border-b border-gray-300">
            <View className="flex-row items-center gap-2">
              <Image
                className="w-10 h-8"
                source={require("../../assets/images/promote.png")}
                resizeMode="contain"
              />
              <Text className="text-lg font-bold">My Profile</Text>
            </View>
            <View>
              <Image
                className="w-9 h-10"
                source={require("../../assets/images/next.png")}
                resizeMode="contain"
              />
            </View>
          </View>
        </Link>

        <TouchableOpacity
          onPress={settings}
          className="container flex-row justify-between items-center p-3 border-b border-gray-300"
        >
          <View className="flex-row items-center gap-2">
            <Image
              className="w-10 h-8"
              source={require("../../assets/images/setting.png")}
              resizeMode="contain"
            />
            <Text className="text-lg font-bold">Settings</Text>
          </View>
          <View>
            <Image
              className="w-9 h-10"
              source={require("../../assets/images/next.png")}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <Link href="/AboutUs">
          <View className="container flex-row justify-between items-center p-3 border-b border-gray-300">
            <View className="flex-row items-center gap-2">
              <Image
                className="w-10 h-8"
                source={require("../../assets/images/agent.png")}
                resizeMode="contain"
              />
              <Text className="text-lg font-bold">About Us</Text>
            </View>
            <View>
              <Image
                className="w-9 h-10"
                source={require("../../assets/images/next.png")}
                resizeMode="contain"
              />
            </View>
          </View>
        </Link>

        <TouchableOpacity
          onPress={support}
          className="container flex-row justify-between items-center p-3 border-b border-gray-300"
        >
          <View className="flex-row items-center gap-2">
            <Image
              className="w-10 h-8"
              source={require("../../assets/images/ticket.png")}
              resizeMode="contain"
            />
            <Text className="text-lg font-bold">Support</Text>
          </View>
          <View>
            <Image
              className="w-9 h-10"
              source={require("../../assets/images/next.png")}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setPopupVisible(true)}
          className="container flex-row justify-between items-center p-3 border-b border-gray-300"
        >
          <View className="flex-row items-center gap-2">
            <Image
              className="w-10 h-8"
              source={require("../../assets/images/videos.png")}
              resizeMode="contain"
            />
            <Text className="text-lg font-bold">Guide</Text>
          </View>
          <View>
            <Image
              className="w-9 h-10"
              source={require("../../assets/images/next.png")}
              resizeMode="contain"
            />
            <GPopup
              visible={isPopupVisible}
              onClose={() => setPopupVisible(false)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDownload}
          className="container flex-row justify-between items-center p-3 border-b border-gray-300"
        >
          <View className="flex-row items-center gap-2">
            <Image
              className="w-10 h-8"
              source={require("../../assets/images/app.png")}
              resizeMode="contain"
            />
            <Text className="text-lg font-bold">App Download</Text>
          </View>
          <View>
            <Image
              className="w-9 h-10"
              source={require("../../assets/images/next.png")}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <Telegram />
      </View>

      {/* Logout Section */}
      <View className="mt-2 mb-6 mx-4">
        <TouchableOpacity className="bg-green-500 py-3 rounded-full items-center">
          <Text className="text-white text-lg font-extrabold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Account;
