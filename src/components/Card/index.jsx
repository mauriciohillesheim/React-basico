import './styles.css'

export default function Card({ data: personagem }){
    return (
        <div className='card char' key={personagem.id}>
            <img src={personagem.image} alt={personagem.name}/>

            <h2>{personagem.name}</h2>

            <div className='char-info'>
            <span><b>Espécie: </b>{personagem.species}</span>
            <span><b>Gênero: </b>{personagem.gender}</span>
            </div>

            <div>
            <div className='lista-secundaria'>
                <b>Participações:</b>
                { personagem.episode.map(
                ep => 
                    <span key={personagem.name+(ep.split('episode/'))[1]}>
                        Ep-{ (ep.split('episode/'))[1] }
                    </span>
                ) }
            </div>
            <h5><b>Status: </b> {personagem.status}</h5>
            </div>
        </div>
    )
}