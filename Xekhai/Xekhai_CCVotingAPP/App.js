import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/Home";
import { Fvote } from "./screens/Vote";
import { Nfinal } from "./screens/Final";


const Stacknav = createNativeStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stacknav.Navigator
            screenOptions={{
               headerShown: false,
            }}
         >
            <Stacknav.Screen name="Home" component={Home} />
            <Stacknav.Screen name="Fvote" component={Fvote} />
            <Stacknav.Screen name="Nfinal" component={Nfinal} />
         </Stacknav.Navigator>
      </NavigationContainer>
   );
}
