import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function Goals() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView className="mb-20">
        <View className="px-5">
          <View className="w-full flex flex-row justify-between items-center border-b border-b-[#9f9fa1] pb-5 rounded-3xl">
            <Text className="font-rubik text-white text-left text-3xl mt-8 ">
              Goals
            </Text>
            <View className="rounded-full bg-[#222222] p-2 w-20 h-20 text-center justify-center mt-5">
              <TouchableOpacity >
                <Text className="text-white font-rubik text-2xl text-center">+</Text>
              </TouchableOpacity>
            </View>
            
          </View>       

          <View className="w-full rounded-3xl bg-[#222222] mt-10">
            <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
              <View className="flex-col items-center justify-between">
                <Text className="text-white font-rubik text-2xl">
                  Goal 1
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="w-full rounded-3xl bg-[#222222] mt-10">
            <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
              <View className="flex-col items-center justify-between">
                <Text className="text-white font-rubik text-2xl">
                  Goal 2
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="w-full rounded-3xl bg-[#222222] mt-10">
            <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
              <View className="flex-col items-center justify-between">
                <Text className="text-white font-rubik text-2xl">
                  Goal 3
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="w-full rounded-3xl bg-[#222222] mt-10">
            <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
              <View className="flex-col items-center justify-between">
                <Text className="text-white font-rubik text-2xl">
                  Goal 4
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
          
      </ScrollView>

    </SafeAreaView>
  );
}
    