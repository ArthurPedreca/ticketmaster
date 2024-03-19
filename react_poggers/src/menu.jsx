import { useState } from 'react'
import './index.css'

function Menu() {
    let getLimits = {
        altura: innerHeight,
        largura: innerWidth
    }

    let menuAtual;

    if (getLimits.largura > 768) {
        let menuG =
            <nav className="menu">
                <a href='#'>
                    <p> Suporte ao Fã </p>
                </a>

                <a href='#'>
                    <p> Entrar / Cadastrar-se </p>
                </a>
            </nav>
        menuAtual = menuG
    }

    else {
        let menuP = 'menu pequeno'
        menuAtual = menuP
    }


    return (
        <>
            <h1>{menuAtual}</h1>
        </>
    )


}

export default Menu