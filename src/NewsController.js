import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import Rest from './Rest.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollStyle: {
    flex: 1,
    height: 'auto'
  },
  instructionTxt: {
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  inputTxt: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    paddingLeft: 10,
    padding: 5,
    borderRadius: 10,
  },
  inputLabelViews: {
    margin: 5,
    flexDirection: 'row',
    verticalAlign: 'middle',
    alignContent: 'center'
  },
  inputInstruc: {
    marginRight: 5,
    marginTop: 7,
  },
  ButtonStl: {
    margin: 5,
    backgroundColor:"#841584",
    width: 100,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
  },
  ButtonTxt:{
    alignContent: 'center',
    textAlign: 'center',
    width: 'auto',
    color: 'white',
    fontStyle: 'italic'
  }
});


function NeswController() {
  const [searchVal, setSearchVal] = useState("");
  const [query, setQueryTerm] = useState("");
  const [searchNum, setSearchNum] = useState(0);
  const [amount, setQueryAmount] = useState(0);
  const [key, setKey] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setSearchVal("Canada");
    setSearchNum(15);
    setQueryTerm("Canada");
    setQueryAmount(15);
    setKey(1);
    setIsLoaded(true);
  }, []);


  if(isLoaded){
    return (
      <View style={styles.container}>
          <View style={styles.instructionTxt}>
              <Text>Enter below your search terms and number of articles to search and they will be displayed below</Text>
          </View>
          <View>
            <View style={styles.inputLabelViews}>
              <Text style={styles.inputInstruc}>
                Keywords:
              </Text>
              <TextInput
              style={styles.inputTxt}
              onChangeText={setSearchVal}
              placeholder={"Enter your search here"}
              />
            </View>
            <View style={styles.inputLabelViews}>
              <Text style={styles.inputInstruc}>
                Amount:
              </Text>
              <TextInput
              style={styles.inputTxt}
              onChangeText={setSearchNum}
              placeholder={"Enter the amount of articles"}
              inputMode={'numeric'}
              />
            </View>

            <Pressable onPress={() => {setQueryTerm(searchVal); setQueryAmount(searchNum); setKey(key+1);}} style={styles.ButtonStl}>
              <Text style={styles.ButtonTxt}>Search</Text>
            </Pressable>              
          </View>
          <View style={{margin: 5}}>
            <Text style={{fontWeight:'bold'}}>{query} has been looked up</Text>
          </View>
          <View style={styles.scrollStyle}>
            <Rest key={key} searchTerm={query} batchAmount={amount}/>
          </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

}

export default NeswController;