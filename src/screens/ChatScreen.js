import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Mensagem from '../components/Mensagem';
import mensagemService from '../services/MensagemService';

export default function ChatScreen({ route }) {
  const { contatoId } = route.params;
  const [mensagens, setMensagens] = useState(mensagemService.getMensagens(contatoId));
  const [texto, setTexto] = useState('');

  const handleEnviar = () => {
    if (!texto.trim()) {
      return;
    }
    mensagemService.enviarMensagem(contatoId, texto);
    setMensagens([...mensagemService.getMensagens(contatoId)]);
    setTexto('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mensagens}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Mensagem mensagem={item.texto} recebida={item.recebida} />
        )}
      />
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite uma mensagem"
        />
        <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
          <Text style={styles.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputArea: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  botao: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#DCF8C6',
    borderRadius: 20,
  },
  botaoTexto: {
    color: '#000',
    fontWeight: 'bold',
  },
});
