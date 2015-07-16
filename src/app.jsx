/* jslint esnext: true */

'use strict';

var Pokedex = require('./pokedex.jsx');
var Pokemon = require('./pokemon.jsx');

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            selectedUri: null,
            list: []
        };
    }

    componentDidMount () {
        $.ajax({
            url: 'http://pokeapi.co/api/v1/pokedex/1/',
            success: (response) => {
                this.setState({
                    list: response.pokemon
                })
            }
        })
    }

    onSelectPokemon(uri) {
        this.setState({
            selectedUri: uri
        });
    }

    onShowPokedex() {
        this.setState({
            selectedUri: null
        });
    }

    render() {
        if (this.state.selectedUri) {
            return (
                <div className="app">
                    <h1>Pokemon</h1>
                    <Pokemon uri={this.state.selectedUri} />
                    <a href="#" onClick={this.onShowPokedex.bind(this)}>show pokedex</a>
                </div>
            );
        }

        return (
            <div className="app">
                <h1>Pokedex</h1>
                <Pokedex list={this.state.list}
                         onSelectPokemon={this.onSelectPokemon.bind(this)}/>
            </div>
        );
    }

}
module.exports = App;
