import React, { useContext } from "react"
import { useUserContext } from "../context/UserContext"
import { characterListPagination} from "../hooks/useFetch"

const ShowCharacters = ({characters = []}) => {

    const {favs, setFavs} = useUserContext()

    


    function getEpisode(episode){
        const {data, loading, error} = characterListPagination(episode)

        if (loading){
            return "loading"
        }
        if (error){
            console.log(error)
        }
        return data.name
    }
    
    const setFavourites = (e) => {
        const isFavourite = favs.includes(e.target.id)
        console.log(favs);
        const fav = isFavourite ? (
            favs.filter(favchar => favchar !== e.target.id)
        ) : (
            favs.push(e.target.id)
        )
        setFavs({
            ...favs,
            fav
        })
        localStorage.setItem("jose", favs)
    }

    return (
        <section className="section-init">
            {   
                characters.map((character, index) => (
                    <article key={index} id={character.id} className="charactersInit">
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
                                <p>First Appearence - {getEpisode(character.episode[0])}</p>
                            </div>
                        </div>
                        <h2 onClick={setFavourites} id={character.id}>x</h2>
                    </article>
                ))
            }
        </section>
    )
}
export default ShowCharacters