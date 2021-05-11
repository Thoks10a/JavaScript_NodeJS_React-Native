import React from 'react';
import {Text, SafeAreaView, Scroll, ScrollView} from 'react-native';

import {Comp, Comp1, Comp2} from './components/Multi';
import Primeiro from './components/Primeiro';

import Style from './Style';
import MinMax from './components/MinMax';
import Titulo from './components/titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
import Pai from './components/direta/Pai';
import Pai2 from './components/indireta/Pai';
import Diferenciar from './components/Diferenciar';
import ListaProdutos from './components/produtos/ListaProdutos';
import DigiteSeuNome from './components/DigiteSeuNome';
import Quadrado from './components/layout/Quadrado';
import FlexboxV1 from './components/layout/FlexboxV1';

export default () => {
  return (
    <SafeAreaView style={Style.App}>
      <ScrollView>
        <FlexboxV1 />
        {/* <Quadrado />
        <Quadrado cor="#00F" />
        <Quadrado cor="#0F0" />
        <Quadrado cor="#F00" /> */}
        {/* <DigiteSeuNome /> */}
        {/* <ListaProdutos /> */}
        {/* <Diferenciar /> */}
        {/* <Pai2 /> */}
        {/* <Contador inicial={100} /> */}
        {/* <Botao /> */}
        {/* <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro" /> */}
        {/* <MinMax min={3} max={20} /> */}
        {/* <Comp />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
      </ScrollView>
    </SafeAreaView>
  );
};
