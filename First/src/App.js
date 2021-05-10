import React from 'react';
import {Text, SafeAreaView, Scroll} from 'react-native';

import {Comp, Comp1, Comp2} from './components/Multi';
import Primeiro from './components/Primeiro';

import style from './Style';
import MinMax from './components/MinMax';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <MinMax />
      {/* <Comp />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
    </SafeAreaView>
  );
};
