import { StyleSheet as RNStyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function ModelDetail() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 20 }).map((_, index) => (
        <View key={index} style={styles.content}>
          <Text>Content {index + 1}</Text>
          <TouchableOpacity onPress={() => console.log('pressed')}>
            <Text>I'm a touchable</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={() => alert('pressed')} activeOpacity={1}>
        <Text>I'm a touchable opacity without active opacity</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = RNStyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  content: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
