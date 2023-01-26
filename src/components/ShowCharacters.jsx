import React, { useContext } from "react"
import { useUserContext } from "../context/UserContext"
import { characterListPagination} from "../hooks/useFetch"

const ShowCharacters = ({characters = []}) => {

    const {user, favs, setFavs} = useUserContext()


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
        let fav = parseInt(e.target.id)
        const isFavourite = favs.includes(fav)
        isFavourite ? (
            setFavs(favs.filter(favchar => favchar !== fav))
        ) : (
            setFavs([
                ...favs,
                fav
            ])
        )
        console.log(favs)
        console.log(favs.includes(1))
        localStorage.setItem(user, favs)
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
                        {
                            user ? (favs.includes(parseInt(character.id)) ? (
                                <h2 onClick={setFavourites} id={character.id}>💚</h2>
                            ) :
                            (
                                <h2 onClick={setFavourites} id={character.id}>🤍</h2>
                            )):
                            <p></p>
                        }
                    </article>
                ))
            }
        </section>
    )
}
export default ShowCharacters