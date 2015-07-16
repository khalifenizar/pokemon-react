/* jslint esnext: true */

'use strict';

class Pokedex extends React.Component {

    // static propTypes = {
    //     onSelectPokemon: React.PropTypes.func.isRequired,
    //     list: React.PropTypes.array.isRequired
    // }

    constructor() {
        super();
    }

    clickOnPokemon(event) {
        event.preventDefault()

        var uri = event.target.getAttribute('data-uri')
        this.props.onSelectPokemon(uri);
    }

    idForPokemon(pkmn) {
        var chunks = pkmn.resource_uri.split('/')
        return Number(chunks[3])
    }

    renderPokedex(list) {
        return list
            .sort((a, b) => {
                return this.idForPokemon(a) - this.idForPokemon(b)
            })
            .map((pkmn) => {
                return (
                    <li>
                        <a data-uri={pkmn.resource_uri} href="#" onClick={this.clickOnPokemon.bind(this)}>
                            {pkmn.name}
                        </a>
                    </li>
                );
            });
    }

    render() {
        return (
            <div className="pokedex-container">
                <ol className="pokedex-list">
                    {this.renderPokedex(this.props.list)}
                </ol>
            </div>
        );
    }

}
module.exports = Pokedex;
