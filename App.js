/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const STORAGE_KEY = "DEMO:KEYS";
const initData = "Hello World!";

export default class App extends Component {
    state = {
        greetings: null
    };

    componentDidMount() {
        AsyncStorage.getItem(STORAGE_KEY)
            .then(results => {
                if (results == null) {
                    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
                    return initData;
                } else {
                    return JSON.parse(results);
                }
            })
            .then(greetings => {
                this.setState({
                    greetings
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>{this.state.greetings}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
