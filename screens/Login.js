import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import kyo_logo from '../assets/kyo_logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';

//GoogleSignin.configure({
  //webClientId: '805047379824-kbo4fbbp24hhvgtbuihjg87h0gj543tp.apps.googleusercontent.com',
  //offlineAccess: true,
  //hostedDomain: '', // specifies a hosted domain restriction
  //forceCodeForRefreshToken: true, // to get refresh token on iOS
  //accountName: '', // specifies an account name on Android
//});
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleLogin = () => {
    // Ajouter ici la logique de connexion avec email et mot de passe
    console.log(`Connexion avec Email: ${email} Mot de passe: ${password}`);
  };
  //const signIn = async () => {
    //try {
      //await GoogleSignin.hasPlayServices();
      //const userInfo = await GoogleSignin.signIn();
      //console.log(userInfo);
    //} catch (error) {
     // console.log(error);
    //}
  //};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email@adr"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

    <View style={styles.separator}>
    <View style={styles.line} />
    <Text style={styles.text}>Or</Text>
    <View style={styles.line} />
  </View>
  <TouchableOpacity style={styles.signin} onPress={handleLogin}>
      <Icon name="google" size={20} color="#fff" />
      <Text style={styles.buttonText}>Log in with Google</Text>
    </TouchableOpacity>
  <Image source={kyo_logo} style={styles.logo} resizeMode="contain" />
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D252E',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    paddingTop :80,
    marginBottom : 70,
    color:'#fff'
  },
  inputContainer: {
    width:300,
    marginTop : 20,
    marginBottom: 50,
  },
  input: {
    width:'100%',
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 15,
    borderRadius: 15,
    textAlign:'left',
  },
  forgotPassword: {
    textAlign: 'left',
    color: '#fff',
  },
  button: {
    backgroundColor: '#B33747',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 16,
    width:300,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginTop : 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 10,
  },
  signin: {
    backgroundColor: '#1D252E',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    marginTop : 20,
    borderColor:'#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  logo: {
    width: 200,
    height: 100,
    marginTop : 70,
  },
});

export default Login;
