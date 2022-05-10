import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.name}</h2>
        <img
        src={this.props.img}
        alt={this.props.alt}
        title={this.props.title} 
        />
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;