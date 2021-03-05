import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import {Styles} from './styles';
import {goBack, navigate} from '../../routes/navigationService';
import ButtonElement from '../../components/button';
import {connect} from 'react-redux';
import {colors} from '../../theme/colors';
import styles from '../../components/passwordField/styles';

const ReaLogo = require('../../assets/images/Realogo.png');
const ReaBanner = require('../../assets/images/ReaBanner.png');
const Teacher = require('../../assets/images/teacher.png');

const Staff = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const Item = ({item, onPress}) => (
    <View style={Styles.customcontainer}>
      <View style={Styles.column}>
        <Text style={Styles.primaryText}>
          Student ID:{' '}
          <Text style={Styles.secondaryText}>{item.student_uniqueId}</Text>
        </Text>
        <Text style={Styles.primaryText}>
          Student Name:{' '}
          <Text style={Styles.secondaryText}>{item.student_name}</Text>
        </Text>
        <Text style={Styles.primaryText}>
          Grade: <Text style={Styles.secondaryText}>{item.grade_name}</Text>
        </Text>
        <Text style={Styles.primaryText}>
          Parent Name:{' '}
          <Text style={Styles.secondaryText}>{item.parent_name}</Text>
        </Text>
        <Text style={Styles.primaryText}>
          Teacher Name:{' '}
          <Text style={Styles.secondaryText}>{item.staff_name}</Text>
        </Text>
      </View>

      <View style={Styles.column2}>
        <ButtonElement btnTitle="Release" handlePress={onPress} />
      </View>
    </View>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://139.59.24.214/sssd-api/staff/getStudent')
        .then((response) => response.json())
        .then((json) => setData(json.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => {
          console.log('Release ' + item.student_uniqueId);
          const Released = {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              student_id: item.student_uniqueId,
              pickup: 0,
            }),
          };

          fetch(`http://139.59.24.214/sssd-api/students/pickUp`, Released)
            .then((response) => response.json())
            .then(() => {
              Alert.alert(
                'Released',
                `Student: ${item.student_name} from Grade: ${item.grade_name} released successfully.`,
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
            });
        }}
      />
    );
  };
  return (
    <ScrollView style={Styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView>
          <View style={Styles.header}>
            <Image source={ReaLogo} />
            <Image source={ReaBanner} />
          </View>
          <View style={Styles.welcome}>
            <Text style={Styles.welcomeTextPrimary}>
              Secure School Release System
            </Text>
            <Text style={Styles.welcomeTextSecondary}>
              Welcome to Teacher Application
            </Text>
            <Image source={Teacher} style={Styles.img} />
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.student_uniqueId}
            />
          </View>
        </SafeAreaView>
      )}
    </ScrollView>
  );
};

export default Staff;
