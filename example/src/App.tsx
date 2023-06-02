import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Svg24Hours } from 'react-native-tabler-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Svg24Hours
        style={{ backgroundColor: 'red' }}
        width={150}
        height={150}
        color="blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
