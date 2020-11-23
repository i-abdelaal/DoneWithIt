import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/ibrahim.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/ibrahim.jpg")
    }
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }


    return (
        <Screen>
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => {}}
                renderRightActions={() => <ListItemDeleteAction 
                    onPress={() => handleDelete(item)} />}
            />}
            ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    
    );
}

const styles = StyleSheet.create({
   
})

export default MessagesScreen;