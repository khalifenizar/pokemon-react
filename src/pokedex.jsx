/* jslint esnext: true */

'use strict';

class Pokedex extends React.Component {

    constructor() {
        super();
    }

    renderPokedex(list) {
        return list.map(function(name) {
            return (
                <li>{name}</li>
            );
        })
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
