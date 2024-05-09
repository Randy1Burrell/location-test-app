import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundGeolocation  from 'react-native-background-geolocation'

export default function App() {
  useEffect(() => {
    BackgroundGeolocation.ready({
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 10,
      stopOnTerminate: false,
      startOnBoot: true,
      debug: true,
      url: 'https://localhost:3000',
      params: {
        user_id: 123,
      },
      headers: {
        'my-auth-token': 'secret-key',
      },
    }).then((state) => {
      console.log(`${state} ready`);
      BackgroundGeolocation.start();
    });
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
