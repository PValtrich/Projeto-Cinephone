const filmes = [
  // AÇÃO
  {
    id: 2,
    nome: 'O Sistema',
    cartaz: require('../../assets/Ação/Sistem.jpg'),
    genero: 'Ação',
    ano: 2022,
    idade_recomendada: 16,
    duracao: '1h 45m',
    sinopse: 'Um ex-militar se infiltra em uma prisão de alta segurança para derrubar uma rede criminosa de dentro.',
    elenco: ['Tyrese Gibson', 'Jeremy Piven'],
    trailer: 'https://youtube.com/watch?v=AFoflf-hass' //Trailer Original
  },
  {
    id: 3,
    nome: 'Beekeeper',
    cartaz: require('../../assets/Ação/BeeKeeper.jpg'),
    genero: 'Ação',
    ano: 2023,
    idade_recomendada: 14,
    duracao: '1h 50m',
    sinopse: 'Um agente disfarçado se torna um apicultor e luta contra criminosos para proteger sua nova comunidade.',
    elenco: ['Jason Statham', 'Charlize Theron'],
    trailer: 'https://www.youtube.com/watch?v=SzINZZ6iqxY' //Trailer Original
  },
  // COMÉDIA
  {
    id: 4,
    nome: 'Vizinhos',
    cartaz: require('../../assets/Comédia/Vizinhos.jpg'),
    genero: 'Comédia',
    ano: 2022,
    idade_recomendada: 12,
    duracao: '1h 50m',
    sinopse: 'Walter tem um colapso nervoso e decide trocar a cidade grande pelo campo. Mas seus vizinhos barulhentos acabam com seu sonho de paz e tranquilidade.',
    elenco: ['Julia Foti, Marlei Cevada, Paulinho Gogó, Leandro Hassum, Julia Rabello, Lucas Leto'],
    trailer: 'https://www.youtube.com/watch?v=IaV-OO-Mwx0' //Trailer Original
  },
  {
    id: 5,
    nome: 'Os Parças 2',
    cartaz: require('../../assets/Comédia/Os Parças 2.jpg'),
    genero: 'Comédia',
    ano: 2019,
    idade_recomendada: 12,
    duracao: '1h 40m',
    sinopse: 'Após se meterem em uma enrascada, quatro amigos precisam organizar uma grande festa para se safarem das dívidas.',
    elenco: ['Whindersson Nunes', 'Tom Cavalcante'],
    trailer: 'https://www.youtube.com/watch?v=vvcEDll428c&t=3s' //Trailer Original
  },
  // TERROR
  {
    id: 6,
    nome: 'M3GAN',
    cartaz: require('../../assets/Terror/M3GAN.jpg'),
    genero: 'Terror',
    ano: 2022,
    idade_recomendada: 14,
    duracao: '1h 42m',
    sinopse: 'Uma mulher solitária faz amizade com um grupo de adolescentes, mas sua hospitalidade rapidamente se torna uma obsessão mortalM3GAN é uma maravilha da inteligência artificial, uma boneca realista programada para ser a melhor amiga de uma criança. Uma robótica brilhante dá a sua jovem sobrinha um protótipo M3GAN, mas a máquina logo se torna violenta.',
    elenco: ['Jenna Davis', 'Amie Donald'],
    trailer: 'https://www.youtube.com/watch?v=JcKRaUGJcqY' //Trailer Original
  },
  {
    id: 7,
    nome: 'Annabelle',
    cartaz: require('../../assets/Terror/Annabelle.jpg'),
    genero: 'Terror',
    ano: 2014,
    idade_recomendada: 18,
    duracao: '1h 39m',
    sinopse: 'Uma boneca possuída causa terror em uma família após ser comprada por um colecionador.',
    elenco: ['Annabelle Wallis', 'Ward Horton'],
    trailer: 'https://www.youtube.com/watch?v=paFgQNPGlsg' //Trailer Original
  },
  // NENHUM
  {
    id: 12,
    nome: 'Nenhum',
    cartaz: require('../../assets/NoMovie.png'),
    genero: 'Nenhum',
    ano: null,
    idade_recomendada: null,
    duracao: null,
    sinopse: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium corporis recusandae iusto commodi voluptas dignissimos quidem, distinctio esse sint possimus est necessitatibus officia quaerat voluptatem facere maxime ipsa doloremque!',
    elenco: [],
    trailer: ''
  },
  {
    id: 13,
    nome: 'Nenhum',
    cartaz: require('../../assets/NoMovie.png'),
    genero: 'Nenhum',
    ano: null,
    idade_recomendada: null,
    duracao: null,
    sinopse: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium corporis recusandae iusto commodi voluptas dignissimos quidem, distinctio esse sint possimus est necessitatibus officia quaerat voluptatem facere maxime ipsa doloremque!',
    elenco: [],
    trailer: ''
  },
  {
    id: 14,
    nome: 'Nenhum',
    cartaz: require('../../assets/NoMovie.png'),
    genero: 'Nenhum',
    ano: null,
    idade_recomendada: null,
    duracao: null,
    sinopse: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium corporis recusandae iusto commodi voluptas dignissimos quidem, distinctio esse sint possimus est necessitatibus officia quaerat voluptatem facere maxime ipsa doloremque!',
    elenco: [],
    trailer: ''
  },
];

// Converter todos os nomes para maiúsculas
const filmesComNomesMaiusculos = filmes.map(filme => ({
  ...filme,
  nome: filme.nome.toUpperCase()
}));

export default filmesComNomesMaiusculos;