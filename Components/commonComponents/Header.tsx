import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StatusBar as RNStatusBar } from "react-native";
export default function Header() {
  return (
    <SafeAreaView className=" flex-row justify-between bg-white px-2 py-3">
      <StatusBar style="auto" backgroundColor="#22c55e" />
                       
                       {/* Custom Status Bar Background - This creates the green background behind status bar */}
                       <View 
                         className="bg-green-500"
                         style={{ 
                           height: RNStatusBar.currentHeight,
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           right: 0,
                           zIndex: 1
                         }} 
                       />
              

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

          <Link href="/Login">
            <View className="bg-green-500 border-2 border-green-500  px-4 p-1 rounded-md">
              <Text className="text-md text-white font-extrabold">Login</Text>
            </View>
          </Link>
        </View>
        <View>
          {/* <TouchableOpacity className="border-2 border-green-500 px-4 p-1 rounded-md">
            <Text className="text-md text-green-600 font-extrabold">
              Register
            </Text>
          </TouchableOpacity> */}

          <Link href="/Register">
            <View className="border-2 border-green-500 px-4 p-1 rounded-md">
              <Text className="text-md text-green-600 font-extrabold">
                Register
              </Text>
            </View>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

// import { View, Text, Image, TouchableOpacity } from "react-native";
// import React, { useState, useEffect } from "react";
// import { Link } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { useAuth } from '../context/AuthContext'; // if using context

// export default function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Method 2: Using AsyncStorage
//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   const checkAuthStatus = async () => {
//     try {
//       // Check if user token exists in AsyncStorage
//       const token = await AsyncStorage.getItem('token');
//       // or check user data
//       const userData = await AsyncStorage.getItem('userData');

//       if (token || userData) {
//         setIsLoggedIn(true);
//       }
//     } catch (error) {
//       console.error('Error checking auth status:', error);
//     }
//   };

//   return (
//     <SafeAreaView className="flex-row justify-between bg-white px-2 py-2">
//       <View className="">
//         <Image
//           className="w-32 h-12"
//           source={require("../../assets/images/logoD.png")}
//           resizeMode="contain"
//         />
//       </View>

//       {/* Conditionally render Login/Register buttons */}
//       {!isLoggedIn && (
//         <View className="flex-row gap-3">
//           <View>
//             <Link href='/Login'>
//               <View className="bg-green-500 border-2 border-green-500 px-4 p-1 rounded-md">
//                 <Text className="text-md text-white font-extrabold">Login</Text>
//               </View>
//             </Link>
//           </View>
//           <View>
//             <Link href='/Register'>
//               <View className="border-2 border-green-500 px-4 p-1 rounded-md">
//                 <Text className="text-md text-green-600 font-extrabold">
//                   Register
//                 </Text>
//               </View>
//             </Link>
//           </View>
//         </View>
//       )}

//       {/* Optional: Show user info or logout when logged in */}
//       {isLoggedIn && (
//         <View className="flex-row gap-3 items-center">
//           <Text className="text-gray-700">Welcome!</Text>
//           <TouchableOpacity
//             className="border-2 border-red-500 px-4 p-1 rounded-md"
//             onPress={handleLogout}
//           >
//             <Text className="text-md text-red-600 font-extrabold">Logout</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );

//   // Logout function
//   async function handleLogout() {
//     try {
//       await AsyncStorage.removeItem('userToken');
//       await AsyncStorage.removeItem('userData');
//       setIsLoggedIn(false);
//       // Navigate to home or login screen if needed
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   }
// }
