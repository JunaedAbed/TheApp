import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress, isValid}) {
  return (
    <TouchableOpacity
      onPress={isValid ? onPress : null}
      disabled={!isValid}
      style={{
        backgroundColor: isValid ? 'black' : 'gray',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        opacity: isValid ? 1 : 0.5,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
