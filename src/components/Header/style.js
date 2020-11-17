import {StyleSheet} from 'react-native';
import {Colors, Metrics} from 'utils/Theme';

export default StyleSheet.create({
  container: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: Metrics.small,
    backgroundColor: Colors.orange,
  },
  title: {
    fontSize: Metrics.large,
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: Metrics.xl,
    marginRight: Metrics.xs,
    color: Colors.white,
  },
});
