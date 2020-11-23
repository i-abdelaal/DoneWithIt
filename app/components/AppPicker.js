import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from './AppText';
import defaultStyles from "../config/styles";

function AppPicker({ iconName, placeholder, ...otherProps }) {
    return (
        <View style={styles.container}>
           {iconName && <MaterialCommunityIcons 
           name={iconName} 
           size={20} 
           color={defaultStyles.colors.medium} 
           style={styles.icon}
            />}
    <AppText style={styles.text}>{placeholder}</AppText>
    <MaterialCommunityIcons 
           name="chevron-down" 
           size={20} 
           color={defaultStyles.colors.medium} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        marginVertical: 10,
        padding: 15,
        width: "100%"
    },
    icon:{
        marginRight: 10
    },
    text: {
        flex: 1
    }
})

export default AppPicker;