import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: { display: "flex" },
      }}
    >
      <Tabs.Screen
        name="Saldo"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="wallet" size={size} color={color} />
          ),
          title: "Saldo",
        }}
      />
      <Tabs.Screen
        name="GastosMensais"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="linechart" size={size} color={color} />
          ),
          title: "Mensais",
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="GastosCreditos"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" size={size} color={color} />
          ),
          title: "Gastos Crédito",
        }}
      />
      <Tabs.Screen
        name="Perfil"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          title: "Perfil",
        }}
      />
    </Tabs>
  );
}
