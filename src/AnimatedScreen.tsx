import React, { useState } from "react"
import { AppRegistry, Text, Pressable, SafeAreaView, Modal, Button, StyleSheet } from 'react-native'
import Reanimated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1
  },
  modal: {
    backgroundColor: 'white',
    flex: 1
  }
})

const AnimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const AnimatedScreen = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);

  const backgroundColor = useSharedValue('#ffffff');

  const pressedStyle = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  return (
    <SafeAreaView style={styles.screen}>

      <AnimatedPressable
        style={pressedStyle}
        onPress={() => setModalVisible(true)}
        onPressIn={() => {
          backgroundColor.value = withTiming('#aaaaaa', { duration: 150 });
        }}
        onPressOut={() => {
          backgroundColor.value = withTiming('#ffffff', { duration: 150 });
        }}
      >
        <Text>Open Modal</Text>
      </AnimatedPressable>

      <Modal visible={modalVisible} presentationStyle="formSheet" animationType="slide">
        <SafeAreaView style={styles.modal}>
          <Text>Hello from the Modal</Text>

          <Button title="Dismiss" onPress={() => setModalVisible(false)} />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

AppRegistry.registerComponent(
  'AnimatedScreen',
  () => AnimatedScreen
)
