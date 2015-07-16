/* jslint esnext: true */

'use strict';

class Pokemon extends React.Component {

    constructor() {
        super();

        this.state = {}
    }

    componentDidMount() {
        this.loadPokemonDetails(this.props.uri)
    }


    render() {
        return (
            <div className="pokemon">
                <h2>{this.state.name}</h2>

                {this.pokemonImage()}

                <dl>
                    <dt>Height</dt>
                    <dd>{this.state.height}</dd>
                    <dt>Weight</dt>
                    <dd>{this.state.weight}</dd>
                </dl>
            </div>
        );
    }

    pokemonImage() {
        if (this.state.image) {
            return <img src={this.state.image} />
        }
    }

    loadPokemonDetails(uri) {
        $.ajax({
            url: 'http://pokeapi.co/' + uri,
            success: (pokemon) => {
                this.setState(pokemon)
                this.loadSprite(pokemon.sprites[0].resource_uri)
            }
        })
    }

    loadSprite(uri) {
        $.ajax({
            url: 'http://pokeapi.co' + uri,
            success: (sprite) => {
                this.setState({
                    image: 'http://pokeapi.co' + sprite.image
                })
            }
        })
    }
}
module.exports = Pokemon;
