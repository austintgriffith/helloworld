import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.js';

var Main = React.createClass({

    //----------------------------------------------------- init
    getInitialState: function(){
        return {name:"world"};
    },

    //----------------------------------------------------- render
    render: function(){
        <div>
            Hello {this.state.name}
        </div>
    }
    
});

ReactDOM.render(<Main />, document.getElementById('app'));
