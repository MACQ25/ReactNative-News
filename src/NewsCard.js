import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import PlaceHolder from '../assets/placeHolder.jpg'


const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sourceText: {
        fontSize: 14,
        fontStyle: "italic",
    },
    dateText: {
        fontSize: 10,
        color: "#dcdcdc",
    },
    imgFormat: {
        width: 240, 
        height: 200,
    },
    links: {
        color: 'blue',
        textDecorationLine: "underline",
    },
    cardBody:{
        flex: 1,
        width: 'auto',
        alignSelf: 'center',
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: "#f0ffff",
        padding: 12,
        marginVertical: 10,
    }
});  

function NewsCard(props){
    const [category, setCategory] = useState("0");
    const [imageUrl, setImageUrl] = useState("0");
    const [publishingDate, setPublishingDate] = useState("0");
    const [source, setSource] = useState("0");
    const [title, setTitle] = useState("0");
    const [summary, setSummary] = useState("0");
    const [articleUrl, setArticleUrl] = useState("0");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setCategory(props.entry.Categories.label);
        setImageUrl(props.entry.Image);
        console.log(props.entry.Image)
        setPublishingDate(props.entry.PublishedOn);
        setSource(props.entry.Source);
        setTitle(props.entry.Title);
        setSummary(props.entry.Summary);
        setArticleUrl(props.entry.Url);
        setIsLoaded(true);
    }, [])

    /* 
    replace PlaceHolder in img with:
    {
        uri: imageUrl
    }
    */

    if(isLoaded){
        return (
            // implemented with Text and Button as children
            <View style={styles.cardBody}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }} />
                
                <View style={{ flex: 1}}>
                    <Image style={styles.imgFormat} source={{uri: imageUrl}} />
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.sourceText}>{source}</Text>
                    <Text style={styles.dateText}>{publishingDate}</Text>
                    <Text>{summary}</Text>
                    <Text style={styles.links}
                        onPress={() => Linking.openURL(articleUrl)}>
                            Read more
                    </Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }} />
            </View>


            
        )
    } else {
        <View>
            <Text>Loading...</Text>
        </View>
    }
    
}

export default NewsCard;