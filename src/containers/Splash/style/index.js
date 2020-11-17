import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors} from 'utils/Theme';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.fullFlex,
    ...ApplicationStyles.justifyAlignCenter,
  },
  title: {
    fontSize: 15,
    color: Colors.gray,
  },
});
