import React from "react";
import './style.scss'

// Aqui criamos um botão e extendemos ele a um componente React. Ou seja, agora éle é um componente do react
class Button extends React.Component {
    render() {
        return (
            <button className="botao">
                Botão
            </button>
        )
    }
}

export default Button