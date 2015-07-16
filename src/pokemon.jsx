/* jslint esnext: true */

'use strict';

class Pokemon extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="pokemon-card">
                {this.props.name}
            </div>
        );
    }

}
module.exports = Pokemon;
