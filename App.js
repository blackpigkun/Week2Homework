import React from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, Image, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.headerButtonWrapper}>

                <TouchableOpacity style={styles.btnBackButton}>
                    <Icon name="chevron-left" size={24} color={HEADER_TEXT} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFilterButton}>
                    <Icon name="th-large" size={24} color={HEADER_TEXT} />
                   
                </TouchableOpacity>

            </View>
            <View style={styles.headerWrapper}>
                <View style={styles.avatarWrapper}>
                    <Image style={styles.avatar}
                    source={require('./assets/avatar.jpg')}
                    />
                </View>
                <View style={styles.userNameWrapper}>
                    <Text style={styles.userName}>Cá Mập Heo</Text>
                    <Text style={styles.userJob}>Student</Text>
                    <View style={styles.btnHeaderWrapper}>
                        <TouchableOpacity style={styles.btnFollow} onPress={() => {
                            Alert.alert('Followed');
                        }}>
                            <Text style={styles.btnFollowText}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSend} onPress={() => {
                            Alert.alert('Message sended!');
                        }}>
                            <Icon name="send" size={24} style={styles.btnFollowText} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.likeWrapper}>
                <View style={styles.likeWrapperColumn}>
                    <Text style={styles.likeWrapperColumnTextHead}>210</Text>
                    <Text style={styles.likeWrapperColumnTextContent}>Photo</Text>
                </View>
                <View style={styles.likeWrapperColumn}>
                    <Text style={styles.likeWrapperColumnTextHead}>150k</Text>
                    <Text style={styles.likeWrapperColumnTextContent}>Followers</Text>
                </View>
                <View style={styles.likeWrapperColumn}>
                    <Text style={styles.likeWrapperColumnTextHead}>0</Text>
                    <Text style={styles.likeWrapperColumnTextContent}>Following</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.imgWrapper}>
                <View style={styles.imgWrapperColumnLeft}>
                {imgData.slice(centerImgData).map(item => {
                    return <TouchableOpacity><Image source={item.imgSource} style={styles.image}/></TouchableOpacity>
                        
                    })}
                </View>
                <View style={styles.imgWrapperColumnRight}>
                {imgData.slice(0, centerImgData).map(item => {
                    return <TouchableOpacity><Image source={item.imgSource} style={styles.image}/></TouchableOpacity>
                    })}
                </View>
            </ScrollView>
            <View style={styles.bottomTab}>
                <TouchableOpacity style={styles.bottomTabColumnLeft}>
                    <Icon name="download" size={30} style={styles.bottomTabIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTabColumnCenter}>
                    <Icon name="plus-circle" size={30} style={styles.bottomTabIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTabColumnRight}>
                    <Icon name="user" size={30} style={styles.bottomTabIcon} />
                </TouchableOpacity>
                
                
                
            </View>
       </View>
  );
}
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const HEADER_TEXT = '#d6d6c2';
const CONTENT_TEXT = '#d6d6c2';
const imgData = [
    { id: 1, imgSource: require('./assets/1.jpg') },
    { id: 2, imgSource: require('./assets/2.jpg') },
    { id: 3, imgSource: require('./assets/3.jpg') },
    { id: 4, imgSource: require('./assets/4.jpg') },
    { id: 5, imgSource: require('./assets/5.jpg') },
    { id: 6, imgSource: require('./assets/6.jpg') },
    { id: 7, imgSource: require('./assets/7.jpg') },
];
const centerImgData = Math.floor(imgData.length / 2);
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#262626',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
        marginTop: 10,
        borderRadius:10,
    },
    headerWrapper: {
        flex: 0.25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bottomTab: {
        flex: 0.13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bottomTabColumnLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-end',
     
    },
    bottomTabColumnCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
    },
    bottomTabColumnRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
     
    },
    bottomTabIcon: {
        color: HEADER_TEXT,
     
    },
    headerButtonWrapper: {
        marginTop:35,
        flex: 0.1,
        flexDirection: 'row',
        justifyContent:'center',
    },
    btnBackButton: {
        flex: 1,
        marginLeft:15,
        flexDirection:'row',
    },
    btnFilterButton: {
        flex: 1,
        marginLeft:15,
        flexDirection: 'row-reverse',
    },
    likeWrapper: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:15,
        justifyContent: 'space-around',
    },
    likeWrapperColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    likeWrapperColumnTextHead: {
        fontSize: 26,
        fontWeight: 'bold',
        color: HEADER_TEXT,
    },
    likeWrapperColumnTextContent: {
        fontSize: 15,
        color: CONTENT_TEXT,
    },
    imgWrapper: {
        flex: 10,
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    
    imgWrapperColumnLeft: {
        marginLeft:10,
        flex:1, 
        flexWrap:'nowrap',
        flexDirection: 'column',
    },
    imgWrapperColumnRight: {
        marginRight:10,
        
        flexWrap:'nowrap',
        flex:1,
        flexDirection: 'column',
    },

    avatarWrapper: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
    },
    avatar: {
        height:80,
        width:80,
        borderRadius:40,
    },
    userNameWrapper: {  
        flex:1,
        flexDirection: 'column',
    },
    userName: {
        color: '#d6d6c2',
        fontSize: 20,
        fontWeight: 'bold',
    },
    userJob: {
        color: '#d6d6c2',
        fontSize: 15,
        marginTop:5,
    },
    btnHeaderWrapper: {
        marginTop: 10,
        flexDirection: 'row'
    },
    
    btnFollow:{
        height: 28,
        width:80,
        backgroundColor: FOLLOW_COLOR,
        shadowColor: HEADER_TEXT, // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        borderRadius: 50,
        justifyContent:'center'
    },
    btnFollowText: {
        color: 'white',
        alignSelf: 'center',
        fontSize:15,
    },
    btnSend: {
        height: 28,
        width:35,
        marginLeft: 10,
        backgroundColor: FOLLOW_COLOR,
        shadowColor: HEADER_TEXT, // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        borderRadius: 50,
        backgroundColor: SEND_MESSAGE_COLOR,
        justifyContent:'center',
    },

    btnSendText: {
        color: 'white',
        alignSelf: 'center',
    },
});
