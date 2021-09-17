import React, { Component } from 'react';
import { Card } from 'react-native-paper'

import Loader from "../components/Loader"


import {
    View,
    Text,
    ActivityIndicator,
    Modal,
    Animated,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';
import { LOGINURL } from '../components/LOGINURL';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: [{
                value: 'Fruit',
                label: 'Banana'
            }, {
                value: 'Vegetable',
                label: 'Tomato'
            }, {
                value: 'Fruit',
                label: 'Pear'
            }],
            value: ''


        };
        this.loginURL = LOGINURL;
    }
    componentDidMount() {
        const value = this.state.data[0].value;
        this.setState({
            value
        });
    }
    formatText = (text) => {
        return text.replace(/[^+\d]/g, '');
    };
    fieldRef = React.createRef();
    onSubmit = () => {
        let { current: field } = this.fieldRef;

        console.log(field.value());
        Alert.alert(feild.value())
    };
    render() {
        const isTrue = this.state.isLoading;
        return isTrue ? (
            <Loader />
        ) : (
            <View style={[styles.container]}>
                <ImageBackground
                    source={require('../assets/Login_bg.png')}
                    style={[styles.image]}>
                    <View style={{}}>
                        <Text style={{ fontSize: 30, marginTop: 50, alignItems: "center", alignSelf: "center", color: "white" }}>Meet Your Match</Text>
                        <Image source={require('../assets/login.gif')} style={{ width: 140, height: 140, alignSelf: "center" }} />
                    </View>
                    <View style={{ marginTop: 30, margin: 10 }}>

               
                        <Card titleStyle={[styles.container]}>
                            <View style={{ padding: 30 }}>
                              

                              
                            </View>
                            <TouchableOpacity
                                style={[styles.button, { marginBottom: 30 }]}
                                onPress={() => {
                                    this.userLogin();
                                }}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    loginBox: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#804000',
        fontSize: 20,
        margin: 10,
        padding: 10,
    },

    button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#ff0000',
        shadowColor: '#000',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10,
    },
    buttonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20,
    },
});
