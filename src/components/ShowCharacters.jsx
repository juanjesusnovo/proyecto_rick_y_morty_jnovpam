import React from "react"

const ShowCharacters = ({characters = []}) => {
        return (
            <section className="section-init">
                {   
                    characters.map((character, index) => (
                        <article key={index} className="charactersInit">
                            <figure className="figure-init">
                                <img className="character" src={character.image} alt={character.name}/>
                            </figure>
                            <div>
                                <p className="name">{character.name}</p>
                                <div className="status">    
                                    <span>{character.status} - {character.species}</span>
                                    <span>{character.gender}</span>
                                </div>
                                <div className="morinfo">
                                    <p>Location - {character.location.name}</p>
                                    <p>First Appearence - {}</p>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </section>
    )
}
export default ShowCharacters