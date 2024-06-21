import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filme from '../pages/Nav/1. MostrarFilmes';
import Signup from '../pages/2. Signup';
import PageLogin from '../pages/1. Login';
import Cinemas from '../pages/Nav/3. PesquisarCidades';
import Perfil from '../pages/Nav/4. Perfil';
import Pesquisar from '../pages/Nav/2. PesquisarFilmes';
import Sessao from '../pages/7. Sessoes';
import DetalhesFilme from '../pages/3. RenderMovies';
import Cinema from '../pages/5. RenderCinema';
import Agendar from '../pages/6. Agendar';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name='PageLogin'
        component={PageLogin}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name='Filmes'
        component={Filme}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{ headerShown: false }}
      />
  
      <Stack.Screen
        name='Agendar'
        component={Agendar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Sessao'
        component={Sessao}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Cinema'
        component={Cinema}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Perfil'
        component={Perfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Cinemas'
        component={Cinemas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Pesquisar'
        component={Pesquisar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='DetalhesFilme'
        component={DetalhesFilme}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}