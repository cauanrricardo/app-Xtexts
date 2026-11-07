import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const contatos = [
  { id: 1, nome: 'Ricardo' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Carla' },
  { id: 4, nome: 'Diego' },
];

export default function HomeScreen({ navigation }) {
  const handlePress = (contato) => {
    navigation.navigate('Chat', { contatoId: contato.id, nome: contato.nome });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.nome}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nome: {
    fontSize: 16,
  },
});
