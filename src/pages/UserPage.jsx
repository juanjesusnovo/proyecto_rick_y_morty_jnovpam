import React, {useState} from 'react'
import ShowCharacters from '../components/ShowCharacters'
import { BallTriangle } from "react-loader-spinner"
import { characterListPagination} from "../hooks/useFetch"
import "../sass/styles.sass"

export default function UserPage() {

    return (
        <div className='userPage'>
            <BallTriangle
            height={500}
            width={500}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
        />
        </div>
    )
}
