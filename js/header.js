import React from 'react';
module.exports =  React.createClass({
  render: function(){
    return (
        <div style={{fontSize:28,letterSpacing:-.07,fontWeight:'bold',padding:20,marginTop:-10}}>
            {this.props.title} Example App
        </div>
    )
  }
});
