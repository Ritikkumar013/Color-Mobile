import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Upload from "@/Components/Upload";
import { useRouter } from "expo-router";

const ProfileScreen = () => {

const router=useRouter();
const update=()=>{
  router.push('/ChangePassword');
}

  return (
    <View className="bg-green-50">
      {/* Header */}
      <View className="bg-[#4CAF50] min-h-72 rounded-b-full">
        {/* <Text className="text-center py-4 text-lg text-white">My Profile</Text> */}
      </View>

      {/* Profile Section */}
      <View className="bg-white mx-4 p-4 rounded-xl -mt-56">
        {/* <View className="flex items-center">
          <Image
            className="w-32 h-32 rounded-full"
            source={require("../assets/images/user.png")}
            resizeMode="cover"
          />
        </View> */}
        
        <Upload />

        {/* Nickname */}
        <View className="bg-gray-200 flex flex-row justify-between p-4 rounded-2xl mt-10 my-3">
          <Text className="font-bold">NICKNAME</Text>
          <View className="flex flex-row gap-2 items-center">
            <Text className="font-semibold underline cursor-pointer">
              Niklaus
            </Text>
            <Image
              className="w-4 h-4"
              source={require("../assets/images/edit.png")}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Email */}
        <View className="bg-gray-200 flex flex-row justify-between p-4 rounded-2xl my-3">
          <Text className="font-bold">EMAIL</Text>
          <View className="flex flex-row gap-2 items-center">
            <Text className="font-semibold underline cursor-pointer">
              ritikkumar@crobstacle.com
            </Text>
            <Image
              className="w-5 h-5"
              source={require("../assets/images/copy.png")}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* UID */}
        <View className="bg-gray-200 flex flex-row justify-between p-4 rounded-2xl my-3">
          <Text className="font-bold">UID</Text>
          <View className="flex flex-row gap-2 items-center">
            <Text className="font-semibold underline cursor-pointer">
              364789
            </Text>
            <Image
              className="w-5 h-5"
              source={require("../assets/images/copy.png")}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      {/* Security Information */}
      <View className="ml-5 my-5 border-l-4 border-r-4 border-red-500">
        <Text className="mx-4 text-lg font-bold">Security Information</Text>
      </View>

      {/* Login Password */}

      <TouchableOpacity
        onPress={update}
        className="bg-white justify-between flex-row mx-5 rounded-2xl"
      >
        <View className="flex flex-row items-center p-3 gap-3">
          <Image
            className="w-7 h-7"
            source={require("../assets/images/padlock.png")}
            resizeMode="contain"
          />
          <Text className="font-semibold text-lg">Login Password</Text>
        </View>
        <View className="flex flex-row items-center p-3 gap-3">
          <Text className="text-lg">Edit</Text>
          <Image
            className="w-7 h-7"
            source={require("../assets/images/next.png")}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      {/* Update Version */}
      <View className="bg-white flex flex-row justify-between mx-5 rounded-2xl my-4">
        <View className="flex flex-row items-center p-3 gap-3">
          <Image
            className="w-7 h-7"
            source={require("../assets/images/support.png")}
            resizeMode="contain"
          />
          <Text className="font-semibold text-lg">Update Version</Text>
        </View>
        <View className="flex flex-row items-center p-3 gap-3">
          <Text className="text-lg">2.0.6</Text>
          <Image
            className="w-7 h-7"
            source={require("../assets/images/next.png")}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
