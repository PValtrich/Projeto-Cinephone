import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação
import { Icon } from 'react-native-elements'; // Importando Ícones
import { estilo } from './style'; // Importando Estilo
import filmecinemas from '../../../Listas/FilmesCinemas'; // Importando lista de cinemas

export default function Cinemas() {
  const navigation = useNavigation(); // Hook de navegação
  const [search, setSearch] = useState(''); // Estado para armazenar o texto da pesquisa
  const [filteredCities, setFilteredCities] = useState([...new Set(filmecinemas.map(item => item.cidade))]); // Estado para armazenar as cidades filtradas

  // Função para lidar com a pesquisa
  const handleSearch = (text) => {
    setSearch(text);
    const filtered = [...new Set(filmecinemas
      .filter(item => item.cidade.toLowerCase().includes(text.toLowerCase()))
      .map(item => item.cidade)
    )];
    setFilteredCities(filtered);
  };

  // Função para navegar para a tela de cinema
  const navigateToCinema = (city) => {
    navigation.navigate('Cinema', { city });
  };

  // Função para renderizar cada item da lista de cidades
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToCinema(item)}>
      <View style={estilo.itemContainer}>
        <Text style={estilo.cityName}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilo.all}>
      {/* Cabeçalho */}
      <View style={estilo.header}>
        <Text style={{ color: '#fff' }}>ENCONTRAR CINEMAS</Text>
      </View>

      {/* Corpo */}
      <View style={estilo.body}>
        {/* Barra de pesquisa */}
        <View style={estilo.input}>
          <TextInput
            style={estilo.searchBar}
            placeholder="PESQUISAR"
            value={search}
            onChangeText={handleSearch}
          />
        </View>
        {/* Resultados da pesquisa */}
        <View style={estilo.resultados}>
          <Text style={{ color: '#fff', fontSize: 15 }}>RESULTADOS</Text>
          <View style={estilo.lista}>
            <FlatList
              data={filteredCities}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          </View>
        </View>
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