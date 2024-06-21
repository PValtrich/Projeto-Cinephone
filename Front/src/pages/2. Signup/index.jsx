import {useEffect, useState} from "react";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native"; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação do React Native
import { estilo } from './style'; // Importando estilos do arquivo style
import { apiConfig } from "../../Utils/api";

export default function Signup() {
  const navigation = useNavigation(); // Hook de navegação

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function storeUser(){
        try{
            let resposta = await apiConfig.post('/user/novo',{
                nome: nome,
                email: email,
                senha: password,
            })
            console.log(resposta);
            if(resposta.status == 200)
            {
               navigation.navigate('PageLogin')
            }
            else
            {
                return Alert.alert('Ops...','Email ja cadastrado!',
                [
                    {
                        text: 'Ok',
                    }
                ])  
            }
        }
        catch(error){
          console.log(error);
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

      {/* Corpo com o formulário de registro */}
      <View style={estilo.body}>
        {/* Título da página de registro */}
        <View style={estilo.registration_title}>
          <Text style={{ color: '#fff', width: '75.65%' }}>SIGN-UP</Text>
        </View>

        {/* Inputs de registro */}
        <View style={estilo.setInputs}>
          <TextInput
            placeholder="EMAIL"
            style={estilo.input}
            label="Email"
            onChangeText={text => setEmail(text)}

          />
          <TextInput
            placeholder="USUARIO"
            style={estilo.input}
            label="Nome"
            onChangeText={text => setNome(text)}

          />
          <TextInput
            placeholder="SENHA"
            style={estilo.input}
            secureTextEntry={true}
            label="Senha"
            onChangeText={text => setPassword(text)}
          />

          {/* Botão de registro */}
          <TouchableOpacity 
          style={estilo.button}
          onPress={()=> storeUser()}>
            <Text>SIGN-UP</Text>
          </TouchableOpacity>
        </View>

        {/* Navegação para a página de login */}
        <View style={estilo.goConnect}>
          <Text
            style={{ color: '#fff', width: '75.65%' }}
            onPress={() => navigation.navigate('PageLogin')}>
            JÁ TEM CONTA? CONECTE-SE
          </Text>
        </View>
      </View>

      
    </View>
  );
}