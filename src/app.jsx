/* jslint esnext: true */

'use strict';

var App = React.createClass({
  render: function() {
    return (
      <div class="pokemon">
        <h1>Pokedex</h1>
        <div className="pokedex-container">
          <ul className="pokedex-list">
            <li>pikachu</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = App;
