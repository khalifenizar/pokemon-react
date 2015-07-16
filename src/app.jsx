/* jslint esnext: true */

'use strict';

var Pokedex = require('./pokedex.jsx');
var Pokemon = require('./pokemon.jsx');

class App extends React.Component {

    constructor() {
        super();
        this.list = [
            "pikachu", "rattata", "meowth"
        ];
        this.state = {
            selectedName: null
        };
    }

    onSelectPokemon(name) {
        this.state.selectedName = name;
        this.setState(this.state);
    }

    onShowPokedex() {
        this.state.selectedName = null;
        this.setState(this.state);
    }

    render() {
        if (this.state.selectedName) {
            return (
                <div class="pokemon">
                    <h1>Pokemon</h1>
                    <Pokemon name={this.state.selectedName} />
                    <a href="#" onClick={this.onShowPokedex.bind(this)}>show pokedex</a>
                </div>
            );
        }

        return (
            <div class="pokemon">
                <h1>Pokedex</h1>
                <Pokedex list={this.list}
                         onSelectPokemon={this.onSelectPokemon.bind(this)}/>
            </div>
        );
    }

}
module.exports = App;
