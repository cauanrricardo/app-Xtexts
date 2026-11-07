import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Mensagem({ mensagem, recebida }) {
  return (
    <View style={styles.container}>
      <View style={[styles.balao, recebida ? styles.balaoRecebida : styles.balaoEnviada]}>
        <Text style={styles.texto}>{mensagem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  balao: {
    maxWidth: '80%',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 4,
  },
  balaoRecebida: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  balaoEnviada: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  texto: {
    fontSize: 16,
    color: '#000',
  },
});
