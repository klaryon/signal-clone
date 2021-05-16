import React, { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, ScrollView, SafeAreaView, View } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import CustomListItem from '../components/CustomListitem'
import { auth,db } from "../firebase";

const HomeScreen = ({ navigation }) =>
{
    useLayoutEffect(() =>
    {
        navigation.setOptions({
            title: 'Signal',
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                    </TouchableOpacity>
                </View>
            )
        });
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
