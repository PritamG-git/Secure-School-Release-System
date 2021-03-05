import React, {useState} from 'react';
import {View, SafeAreaView, Image, Alert, Text} from 'react-native';
import {Styles} from './styles';
import {navigate} from '../../routes/navigationService';
import ButtonElement from '../../components/button';
import InputText from '../../components/inputText';
import PasswordField from '../../components/passwordField';

const ReaLogo = require('../../assets/images/Realogo.png');
const ReaBanner = require('../../assets/images/ReaBanner.png');

const Welcome = () => {
  const [value, setValue] = useState('');
  const [code, setCode] = useState('');

  const requestLogin = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_type: 'parent',
      email: value,
      password: code,
    }),
  };

  const handlepress = async () => {
    try {
      let response = await fetch(
        'http://139.59.24.214/sssd-api/auth/login',
        requestLogin,
      );
      let json = await response.json();
      return navigate('PickUpView', {
        paramKey: json.data.id,
      });
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Authentication Failed',
        "We couldn't find this phone Number. Please enter your number which is associated with student.",
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <View style={Styles.header}>
          <Image source={ReaLogo} />
          <Image source={ReaBanner} />
        </View>

        <View style={Styles.welcome}>
          <Text style={Styles.welcomeTextPrimary}>
            Welcome to Secure School Release System
          </Text>
          <Text style={Styles.welcomeTextSecondary}>
            Making your student's dismissal
          </Text>
          <Text style={Styles.welcomeTextSecondary}>safe and smart</Text>
        </View>

        <View style={Styles.content}>
          <InputText
            label="Phone Number"
            placeholderText="Enter your Phone No."
            fieldValue={value}
            changeTextHandler={setValue}
            maxLength={10}
            keyboardType="phone-pad"
          />
          <PasswordField
            label="Pass Code"
            placeholderText="Enter your Pass Code"
            fieldValue={code}
            changeTextHandler={setCode}
          />
        </View>
        <View style={Styles.Button}>
          <ButtonElement
            btnTitle="continue"
            handlePress={handlepress}
            isDisabled={value == 0 || code == 0 ? true : false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Welcome;
