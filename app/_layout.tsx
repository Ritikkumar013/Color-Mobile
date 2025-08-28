import * as React from "react";
import { Stack } from "expo-router";
import HeaderSignUp from "@/Components/commonComponents/HeaderSignUp";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="Profile"
        options={{
          headerTintColor: "white",
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#4CAF50" },
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          
          headerShown: false,
          headerTintColor: "white",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#4CAF50" },
         
        }}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerShown:false,
          headerTintColor: "white",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#4CAF50" },
        }}
      />
      <Stack.Screen name="AboutUs" />
      <Stack.Screen name="Privacy" />
      <Stack.Screen name="Transaction" />
      <Stack.Screen name="ChangePassword" />
      <Stack.Screen name="Support" />
      <Stack.Screen name="AddMoney" options={{headerShown:false}}/>
      <Stack.Screen name="WithdrawMoney" options={{headerShown:false}}/>
      <Stack.Screen name="Otp" options={{headerShown:true}}/>
      <Stack.Screen name="ForgotPassword" options={{headerShown:false}}/>
      <Stack.Screen name="UpdatePass" options={{headerShown:false}}/>
<Stack.Screen name="Game1" options={{headerShown:false}}/>
    </Stack>
  );
};

export default _layout;



// import * as React from "react";
// import { Stack } from "expo-router";
// import { View, Image, Text, ActivityIndicator } from "react-native";
// import * as SplashScreen from "expo-splash-screen";
// import HeaderSignUp from "@/Components/commonComponents/HeaderSignUp";

// // Prevent default splash and immediately hide it
// SplashScreen.preventAutoHideAsync();

// const _layout = () => {
//   const [isLoading, setIsLoading] = React.useState(true);

//   React.useEffect(() => {
//     // Immediately hide the default splash and show custom splash
//     const initializeApp = async () => {
//       try {
//         // Hide the default expo splash screen immediately
//         await SplashScreen.hideAsync();
        
//         // Show custom splash for 3 seconds (adjust as needed)
//         setTimeout(() => {
//           setIsLoading(false);
//         }, 3000);
//       } catch (error) {
//         console.warn("Error during app initialization:", error);
//         setIsLoading(false);
//       }
//     };

//     // Hide default splash immediately on mount
//     initializeApp();
//   }, []);

//   // Show custom splash screen while loading
//   if (isLoading) {
//     return (
//       <View className="flex-1 bg-green-500 justify-center items-center">
//         {/* Your App Logo */}
//         <Image
//           source={require("../assets/images/gameHome.png")} // Use your existing game icon or create a new logo
//           className="w-32 h-32 mb-6"
//           resizeMode="contain"
//         />
        
//         {/* App Name */}
//         <Text className="text-white text-3xl font-bold mb-2">
//           Game App
//         </Text>
        
//         {/* Optional tagline */}
//         <Text className="text-white text-lg opacity-80 mb-8">
//           Ready to play and win!
//         </Text>
        
//         {/* Loading indicator */}
//         <ActivityIndicator size="large" color="white" />
//         <Text className="text-white text-sm mt-4 opacity-70">
//           Loading...
//         </Text>
//       </View>
//     );
//   }

//   // Your existing stack navigation
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       <Stack.Screen
//         name="Profile"
//         options={{
//           headerTintColor: "white",
//           headerShadowVisible: false,
//           headerTitleAlign: "center",
//           headerStyle: { backgroundColor: "#4CAF50" },
//         }}
//       />
//       <Stack.Screen
//         name="Login"
//         options={{
//           headerShown: false,
//           headerTintColor: "white",
//           headerShadowVisible: false,
//           headerStyle: { backgroundColor: "#4CAF50" },
//         }}
//       />
//       <Stack.Screen
//         name="Register"
//         options={{
//           headerShown: false,
//           headerTintColor: "white",
//           headerShadowVisible: false,
//           headerStyle: { backgroundColor: "#4CAF50" },
//         }}
//       />
//       <Stack.Screen name="AboutUs" />
//       <Stack.Screen name="Privacy" />
//       <Stack.Screen name="Transaction" />
//       <Stack.Screen name="ChangePassword" />
//       <Stack.Screen name="Support" />
//       <Stack.Screen name="AddMoney" options={{ headerShown: false }} />
//       <Stack.Screen name="WithdrawMoney" options={{ headerShown: false }} />
//       <Stack.Screen name="Otp" options={{ headerShown: true }} />
//       <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} />
//       <Stack.Screen name="UpdatePass" options={{ headerShown: false }} />
//       <Stack.Screen name="Game1" options={{ headerShown: false }} />
//     </Stack>
//   );
// };

// export default _layout;