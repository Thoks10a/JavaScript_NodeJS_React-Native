import React, {useState} from 'react';
import {Text, Button} from 'react-native';

import Estilo from './estilo';

export default props => {
  //let numero = props.inicial;

  const [numero, setNumero] = useState(props.inicial);

  const inc = () => {
    setNumero(numero + 1);
  };
  const dec = () => {
    setNumero(numero - 1);
  };

  return (
    <React.Fragment>
      <Text style={Estilo.txtG}>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </React.Fragment>
  );
};
