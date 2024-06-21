import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { estilo } from './style';
import getUser from '../../../storage/users/userGet';
import { apiConfig } from '../../Utils/api';


/**
 * Componente que exibe detalhes de um filme e permite agendar sessões.
 */
export default function Agendar() {
  const navigation = useNavigation();
  const route = useRoute();
  const { movie } = route.params; // Pegando o filme da navegação
  

  
  const [user, setuser] = useState({})
  //let user
  /**
   * Função para abrir o trailer do filme no navegador.
   * @param {string} url URL do trailer do filme.
   */
  const openTrailer = (url) => {
    Linking.openURL(url);
  };

  useEffect(()=>{
    getUser().then((usuario)=>{
      //user = usuario.id
      console.log(usuario)
      setuser(usuario)
    })
  },[])

  async function novasessao()
  {
          try
          {
              let res = await apiConfig.post('/sessao/nova',{
                  idu: user.id,
                  ids: movie.id
              });
              console.log(res);

          }
          catch(error)
          {
              console.log(error)       
          }
  }

  return (
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
              source={movie.cartaz}
              style={estilo.cartaz}
            />
          </View>
          <View style={estilo.bodyUpRight}>
            <View style={estilo.bodyUpRightUp}>
              <View style={estilo.bodyUpRightUpUpUp}>
                <Text style={{ fontSize: 12, color: '#fff' }}>{user.name}</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>{movie.anoPublicacao}</Text>
                <View style={estilo.recommendedAge}>
                  <Text style={{ fontSize: 12, color: '#000' }}>{movie.idade_recomendada}</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#fff' }}>{movie.duracao}</Text>
              </View>
              <View style={estilo.bodyUpRightUpBelow}>
                <Text style={{ fontSize: 12, color: '#fff' }}>{movie.genero}</Text>
              </View>
            </View>
            <View style={estilo.bodyUpRightBelow}>
              <View style={estilo.title}>
                <Text style={{ fontSize: 15, color: '#fff' }}>{movie.nome}</Text>
              </View>
              <View style={estilo.descricao}>
                <ScrollView>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{movie.sinopse}</Text>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>

        <View style={estilo.bodyCenter}>
          <View style={estilo.elenco}>
            <Text style={{ fontSize: 15, color: '#fff' }}>TRAILER</Text>
            <TouchableOpacity onPress={() => openTrailer(movie.trailer)} style={estilo.trailerButton}>
              <Text style={{ fontSize: 10, color: '#fff' }}>ASSISTIR TRAILER</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={estilo.bodyBelow}>
          <View style={estilo.sessoes}>
            <Text style={{ fontSize: 15, color: '#fff' }}>SESSÕES</Text>
          </View>
          <View style={estilo.cardSessoes}>

            {/* Renderiza os detalhes das sessões disponíveis */}
            <View style={estilo.agendamentos}>
              <View style={estilo.card}>
                <View style={estilo.horario}>
                  <Text style={{ color: '#fff' }}>{movie.horario}</Text>
                </View>
                <View style={estilo.audio}>
                  <Text style={{ color: '#fff' }}>{movie.dublado ? "DUBLADO" : "LEGENDADO"}</Text>
                </View>
                <TouchableOpacity style={estilo.agend}>
                  <Text style={{ color: '#fff' }}onPress={()=>novasessao()}>AGENDAR</Text>
                </TouchableOpacity>
              </View>
            </View>
           
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
            color='#14FF00'
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
