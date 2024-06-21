import React from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { estilo } from './style';
import { Icon } from 'react-native-elements';
import filmecinemas from '../../Listas/FilmesCinemas';

/**
 * Componente para exibir os filmes disponíveis em um cinema específico.
 */
export default function Cinema() {
  const navigation = useNavigation();
  const route = useRoute();
  const { city } = route.params;

  // Filtra os filmes baseados na cidade selecionada
  const filteredMovies = filmecinemas.filter(item => item.cidade === city);

  /**
   * Navega para a tela de agendamento com detalhes do filme selecionado.
   * @param {object} movie Detalhes do filme selecionado.
   */
  const navigateToAgendar = (movie) => {
    navigation.navigate('Agendar', { movie });
  };

  /**
   * Renderiza um item da lista de filmes.
   * @param {object} item Filme a ser renderizado.
   */
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToAgendar(item)}>
      <View style={estilo.list}>
        <View style={estilo.conteudo}>
          <View style={estilo.viewEsquerda}>
            <Image
              style={estilo.cartaz}
              source={item.cartaz}
            />
          </View>
          <View style={estilo.viewDireita}>
            <View style={estilo.cima}>
              <Text style={{ color: '#000', fontSize: 15 }}>{item.nome}</Text>
            </View>
            <View style={estilo.meio}>
              <View style={estilo.bodyUpRightUpUpUp}>
                <Text style={{ fontSize: 12, color: '#000' }}>{item.anoPublicacao}</Text>
                <View style={estilo.recommendedAge}>
                  <Text style={{ fontSize: 12, color: '#000' }}>{item.idade_recomendada}</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#000' }}>{item.duracao}</Text>
              </View>
              <View style={estilo.bodyUpRightUpBelow}>
                <Text style={{ fontSize: 12, color: '#000' }}>{item.genero}</Text>
              </View>
            </View>
            <ScrollView style={estilo.baixo}>
              <Text style={{ fontSize: 10, color: '#000' }}>{item.sinopse}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilo.all}>
      {/* Cabeçalho com o título */}
      <View style={estilo.header}>
        <Text style={{ color: '#000' }}>FILMES EM {city.toUpperCase()}</Text>
      </View>

      {/* Corpo com a lista de filmes */}
      <View style={estilo.body}>
        <FlatList
          data={filteredMovies}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      {/* Navegação inferior */}
      <View style={estilo.nav}>
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            size={30}
            onPress={() => navigation.navigate('Filmes')}
          />
          <Text style={{ fontSize: 10 }}>FILMES</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='search'
            size={30}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10 }}>PESQUISAR</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='movie'
            size={30}
            color={'#14FF00'}
            onPress={() => navigation.navigate('Cinemas')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>CINEMAS</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='person'
            size={30}
            onPress={() => navigation.navigate('Perfil')}
          />
          <Text style={{ fontSize: 10 }}>PERFIL</Text>
        </View>
      </View>
    </View>
  );
}