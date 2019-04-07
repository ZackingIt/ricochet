import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

const Landing = () => (
    <View>
        <Text>
            Landing Page
        </Text>
        <Button title='New Game' onPress={() => {}} />
    </View>
);

export default connect()(Landing);