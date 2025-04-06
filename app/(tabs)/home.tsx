import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 20 }).map((_, index) => (
        <View
          key={index}
          style={{
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          }}>
          <Text>Content {index + 1}</Text>
          <TouchableOpacity onPress={() => console.log('pressed')}>
            <Text>I'm a touchable</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={() => router.push('/model')}>
        <Text>Go to next page</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
});
