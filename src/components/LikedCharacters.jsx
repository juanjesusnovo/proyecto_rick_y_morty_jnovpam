import React, { useContext } from "react"
import { characterListPagination} from "../hooks/useFetch"
import { useUserContext } from "../context/UserContext"


const LikedCharacters = ({characters = []}) => {

    const {user, setUser, favs, setFavs, loged, setLoged} = useUserContext()

    function getEpisode(episode){
        const {data, loading, error} = characterListPagination(episode)

        if (loading) {
            return <h1>Loading</h1>
        }
        if (error){
            console.log(error)
        }
        return data.name
    }

    const setFavourites = (e) => {
        let fav = e.target.id
        if(favs[0]=== ""){
            favs[0]=fav
        }
        else{
            const isFavourite = favs.includes(fav)
            isFavourite ? (
                setFavs(favs.filter(favchar => favchar !== fav))
            ) : (
                setFavs([
                    ...favs,
                    fav
                ])
            )
        }
        location.reload()
        console.log(favs)
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
                            favs.includes((character.id).toString()) ? (
                                <h2 onClick={setFavourites} id={character.id}>💚</h2>
                            ) :
                            (
                                <h2 onClick={setFavourites} id={character.id}>🤍</h2>
                            )
                        }
                    </article>
                ))
            }
        </section>
    )
}

export default LikedCharacters