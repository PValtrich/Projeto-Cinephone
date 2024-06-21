import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação
import { Icon } from 'react-native-elements'; // Importando Ícones
import { estilo } from './style'; // Importando Estilo
import filmes from '../../../Listas/Filmes'; // Importando lista de filmes

export default function Pesquisar() {
  const navigation = useNavigation(); // Hook de navegação
  const [search, setSearch] = useState(''); // Estado para armazenar o texto da pesquisa
  const [filteredMovies, setFilteredMovies] = useState(filmes.filter(filme => filme.genero !== 'Nenhum')); // Estado para armazenar os filmes filtrados

  // Função para lidar com a pesquisa
  const handleSearch = (text) => {
    setSearch(text);
    const filtered = filmes.filter(filme => 
      filme.genero !== 'Nenhum' && filme.nome.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  // Função para navegar para os detalhes do filme
  const navigateToMovieDetail = (item) => {
    navigation.navigate('DetalhesFilme', { id: item.id });
  };

  // Função para renderizar cada item da lista de filmes
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToMovieDetail(item)}>
      <View style={estilo.itemContainer}>
        <Image source={item.cartaz} style={estilo.image} />
        <View style={estilo.textContainer}>
          <Text style={estilo.title}>{item.nome}</Text>
          <Text style={estilo.genre}>{item.genero}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilo.all}>
      {/* Corpo */}
      <View style={estilo.body}>
        {/* Barra de pesquisa */}
        <TextInput
          style={estilo.searchBar}
          placeholder="PESQUISAR"
          value={search}
          onChangeText={handleSearch}
        />
        {/* Lista de filmes filtrados */}
        <FlatList
          data={filteredMovies}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
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
            color={'#14FF00'}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>PESQUISAR</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='movie'
            size={30}
            onPress={() => navigation.navigate('Cinemas')}
          />
          <Text style={{ fontSize: 10 }}>CINEMAS</Text>
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