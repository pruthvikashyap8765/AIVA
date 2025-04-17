import images from "@/constants/images";
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity,Image } from "react-native";

export default function Wallet() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView className="mb-20">
        <View className="px-5">
          <Text className="font-rubik text-white text-left text-3xl mt-8 ">Wallet</Text>
        </View>


        <View className="w-full rounded-3xl bg-[#222222] mt-10">
            <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">

                <View className="flex-row items-center justify-between">
                  <Text className="text-white font-rubik text-2xl">
                    Current Balance
                  </Text>

                  <Text className="text-white font-rubik text-2xl">
                    {">"}
                  </Text>
                </View>

                <View className="flex-row items-left ">
                  <Text className="text-green-500 font-rubik text-5xl mt-3">$1000 </Text>
                </View>
                
                <View className="items-center justify-between">
                  <Image source={images.piechart} className= " w-20 h-20" />

                </View>
          
                <View className="flex-row items-center justify-evenly flex-wrap gap-4">
                    <Text className="text-white text-lg font-rubik">
                      Total Income
                    </Text>

                    <Text className="text-white text-lg font-rubik">
                      Total Income
                    </Text>
                    <Text className="text-white text-lg font-rubik">
                      Total Income
                    </Text>
                    <Text className="text-white text-lg font-rubik">
                      Total Income
                    </Text>

                </View>

            </TouchableOpacity>
          </View>


        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Timeline
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Savings
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Debt
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Investments
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Cash Flow
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-full rounded-3xl bg-[#222222] mt-10">
          <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">
            <View className="flex-col items-center justify-between">
              <Text className="text-white font-rubik text-2xl">
                Transactions
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        
      </ScrollView>

    </SafeAreaView>
  );
}
