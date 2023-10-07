import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [username, password]);

  const validateForm = () => {
    let errors = {};

    if (!username) {
      errors.username = 'Username is required.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      console.log('Form submitted successfully!');
      navigation.navigate('Home');
      // Add your navigation logic or further actions here
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LottieView
            source={require('../assets/lottie/login_lottie.json')}
            autoPlay
            loop
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
            }}>
            Welcome to The Office
          </Text>

          <InputField
            label={'Username'}
            icon={
              <MaterialIcons
                name="person"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            keyboardType="default"
            value={username}
            onChangeText={text => setUsername(text)}
            error={errors.username}
          />

          <InputField
            label={'Password'}
            icon={
              <MaterialIcons
                name="lock"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            inputType="password"
            value={password}
            onChangeText={text => setPassword(text)}
            error={errors.password}
          />

          <CustomButton
            label={'Login'}
            onPress={handleSubmit}
            isValid={isFormValid}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
