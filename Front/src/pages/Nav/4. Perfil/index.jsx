import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';

export default function Perfil() {
  const navigation = useNavigation();

  // Navegar para a tela de histórico de sessões
  const navigateToSessao = () => {
    navigation.navigate('Sessao');
  };

  return (
    <View style={estilo.all}>
      {/* Cabeçalho */}
      <View style={estilo.header}>
        <Text style={{ color: '#fff' }}>SOBRE</Text>
      </View>

      {/* Corpo */}
      <View style={estilo.body}>
        <View style={estilo.bodyscrool}>
          {/* Texto do usuário */}
          <Text style={estilo.texto}>USUÁRIO</Text>
          {/* Texto do email */}
          <Text style={estilo.texto}>EMAIL</Text>
          {/* Botão para o histórico de sessões */}
          <TouchableOpacity style={estilo.botao} onPress={navigateToSessao}>
            <Text style={{ fontSize: 15, color: '#000' }}>HISTÓRICO DE SESSÕES</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navegação inferior */}
      <View style={estilo.nav}>
        {/* Ícone e texto para filmes */}
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            size={30}
            onPress={() => navigation.navigate('Filmes')}
          />
          <Text style={{ fontSize: 10, }}>FILMES</Text>
        </View>

        {/* Ícone e texto para pesquisar */}
        <View style={estilo.iconav}>
          <Icon
            name='search'
            size={30}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10, }}>PESQUISAR</Text>
        </View>

        {/* Ícone e texto para cinemas */}
        <View style={estilo.iconav}>
          <Icon
            name='movie'
            size={30}
            onPress={() => navigation.navigate('Cinemas')}
          />
          <Text style={{ fontSize: 10, }}>CINEMAS</Text>
        </View>

        {/* Ícone e texto para perfil */}
        <View style={estilo.iconav}>
          <Icon
            name='person'
            size={30}
            color={'#14FF00'}
            onPress={() => navigation.navigate('Perfil')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00', }}>PERFIL</Text>
        </View>
      </View>
    </View>
  );
}