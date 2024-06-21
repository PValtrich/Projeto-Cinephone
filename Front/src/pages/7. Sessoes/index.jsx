import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native'; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação
import { Icon } from 'react-native-elements'; // Importando ícones
import filmecinemas from '../../Listas/FilmesCinemas';
import { estilo } from './style'; // Estilo importado corretamente
import { apiConfig } from '../../Utils/api';
import getUser from '../../../storage/users/userGet';


export default function Sessao() {
  const navigation = useNavigation(); // Hook de navegação
  const [user, setUser] = useState({});
  const [sessao, setSessao] = useState([]);

  useEffect(() => {
    getUser().then((usuario) => {
      apiConfig.get(`/sessao/${usuario.id}`).then((res) => {
        // Valide a resposta da API aqui
        if (Array.isArray(res.data)) {
          setSessao(res.data);
        } else {
          console.error("Resposta inesperada da API:", res.data);
        }
      }).catch((error) => {
        console.error("Erro ao buscar sessões:", error);
      });
      setUser(usuario);
    }).catch((error) => {
      console.error("Erro ao buscar usuário:", error);
    });
  }, []);

  const renderSessaoItem = ({ item: sessaoItem }) => {
    // const filme = filmecinemas.find(f => f.id === sessaoItem.filmeId);
    // if (!filme) return null;
    console.log(sessaoItem)

    return (
      <View style={estilo.card}>
        {/* <Image source={filme.cartaz} style={estilo.image} /> */}
        <View style={estilo.cardContent}>
          <Text style={estilo.nome}>{sessaoItem.nome}</Text>
          <Text style={estilo.horario}>Horário: {sessaoItem.horario}</Text>
        </View>
      </View >
    );
  };
  return (
    <View style={estilo.all}>
      {/* Cabeçalho */}
      <View style={estilo.header}>
        <Text style={{ color: '#fff' }}>HISTÓRICO DE SESSÕES</Text>
      </View>

      {/* Corpo com os agendamentos */}
      <FlatList
        data={sessao}
        renderItem={renderSessaoItem}
        keyExtractor={sessaoItem => `${sessaoItem.id}-${sessaoItem.id_sessao}`}
      />
      
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
            onPress={() => navigation.navigate('Cinemas')}
          />
          <Text style={{ fontSize: 10 }}>CINEMAS</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='person'
            size={30}
            color={'#14FF00'}
            onPress={() => navigation.navigate('Perfil')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>PERFIL</Text>
        </View>
      </View>
    </View>
  )
}