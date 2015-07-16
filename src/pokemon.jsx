/* jslint esnext: true */

'use strict';

class Pokemon extends React.Component {

    constructor() {
        super();

        this.state = {}
    }

    componentDidMount() {
        $.ajax({
            url: 'http://pokeapi.co/' + this.props.uri,
            success: (pokemon) => {
                this.setState(pokemon)
            }
        })
    }

    render() {
        return (
            <div className="pokemon">
                <h2>{this.state.name}</h2>
                <dl>
                    <dt>Height</dt>
                    <dd>{this.state.height}</dd>
                    <dt>Weight</dt>
                    <dd>{this.state.weight}</dd>
                </dl>
            </div>
        );
    }

}
module.exports = Pokemon;
