import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// or any pure javascript modules available in npm
function ScreenOne({ navigation }) {
  return (
    <View style={styles.Screen1}>
      <View style={styles.frameHeader}>
        <View style={styles.iconView}>
          <Text style={styles.Screen1Text}>Log in</Text>
        </View>

        <View>
          <Image
            style={styles.loginIcon}
            source={require('./assets/loginArrow.png')}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Hi Welcome! enter in your account and order your favourite food
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.detailsText}>Enter email details below</Text>
      </View>
      <View>
        <TextInput placeholder={'Email Address'} style={styles.emailInput} />
      </View>
      <View>
        <TextInput placeholder={'Password'} style={styles.emailInput} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => navigation.navigate('ScreenTwo')}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 15,
              padding: 10,
            }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.PasswordText}>
        <TouchableOpacity>
          <Text>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.homeBtn}>
     
        <TouchableOpacity>
        <Image
            style={styles.loginIcon}
            source={require('./assets/home.png')}
          />
        </TouchableOpacity>
         
         <TouchableOpacity>
          <Image
              style={styles.loginIcon}
              source={require('./assets/search.png')}
            />
         </TouchableOpacity>
          <TouchableOpacity>
               <Image
                style={styles.loginIcon}
                source={require('./assets/plus.png')}
              />
          </TouchableOpacity>
         <TouchableOpacity>
            <Image
            style={styles.loginIcon}
            source={require('./assets/settings.png')}
          />
      
         </TouchableOpacity>
              
      
      </View>
    </View>
  );
}

function ScreenTwo({ navigation }) {
  return (

      <View style={styles.Screen2}>
        <Text style={{fontSize:25,alignSelf:'center'}}>SIGN UP</Text>

    <View>
        <TextInput placeholder={'Password'} style={styles.emailInput} />
      </View>
      <View>
        <TextInput placeholder={'ConfirmPassword'} style={styles.emailInput} />
      </View>
      
      <View>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('ScreenThree')}>
          <Text style={{fontSize:20,marginLeft:65}}>LOG IN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.homeBtn}>
     
        <TouchableOpacity>
        <Image
            style={styles.loginIcon}
            source={require('./assets/home.png')}
          />
        </TouchableOpacity>
         
         <TouchableOpacity>
          <Image
              style={styles.loginIcon}
              source={require('./assets/search.png')}
            />
         </TouchableOpacity>
          <TouchableOpacity>
               <Image
                style={styles.loginIcon}
                source={require('./assets/plus.png')}
              />
          </TouchableOpacity>
         <TouchableOpacity>
            <Image
            style={styles.loginIcon}
            source={require('./assets/settings.png')}
          />
      
         </TouchableOpacity>
      </View>
    </View>
  );
}

function ScreenThree({ navigation }) {
 
  return (
    <View style={styles.Screen3}>
      <Text style={{fontSize:35,color:'green'}}>Food that meets your needs</Text>

      <View>
      <TextInput style={styles.input} placeholder="MENU -" />
      <TextInput style={styles.input} placeholder="ORDER :" />
        <TextInput placeholder={'Search for food'} style={styles.emailInput} />
      </View>

      <Image
        style={{
          fontSize:50,
          borderColor: "red",
          borderWidth: 5,
          height: 80,
          width: 120
        }}
        source={require("./assets/burgerjpg.jpg")}
      />
      <Text>Cost Price| R120</Text>

<Image
        style={{
          fontSize:50,
          borderColor:"red",
          borderWidth: 5,
          height: 80,
          width: 120
        }}
        source={require("./assets/pizza.jpg")}
      />
     <Text>Cost Price| R185</Text>

<Image
        style={{
          fontSize:50,
          borderColor: "red",
          borderWidth: 5,
          height: 80,
          width: 120
        }}
        source={require("./assets/pasta.jpg")}
      />
      <Text>Cost Price| R160</Text>

<Image
        style={{
          fontSize:50,
          borderColor: "red",
          borderWidth: 5,
          height: 80,
          width: 120
        }}
        source={require("./assets/ribs.jpg")}
      />
      <Text>Cost Price| R245</Text>
      
      <View>
        <TouchableOpacity
          style={styles.btn3}
          onPress={() => navigation.navigate('ScreenFour')}>
          <Text style={{marginLeft:75,fontSize:15,justifyContent:'center',marginBottom:140}}>ORDER</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.homeBtn}>
         
         <TouchableOpacity>
          <Image
              style={styles.loginIcon}
              source={require('./assets/search.png')}
            />
         </TouchableOpacity>
          <TouchableOpacity>
               <Image
                style={styles.loginIcon}
                source={require('./assets/plus.png')}
              />
          </TouchableOpacity>
         <TouchableOpacity>
            <Image
            style={styles.loginIcon}
            source={require('./assets/settings.png')}
          />
         </TouchableOpacity>
              
      </View>

    </View>
  );
}

function ScreenFour() {
  return (
    <View style={styles.Screen4}>

      <Text>Delivery Options</Text>

      <Image
        style={{
          borderColor: "red",
          borderWidth: 5,
          height: 100,
          width: 200
        }}
        source={require("./assets/m1.jpg")}
      />
      <Text>GPS-Location</Text>

      <TextInput style={styles.input} placeholder="ORDER RECEIVED" />
      <TextInput style={styles.input} placeholder="NUMBER : 122" />

      <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('ScreenFour')}>
          <Text style={{marginLeft:60}}>CHECKOUT</Text>
        </TouchableOpacity>

    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne">
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
        <Stack.Screen name="ScreenFour" component={ScreenFour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Screen1: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  Screen1Text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 26,
    marginTop: 78,
  },
  iconView: {},
  loginIcon: {
    width: 35,
    height: 35,
    padding:20,
    borderRadius:50,
    marginTop: -60,
    marginLeft: 40,
    
  },
  frameHeader: {
    backgroundColor: '#F3CC42',
    height: 297,
    width: '100%',
    alignSelf: 'center',
  },
  detailsText: {
    marginTop: 20,
  },
  emailInput: {
    width: 320,
    height: 52,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 14,
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
    marginTop: 20,
  },
  homeBtn:{
   flexDirection:'row',
    marginTop:110,
  },
  Screen2: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },

  Screen3: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F3CC42',
    display:'flex',
  },
  Screen3Text: {
    color: 'white',

  },
  Screen4: {
    height: '100%',
    width: '100%',
    backgroundColor: 'pink',
    alignSelf:'center'
  },
  btn1: {
    width: 190,
    height: 50,
    borderRadius: 30,
    padding: 5,
    margin: 15,
    marginTop:20,
    alignSelf: 'center',
    backgroundColor: '#F3CC42',
  },
  btn2: {
    backgroundColor: '#F3CC42',
    borderRadius: 30,
    width: 220,
    height: 50,
    padding: 12,
    margin: 15,
    alignSelf: 'center',
  },
  btn3:{
    backgroundColor: 'green',
    borderRadius: 30,
    width: 220,
    height: 50,
    padding: 12,
    margin: 15,
    alignSelf: 'center',
  },

  PasswordText:{
        marginLeft:200,
        marginTop:10
  },
});
