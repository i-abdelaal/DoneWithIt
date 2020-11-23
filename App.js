import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';


import WelcomScreen from "./app/screens/WelcomScreen";
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import colors from './app/config/colors';
import Card from "./app/components/Card";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3}
]

export default function App() {

  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker 
      selectedItem={category}
      onSelectItem={item => setCategory(item)}
      items={categories} 
      iconName="apps" 
      placeholder="Category" />
      <AppTextInput iconName="email" placeholder="Email"/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform === 'android' ? StatusBar.currentHeight : 0
  },
});
