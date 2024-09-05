import { useEffect, useState } from 'react';
import './styles.css';
import Card from '../../components/Card';

export default function RickAndMortyApi() {
  const [conteudo, setConteudo] = useState(<></>);

  // Função para carregar os personagens Rick e Morty
  async function carregarPersonagens() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    // Fazendo a requisição para buscar Rick Sanchez e Morty Smith
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição HTTP! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  }

  // Função para listar e exibir os personagens Rick e Morty
  async function listaPersonagens() {
    const personagens = await carregarPersonagens();

    return personagens.map((personagem) => (
      <Card key={personagem.id} data={personagem} />
    ));
  }

  useEffect(() => {
    async function getConteudo() {
      setConteudo(await listaPersonagens());
    }
    getConteudo();
  }, []);

  return (
    <div>
      <h1>Personagens Principais</h1>
      <div className='lista-principal'>
        {conteudo}
      </div>
    </div>
  );
}
