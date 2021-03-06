import * as React from "react";
import {TouchableOpacity,ActivityIndicator,Text,View,TextInput,StyleSheet,FlatList,Image,Alert,KeyboardAvoidingView} from "react-native";
import { Badge, Icon, Header, ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import { RFValue } from "react-native-responsive-fontsize";
import { Dropdown } from "react-native-material-dropdown";
import { FontAwesome5 } from "@expo/vector-icons";
import LottieView from "lottie-react-native"; 
var logo = require("../assets/loadingAnimation.json");

export default class AutomobilesDataScreen extends React.Component {
constructor(props){
    super(props)
    this.state = {
        item : this.props.navigation.getParam("data"),
        isLoading : true,
    }
}
render(){
    const item = this.state.item
    if(this.state.isLoading){
      return(
          <View style = {styles.container}>
              <Header
              backgroundColor={"#00adb5"}
              containerStyle={styles.header}
              >
                {
                  (item.topic.length>20)
                  ? (
                    <View>
                        <Text style= {{flex: 1,color: "#fff",fontWeight: "bold",fontStyle: "italic",fontSize: RFValue(30), alignSelf : 'center'}}>{item.topic .split('').splice(0,20).join('') + '.....'}</Text>
                    </View>
                  ) : (
                    <Text style= {{flex: 1,color: "#fff",fontWeight: "bold",fontStyle: "italic",fontSize: RFValue(30), alignSelf : 'center'}}>{item.topic}</Text>
                  )
                }
                </Header>
              <Text style = {styles.buttonText}>{item.name}</Text>
              <Text style = {styles.buttonText}>{item.matter}</Text>
              <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("Automobiles");
              }}
              >
              <Text style={styles.buttonText}>Back to Home</Text>
              <FontAwesome5 name="home" size={50} color="black" />
              </TouchableOpacity>
          </View>
      )
            }
            else { 
              return(
                <View style = {{flex:1,backgroundColor:"#fff",alignItems:'center',justifyContent : 'center'}}>
                    <LottieView
          source={logo}
          style={{
            width: "70%",
            height: "70%",
            marginLeft: RFValue(50),
            marginTop: RFValue(20)
          }}
          autoPlay
          loop
        />
                    <Text style = {{fontSize : RFValue(100)}}>Is Loading....</Text>
                </View>
            )
            }
  }
}

const styles = StyleSheet.create({
  container: {
    width:RFValue(350),
    flex: 1,
    backgroundColor: "#222831",
  },
  button: {
    backgroundColor: "#00adb5",
    borderWidth: RFValue(2),
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(20),
    borderRadius: RFValue(5),
    width : RFValue(150),
    alignSelf : 'center',
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: RFValue(20),
    fontStyle: "italic",
    alignItems: "center",
    marginLeft : RFValue(10),
  },
  inputBox: {
    backgroundColor: "#00adb5",
    borderColor: "#eeeeee",
    borderRadius: RFValue(5),
    borderWidth: RFValue(2),
    width: RFValue(300),
    height: RFValue(50),
    marginTop: RFValue(5)
  },
  header: {
    flex: 0.12,
    width: RFValue(1700),
  },
  titleStyle: {
    fontSize: RFValue(20),
    textAlign: "center"
  }
});