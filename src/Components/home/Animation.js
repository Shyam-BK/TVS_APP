import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Import the local GIF
import locGif from './loc.gif'; // Adjust the path if the GIF is in a different folder

const Animation = () => {
  return (
    <View style={styles.container}>
      <Image
        source={locGif} // Use the imported GIF
        style={styles.image}
        resizeMode="contain" // Ensures the GIF scales without cropping
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: 150,
  },
  image: {
    width: 300, // Width of the GIF
    height: 300, // Height of the GIF
  },
});

export default Animation;
