import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from '@react-native-firebase/messaging';
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export async function requestUserPermission (){
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if(enabled){
        getFCMToken();
    }
}

const getFCMToken = async () =>{

    let fmctoken = await AsyncStorage.getItem("fcmtoken");

    if(!fmctoken){
        try {
            fmctoken = await messaging().getToken();
            await AsyncStorage.setItem("fcmtoken", fmctoken);
        } catch (error) {
            console.error(error, "Error to compile");
        }
    }
    const data = {
        token: fmctoken
    }

    const url = "http://212.87.215.220:8080/tokens";
    const config = {
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Basic Y2tfZGQyZDlkYjY3NzJhZjAzMzVlYjA5Njc2YmY0N2U5NDgwZDkxOWNlMTpjc19hZWYyYzk4ZWI0ZGQ3YmY5NTcxNmJlYTMwNWZjOTI1MzdkNWMxNmQx"
        }
    }
    const request = await axios.post(url, data, config);
}

export const NotificationListener = (navigation)=> {
   
    messaging().onNotificationOpenedApp(remoteMessage => {
        navigation.navigate(remoteMessage.data.nav, { 
            uri: remoteMessage.data.uri
        });
    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
            navigation.navigate(remoteMessage.data.nav, { 
                uri: remoteMessage.data.uri
            });
          //navigation.navigate(remoteMessage.data.nav);
          //setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        //setLoading(false);
    });
    messaging().onMessage(async remoteMessage =>{
    })
}