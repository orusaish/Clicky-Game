import React from "react";
import cards from "./cards.json";
class Card extends React.Component {
  render() {
    return <img src={cards[this.props.id].image} height="230" width="230" />;
  }
}
export default Card;
