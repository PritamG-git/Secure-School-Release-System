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
import ButtonElement from '../../components/button';
import {goBack} from '../../routes/navigationService';
import {getDistance, convertDistance} from 'geolib';
/* import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: 1,
}); */

const ReaLogo = require('../../assets/images/Realogo.png');
const ReaBanner = require('../../assets/images/ReaBanner.png');
const Parent = require('../../assets/images/Parent.png');

const Students = ({route}) => {
  //const [viewLocation, isViewLocation] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [parent, setParent] = useState<any>();

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
          Teacher Name:{' '}
          <Text style={Styles.secondaryText}>{item.staff_name}</Text>
        </Text>
        <Text style={Styles.primaryText}>
          Teacher Number:{' '}
          <Text style={Styles.secondaryText}>{item.staff_phone}</Text>
        </Text>
      </View>

      <View style={Styles.column2}>
        <ButtonElement btnTitle="Pick UP" handlePress={onPress} />
      </View>
    </View>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(
        `http://139.59.24.214/sssd-api/parents/getById/${route.params.paramKey}`,
      )
        .then((response) => response.json())
        .then((json) => {
          setData(json.student);
          setParent(json.parent);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /* useEffect(() => {
    async function getLocation() {
      let permission = await RNLocation.checkPermission({
        ios: 'whenInUse', // or 'always'
        android: {
          detail: 'coarse', // or 'fine'
        },
      });
      console.log('Permission: ' + permission);

      let location;
      if (!permission) {
        permission = await RNLocation.requestPermission({
          ios: 'whenInUse',
          android: {
            detail: 'coarse',
            rationale: {
              title: 'We need to access your location',
              message: 'We use your location to show where you are on the map',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          },
        });
        console.log(permission);
        location = await RNLocation.getLatestLocation({timeout: 100});
        //console.log(location);
        isViewLocation(location);
      } else {
        location = await RNLocation.getLatestLocation({timeout: 100});
        isViewLocation(location);
        //console.log(location);
        console.log([viewLocation.longitude, viewLocation.latitude]);
      }
      const dis = getDistance(
        {latitude: 20.234234234234233, longitude: 85.76108158611774},
        {latitude: lati, longitude: longi},
      );
      setDistance(dis / 1609);
      console.log(`Distance is ${dis / 1609} Miles`);
    }
    getLocation();
  }, [viewLocation, distance]);

  const longi = viewLocation.longitude;
  const lati = viewLocation.latitude; */

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => {
          if (item.parent_latitude == null && item.parent_longitude == null) {
            Alert.alert(
              'Pick up request failed.',
              'Unable to retrive your location. Please enable GPS.',
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
          } else {
            const dis = getDistance(
              {
                latitude: item.school_latitude,
                longitude: item.school_longitude,
              },
              {
                latitude: item.parent_latitude,
                longitude: item.parent_longitude,
              },
            );
            console.log(dis);
            const distance = convertDistance(dis, 'mi'); //Converting meters to miles
            if (distance <= 1) {
              console.log('success');

              const requestPickup = {
                method: 'PUT',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  student_id: item.student_uniqueId,
                  pickup: 1,
                }),
              };

              fetch(
                `http://139.59.24.214/sssd-api/students/pickUp`,
                requestPickup,
              )
                .then((response) => response.json())
                .then(() => {
                  Alert.alert(
                    'Success',
                    'Your Pick Up request is accepted.',
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
                })
                .catch((error) => console.error(error));
            } else {
              console.log('Failed');
              Alert.alert(
                'Pick up request failed',
                `You are ${distance.toFixed(
                  2,
                )} miles far, Try moving closer to school.`,
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
          }
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
          <Text style={Styles.welcomeTextParent}>
            Welcome {parent.parent_name}
          </Text>
          <Image source={Parent} style={Styles.img} />
          <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.student_id}
            />
          </View>
          <Text style={Styles.footernav} onPress={() => goBack()}>
            SIGN OUT
          </Text>
        </SafeAreaView>
      )}
    </ScrollView>
  );
};

export default Students;
