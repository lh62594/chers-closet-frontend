import React, { Component, Fragment } from 'react'

class ItemCard extends React.Component {
  state = {
    src: "https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg",
  }


  componentDidMount() {
    fetch(`http://localhost:3000/items/${this.props.id}`)
    .then( res => res.json())
    .then( item => {
      // console.log("rendering itemcard for", item);
      this.setState({ src: item.url })
    })
  }

  render(){
    return(
      <div
        className="item-card"
        onDragStart={ () => this.props.onDragStart(this.props.item) }
      >

      <button
        className={this.props.button || "hidden-button"}
        onClick={ () => this.props.removeItem(this.props.item) }>
        X
      </button>
      <img
        className="item-image"
        src={this.state.src}
        alt="fun pic"
      />
      <button
        className={this.props.delete || "hidden-button"}
        onClick={ () => this.props.deleteItem(this.props.item) }>
        Delete
      </button>

      </div>
    )
  }

}

export default ItemCard

// onMouseOver={ () => this.props.onMouseOver() }
