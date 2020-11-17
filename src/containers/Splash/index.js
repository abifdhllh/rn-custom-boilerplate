// Main Lib
import React, {useEffect} from 'react';

// Component
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

// Style
import {Colors, Metrics} from 'utils/Theme';
import styles from './style';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SampleNews');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Icon size={Metrics.xl} color={Colors.gray} name="direction" />
      <Text>Sample App</Text>
    </View>
  );
};

export default Splash;
