import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function Reports() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView className="mb-20">
        <View className="px-5">
          <Text className="font-rubik text-white text-left text-3xl mt-8 ">Report</Text>
        </View>


        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Reports trends
              </Text>
            </View>
          </TouchableOpacity>
        </View>


        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Daily reports
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Weekly reports
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Monthly reports
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Yearly reports
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        
      </ScrollView>

    </SafeAreaView>
  );
}
