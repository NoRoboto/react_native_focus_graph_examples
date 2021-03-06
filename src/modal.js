import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FocusableNode} from 'react-native-focus-graph';

export default function TVModal({currentElementId, registerActions}) {
  return (
    <View style={styles.container}>
      <FocusableNode
        registerActions={registerActions}
        id="A"
        activeId={currentElementId}
        key="A"
        actions={{
          select: id => console.log(`onPress ${id}`),
          focus: id => console.log(`focused ${id}`),
          blur: id => console.log(`onBlur ${id}`),
        }}>
        <Text>Modal option 1</Text>
      </FocusableNode>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalContentContainer: {
    height: '100%',
    width: '30%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
