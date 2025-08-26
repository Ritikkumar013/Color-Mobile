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

    </Stack>
  );
};

export default _layout;
