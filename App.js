import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import NeswController from './src/NewsController';
import icon from './assets/newspaper-icon.png';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollStyle:{
      marginTop: 30,
      flex: 1,
      height: 'auto',
    },
    tabCont: {
      padding: 20,
      paddingTop: 40,
      backgroundColor: 'red',
      flexDirection: 'row',
      alignContent: 'center',
      verticalAlign: 'middle',
    },
    tabFont: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      paddingTop: 5,
    },
    mainPageIcon: {
      width: 50,
      height: 42,
    }
  });

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.tabCont}>
          <Text style={styles.tabFont}>Newsfinder</Text>
          <Image style={styles.mainPageIcon} source={icon}/>
        </View>
        <View style={styles.scrollStyle}>
          <NeswController/>
        </View>
       <StatusBar style="auto" />
    </SafeAreaView>
  );
}


