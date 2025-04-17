import images from "@/constants/images";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import icons from "@/constants/icons";

export default function Home() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView className="mb-20">
        
        <View className="px-5">
          <Text className="font-rubik text-white text-left text-3xl mt-8 ">Home</Text>



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
              
                <View className="flex-row items-center justify-between">
                  <Text className="text-white font-rubik text-2xl">
                    Active Goals
                  </Text>

                  <Text className="text-white font-rubik text-2xl">
                    {">"}
                  </Text>
                </View>


                <View className="flex-col">

                  <Text className="text-white font-rubik text-lg text-right mt-8">70%</Text>
                  <View className="bg-white rounded-3xl mt-2 py-3 px-2 w-full " />

                  <View className="flex-row items-center justify-between mt-2">
                    <Text className="text-white font-rubik text-lg">2 Months In</Text>
                    <Text className="text-white font-rubik text-lg">2 Months Left</Text>
                  </View>

                </View>

                <View className="flex-col">

                  <Text className="text-white font-rubik text-lg text-right mt-8">70%</Text>
                  <View className="bg-white rounded-3xl mt-2 py-3 px-2 w-full " />

                  <View className="flex-row items-center justify-between mt-2">
                    <Text className="text-white font-rubik text-lg">2 Months In</Text>
                    <Text className="text-white font-rubik text-lg">2 Months Left</Text>
                  </View>

                </View>

                <View className="flex-col">

                  <Text className="text-white font-rubik text-lg text-right mt-8">70%</Text>
                  <View className="bg-white rounded-3xl mt-2 py-3 px-2 w-full " />

                  <View className="flex-row items-center justify-between mt-2">
                    <Text className="text-white font-rubik text-lg">2 Months In</Text>
                    <Text className="text-white font-rubik text-lg">2 Months Left</Text>
                  </View>

                </View>

            </TouchableOpacity>
          </View>


          <View className="w-full rounded-3xl bg-[#222222] mt-10">
            <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">

                <View className="flex-row items-center justify-between">
                  <Text className="text-white font-rubik text-2xl">
                    AIVA Insights
                  </Text>

                  <Text className="text-white font-rubik text-2xl">
                    {">"}
                  </Text>
                </View>

                
                <View className="flex-col items-center ">
                  <View className="flex-row justify-start items-center px-3 py-4 bg-white rounded-3xl w-full mt-5">
                    <Image source={icons.bell} className="w-5 h-5" />
                    <Text className="text-black font-rubik text-md ml-6 w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut laoreet ex. Nam eget venenatis arcu. Pellentesque a malesuada dolor.
                    </Text>
                  </View>

                  <View className="flex-row justify-start items-center px-3 py-4 bg-white rounded-3xl w-full mt-5">
                    <Image source={icons.bell} className="w-5 h-5" />
                    <Text className="text-black font-rubik text-md ml-6 w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut laoreet ex. Nam eget venenatis arcu. Pellentesque a malesuada dolor.
                    </Text>
                  </View>

                  <View className="flex-row justify-start items-center px-3 py-4 bg-white rounded-3xl w-full mt-5">
                    <Image source={icons.bell} className="w-5 h-5" />
                    <Text className="text-black font-rubik text-md ml-6 w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut laoreet ex. Nam eget venenatis arcu. Pellentesque a malesuada dolor.
                    </Text>
                  </View>

                

                </View>

            </TouchableOpacity>
          </View>



          <View className="w-full rounded-3xl bg-[#222222] mt-10">
            <TouchableOpacity className="py-5 px-8 flex-1 justify-center ">

                <View className="flex-row items-center justify-between">
                  <Text className="text-white font-rubik text-2xl">
                    AIVA Insights
                  </Text>

                  <Text className="text-white font-rubik text-2xl">
                    {">"}
                  </Text>
                </View>

                
                <View className="flex-col items-center ">
                  
                

                </View>

            </TouchableOpacity>
          </View>
          
        </View>

      
      </ScrollView>

    </SafeAreaView>
  );
}
