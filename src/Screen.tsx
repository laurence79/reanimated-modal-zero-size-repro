import React, { useState } from "react"
import { AppRegistry, Text, SafeAreaView, Modal, Button, StyleSheet } from 'react-native'

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

const Screen = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>

      <Button
        onPress={() => setModalVisible(true)}
        title="Open Modal"
      />

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
  'Screen',
  () => Screen
)
