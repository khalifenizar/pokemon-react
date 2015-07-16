/* jslint esnext: true */

'use strict';

var Pokedex = require('./pokedex.jsx');

class App extends React.Component {

  constructor() {
    super();
    this.list = [
      "pikachu", "rattata", "meowth"
    ];
  }

  render() {
    return (
      <div class="pokemon">
        <h1>Pokedex</h1>
        <Pokedex list={this.list} />
      </div>
    );
  }

}

module.exports = App;
