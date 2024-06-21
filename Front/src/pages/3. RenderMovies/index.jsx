import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Linking, TouchableOpacity, ActivityIndicator } from 'react-native'; // Importando Componentes do React Native
import { useNavigation, useRoute } from '@react-navigation/native'; // Navegação e Roteamento
import { Icon } from 'react-native-elements'; // Importando ícones
import { estilo } from './style'; // Importando Estilo
import { apiConfig } from '../../Utils/api';
import filmes from '../../Listas/Filmes'; // Importando lista de filmes

  //Usamos como forma de definir para o TS que esse tipo Salas esta sendo criando nesses moldes

export default function DetalhesFilme() {

  const navigation = useNavigation(); // Hook de navegação
  const route = useRoute(); // Hook de roteamento
  const { id } = route.params; // Obtendo o ID do filme da rota
  const cartaz = filmes.find(f => f.id === id); // Selecionando o filme com base no cartaz

  const [filme, setFilme] = useState()

  // Função para abrir o trailer
  const openTrailer = (url) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir URL:', err));
  };

  useEffect(() => {
    apiConfig.get(`/filme/${id}`)
    .then((res)=>{
      //console.log(res.data[0])
      setFilme(res.data)
    })
      //console.log(filme)
  },)

  if(filme){
    return(
      <View style={estilo.all}>
      {/* Cabeçalho com o título */}
      <View style={estilo.header}>
        <Text style={{ color: '#fff' }}>SOBRE</Text>
      </View>

      {/* Corpo com os detalhes do filme */}
      <View style={estilo.body}>
        <View style={estilo.bodyUp}>
          <View style={estilo.bodyUpLeft}>
            <Image
              source={cartaz.cartaz}
              style={estilo.cartaz}
            />
          </View>
          <View style={estilo.bodyUpRight}>
            <View style={estilo.bodyUpRightUp}>
              <View style={estilo.bodyUpRightUpUpUp}>
                <Text style={{ fontSize: 12, color: '#fff' }}>{filme.ano}</Text>
                <View style={estilo.recommendedAge}>
                  <Text style={{ fontSize: 12, color: '#000' }}>{filme.idade_recomendada}</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#fff' }}>{filme.duracao}</Text>
              </View>
              <View style={estilo.bodyUpRightUpBelow}>
                <Text style={{ fontSize: 12, color: '#fff' }}>{filme.genero}</Text>
              </View>
            </View>
            <View style={estilo.bodyUpRightBelow}>
              <View style={estilo.title}>
                <Text style={{ fontSize: 15, color: '#fff' }}>{filme.nome}</Text>
              </View>
              <View style={estilo.descricao}>
                <ScrollView>
                  <Text style={{ fontSize: 12, color: '#fff' }}>{filme.sinopse}</Text>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>

        <View style={estilo.bodyBelow}>
          <View style={estilo.elenco}>
            <Text style={{ fontSize: 15, color: '#fff' }}>ELENCO</Text>
            <View>
              <Text style={{ fontSize: 12, color: '#fff' }}>{filme.elenco}</Text>
            </View>
            <TouchableOpacity onPress={() => openTrailer(filme.trailer)} style={estilo.trailerButton}>
              <Text style={{ fontSize: 10, color: '#fff' }}>ASSISTIR TRAILER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Navegação inferior */}
      <View style={estilo.nav}>
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            size={30}
            color='#14FF00'
            onPress={() => navigation.navigate('Filmes')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>FILMES</Text>
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
    )
  }
  else{
    return(<ActivityIndicator />)
  }
}