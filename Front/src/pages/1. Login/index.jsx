import {useEffect, useState} from "react";
import { Link, router } from "expo-router";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native"; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação do React Native
import { estilo } from "./style"; // Importando estilos do arquivo style
import { apiConfig } from "../../Utils/api";
import userCreate from "../../../storage/users/userCreate";

export default function PageLogin() {
  const navigation = useNavigation(); // Hook de navegação
  const [email, setEmail] = useState('@')
  const [password, setPassword] = useState('_password_')
  
  async function login()
  {
          try
          {
              //Ja que a API é padrão para todo o sistema, isolei as configurações gerais
              //e apenas importo elas aonde preciso e uso o método http que eu quero
              
              let res = await apiConfig.post('/login',{
                  email: email,
                  senha: password
              });
              if(res.status == 204){
                  return Alert.alert('Ops...','Usuario ou senha incorretos!',
                      [
                          {
                              text: 'Ok'
                          }
                      ]
                  )
              }
              else
              {
                await userCreate(res.data[0].id, res.data[0].nome)
                navigation.navigate('Filmes')
              }
          }
          catch(error)
          {
              console.log(error)
              throw new Error('Erro ao logar... :(');        
          }
  }

  return (
    <View style={estilo.all}>
      {/* Cabeçalho com o logo */}
      <View style={estilo.header}>
        <Image
          source={require('../../../assets/Logo.png')}
          style={estilo.logo}
        />
      </View>

      {/* Corpo com o formulário de login */}
      <View style={estilo.body}>
        {/* Título da página de login */}
        <View style={estilo.loginText}>
          <Text style={{ color: '#fff', width: '75.65%' }}>LOGIN</Text>
        </View>

        {/* Inputs de login */}
        <View style={estilo.setInputs}>
          <TextInput
            placeholder="Email"
            label="Email"
            onChangeText={text => setEmail(text)}
            style={estilo.input}
          />
          <TextInput
            placeholder="SENHA"
            style={estilo.input}
            secureTextEntry={true}
            label="Senha"    
            onChangeText={text => setPassword(text)}   
          />

          {/* Botão de login */}
          <TouchableOpacity
            style={estilo.button}
            actionButton 
            onPress={()=> login()}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>

        {/* Navegação para a página de signup */}
        <View style={estilo.goCreate}>
          <Text
            style={{ color: '#fff', width: '75.65%' }}
            onPress={() => navigation.navigate('Signup')}>
            NÃO TEM CONTA? CRIE
          </Text>
        </View>
      </View>

      {/* Rodapé com o botão de voltar */}
      <View style={estilo.footer}>
      </View>
    </View>
  );
}