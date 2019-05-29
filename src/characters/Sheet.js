import React from 'react';
import Details from './Details';
import Swapi from '../services/swapi';
import './Sheet.css';

function Character(props) {
  return (
    <div className="card card-pointer" onClick={props.onClick}>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.char.name}</p>
            <p className="subtitle is-6">{props.char.gender} Pau'an</p>
          </div>
        </div>
      </div>
    </div>
  )
}

class Sheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      characters: [],
      currentPage: 1,
      hasNext: false,
      isLoading: false
    }
  }

  componentDidMount() {
    this.getPeople();
  }
  
  getPeople() {
    this.setState({
      isLoading: true
    });

    Swapi.getPeople(this.state.currentPage)
      .then((data) => {
        this.setState({
          characters: this.state.characters.concat(data.results),
          currentPage: this.state.currentPage + 1,
          hasNext: data.next !== null,
          isLoading: false
        })
      })
  }

  showDetails() {
    this.setState({
      showDetails: true
    })
  }

  hideDetails() {
    this.setState({
      showDetails: false
    })
  }

  renderCharacter(char) {
    return (
      <div key={char.name} className="column is-3">
        <Character onClick={() => this.showDetails()} char={char} />
      </div>
    )
  }

  characterComponents() {
    const components = [];
    for (let i = 0; i < this.state.characters.length; ++i) {
      components.push(this.renderCharacter(this.state.characters[i]));
    }

    return components;
  }

  renderLoadButton() {
    if (this.state.hasNext) {
      return (
        <button
          className={"button is-fullwidth is-info " + (this.state.isLoading ? 'is-loading' : '')}
          onClick={() => this.getPeople()}
        >
          Load More
        </button>
      )
    }
  }

  render() {
    return (
      <div className="tile is-parent is-vertical">
        <div className="tile is-child is-12">
          <div className="columns is-multiline is-mobile">
            {this.characterComponents()}
          </div>
        </div>
        <div className="tile is-child is-12">
          <div className="columns">
            <div className="column is-5"></div>
            <div className="column is-2">
              {this.renderLoadButton()}
            </div>
          </div>
        </div>
        <Details onClick={() => this.hideDetails()} isActive={this.state.showDetails} />
      </div>
    )
  }
}

export default Sheet;