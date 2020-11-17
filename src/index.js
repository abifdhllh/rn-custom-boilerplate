import React from 'react';
import {StatusBar} from 'react-native';

// Navigation
import AppNavigation from 'navigations';

// Redux
import {Provider} from 'react-redux';
import {store, persistor} from 'shared-state/store';
import {PersistGate} from 'redux-persist/integration/react';

// Style
import {Colors} from 'utils/Theme';

const App: () => React$Node = () => {
  // To see all the requests in the chrome Dev tools in the network tab.
  XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;

  // fetch logger
  global._fetch = fetch;
  global.fetch = function (uri, options, ...args) {
    return global._fetch(uri, options, ...args).then((response) => {
      console.log('Fetch', {request: {uri, options, ...args}, response});
      return response;
    });
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.orange} />
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
