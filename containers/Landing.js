import React from 'react';
import { View, Text, Button } from 'react-native';

function newGame(navigation) {
    navigation.navigate('Game');
}

function continueGame(navigation) {
    navigation.navigate('Game');
}

const Landing = ({ navigation }) => (
    <View>
        <Text>
            
        </Text>
        <Button title='New Game'
            onPress={() => { newGame(navigation); }}

        />
        <Button title='Continue Game'
            onPress={() => { continueGame(navigation); }}
                
        />
    </View>
);

export default Landing;