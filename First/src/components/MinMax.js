import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default param => {
  console.warn(param);
  return <Text style={Estilo.txtG}>O valor X é maior que o valor Y!</Text>;
};
