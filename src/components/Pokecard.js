import React from "react";
import PropTypes from "prop-types";
import './Pokecard.css';

class Pokecard extends React.Component {
    render() {

        const { pokemons } = this.props;

        return (
            <section className="pokemons">
                <h3>{pokemons.name}</h3>
                <p>Tipo: {pokemons.type}</p>
                <p>Peso: {pokemons.averageWeight.value}</p>
                <img id="imagem" src={pokemons.image} alt="imagem" />
            </section>
        )
    }
}

Pokecard.propTypes = {
    pokemons: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.string.isRequired,
    })
}

export default Pokecard;