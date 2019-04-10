import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { newGame, resumeGame } from '../actions';

const Landing = ({ dispatch }) => (
    <View>
        <Text>
            
        </Text>
        <Button title='New Game'
                onPress={() => { dispatch(newGame); }}

        />
        <Button title='Continue Game'
                onPress={() => { dispatch(resumeGame); }}
                
        />
    </View>
);

export default connect()(Landing);