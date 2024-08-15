import { Image, Text, View, ImageSourcePropType } from 'react-native';
import { Tabs } from 'expo-router'; // Asegúrate de que este import sea correcto
import React from 'react';
import { icons } from '../../constants';


const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className= "items-center justify-center gap-2">
    <Image
    source={icon}
    resizeMode="contain"
    tintColor={color}
    className="w-6 h-6"
    />

<Text className={`${focused ? 'font-psemibold':
  'font-pregular'}text-xs`} style={{color: color}}>
      {name}
    </Text>
  </View>
) 
}

/* Como esta en el video
 <View className= "items-center justify-center gap-2">
      <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
      />

  <Text className={`${focused ? 'font-psemibold':
    'font-pregular'}text-xs`} style={{color: color}}>
        {name}
      </Text>
    </View>
  ) 




  <View className='items-center justify-center gap-2'>
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color }}>
        {name}
      </Text>
    </View>





  interface TabIconProps {
  icon: ImageSourcePropType; // Cambia 'any' a 'ImageSourcePropType' para mayor especificidad
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image 
        source={icon}
        resizeMode='contain'
        style={{ tintColor: color, width: 24, height: 24 }} // Ajusta el tamaño si es necesario
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color }}>
        {name}
      </Text>
    </View>
  );
}
}
 */

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFB226',
        tabBarInactiveTintColor: '#E3E3E3',
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 80,
        }
      }}
    >
      <Tabs.Screen 
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen 
        name='bookmark'
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen 
        name='create'
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen 
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
