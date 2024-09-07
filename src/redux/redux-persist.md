### store.js 
```
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	persistReducer, persistStore, FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import counterReducer from "./slices/counterSlice";
import employeeReducer from "./slices/employeeSlice";
import rootSaga from "./saga";

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['counter', 'employee'],
};

const rootReducer = combineReducers({
	counter: counterReducer,
	employee: employeeReducer
});

const persitedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: persitedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(sagaMiddleware),
	devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export { store, persistor };
```

### app.js
```
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import {persistor, store} from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App(): React.ReactElement {
  const isUserLoggedIn = true;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <NavigationContainer>
        {/* your navigator code */}
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default App;
```