import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'


const TabIcon = ({focused,icon,title}:{focused:boolean,icon:any,title:string})=>(
    <View className='flex-1 mt-2 flex flex-col items-center'>
        <Image source={icon} tintColor = {focused? '#0061ff' : '#666876'} resizeMode='contain' className='size-6'/>
        <Text className={`${focused? 'text-primary font-rubik-medium' : 'text-black-200 font-rubik'} text-xs w-full text-center mt-1`}>
            {title}
        </Text>
    </View>
)


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: 'black',
            position: 'absolute',
            borderTopColor: 'black',
            borderTopWidth: 1,
            minHeight: 70,
        }
    }}>
        <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <TabIcon focused={focused} icon={icons.home} title='Home'/>
                )
            }}
        />

        <Tabs.Screen
            name='wallet'
            options={{
                title: 'Wallet',
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <TabIcon focused={focused} icon={icons.wallet} title='Wallet'/>
                )
            }}
        />

        <Tabs.Screen
            name='aiva'
            options={{
                title: 'AIVA',
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <TabIcon focused={focused} icon={icons.chat} title='AIVA'/>
                )
            }}
        />

        <Tabs.Screen
            name='goals'
            options={{
                title: 'Goals',
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <TabIcon focused={focused} icon={icons.star} title='Goals'/>
                )
            }}
        />

        <Tabs.Screen
            name='reports'
            options={{
                title: 'Reports',
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <TabIcon focused={focused} icon={icons.calendar} title='Reports'/>
                )
            }}
        />

        
    </Tabs>
  )
}

export default TabsLayout