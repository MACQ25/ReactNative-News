import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import NewsCard from './NewsCard.js';

const styles = StyleSheet.create({
    news: {
        height: 'auto',
        padding: 20,
        gap: 10,
    }
  });

function Rest(props){
    const [restReq, setRest] = useState("0");
    const [searchedBatch, setBatch] = useState(0);
    const [searchedTerm, setTerms] = useState("");
    const [newsArray, setNewsArray] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    function retrieveFromAPI(){
        var search = encodeURI(props.searchTerm)
        var number = props.batchAmount;
        console.log("you are searching", search, "and ", number);
        const url = `https://news67.p.rapidapi.com/v2/topic-search?languages=en&search=${search}&batchSize=${number}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '96215eda63mshebfe876e7a1e687p1be9cfjsn9a2c2cae2cb6',
                'X-RapidAPI-Host': 'news67.p.rapidapi.com'
            }
        };
        
        try {
            fetch(url, options)
            .then(Response => Response.json())
            .then((Response) =>{
                console.log(Response);
                setNewsArray(Response.news);
            });
          } catch (error) {
            console.error(error, "failure");
          }
          
          /*
          setNewsArray([
            {
                Categories: {label: "My Label"}, 
                Image: "imageHere",
                PublishedOn: "This is a testing date",
                Source: "This is a testing source",
                Title: "This is a testing article",
                Summary: "This is a testing summary and below is a link to a joke video",
                Url: "https://youtu.be/sdYHvL2xF_0?si=3TB3bQ4CSgkESo8Z"

            },
            ])*/ 
        setBatch(number);
        setTerms(props.searchTerm);
        setIsLoaded(true);
    }

    useEffect(retrieveFromAPI, []);

    if(props.batchAmount != searchedBatch || props.searchTerm != searchedTerm){
        retrieveFromAPI();
    }


    if(isLoaded){
        return (
            <FlatList style={styles.news} data={newsArray} renderItem={({item}) => <NewsCard entry={item}/>}/>

        )
    } else {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

}
  
export default Rest;

