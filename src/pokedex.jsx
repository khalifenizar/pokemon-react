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
        var name = event.target.getAttribute('data-name');
        this.props.onSelectPokemon(name);
    }

    renderPokedex(list) {
        return list.map((pkmn) => {
            return (
                <li>
                    <a data-name={pkmn.name} href="#" onClick={this.clickOnPokemon.bind(this)}>
                        {pkmn.name}
                    </a>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="pokedex-container">
                <ul className="pokedex-list">
                    {this.renderPokedex(this.props.list)}
                </ul>
            </div>
        );
    }

}
module.exports = Pokedex;
