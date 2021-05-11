import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import Estilo from './estilo';

export default props => {
  //   let nome = 'teste';
  const [nome, setNome] = useState('Teste');
  return (
    <SafeAreaView>
      <Text style={Estilo.txtG}>Input</Text>
      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
    </SafeAreaView>
  );
};
