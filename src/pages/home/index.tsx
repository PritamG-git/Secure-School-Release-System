import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ParentView from '../parent';
const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView accessible={false}>
        <ParentView />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
