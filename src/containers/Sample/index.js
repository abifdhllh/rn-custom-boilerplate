import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

// Component
import {SafeAreaView, Text} from 'react-native';

// Styles
import styles from './style';

// Action & Selector
import SampleActions, {SampleSelectors} from 'shared-state/reducers/sample';

const SampleNews = ({
  // Action
  doGetSampleNews,

  // Selector
  sampleNews,
  loading,

  // Navigation Props
  navigation,
}) => {
  const [sampleState, setSampleState] = useState(''); // Show Modal Sort State

  // Get the Transaction List via API call
  useEffect(() => {
    doGetSampleNews({
      keyword: 'Stocks',
    });
  }, [sampleState]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is a Sample News App</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  sampleNews: SampleSelectors.getSampleNews(state),
  loading: SampleSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  doGetSampleNews: (e) => dispatch(SampleActions.getSampleNewsRequest(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleNews);
