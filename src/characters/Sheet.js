import React from 'react';
import Details from './Details';
import Swapi from '../services/swapi';
import './Sheet.css';

class Character extends React.Component {
  constructor(props) {
    super(props);
    const nogender = ['n/a', 'none'];
    let gender = nogender.includes(this.props.char.gender.toLowerCase()) ? '' : this.props.char.gender;
    gender = gender.charAt(0).toUpperCase() + gender.slice(1);
    this.state = {
      gender,
      species: ''
    }
  }

  componentDidMount() {
    Swapi.getSpecies(this.props.char.species)
      .then((result) => {
        this.setState({
          species: result.name
        })
      })
  }

  render() {
    return (
      <div className="card card-pointer" onClick={this.props.onClick}>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.char.name}</p>
              <p className="subtitle is-6">{this.state.gender} {this.state.species}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Sheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      characters: [],
      currentPage: 1,
      hasNext: false,
      isLoading: false,
      selected: null
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

  showDetails(char) {
    this.setState({
      showDetails: true,
      selected: char
    })
  }

  hideDetails() {
    this.setState({
      showDetails: false,
      selected: null
    })
  }

  characterComponents() {
    const components = [];
    for (let i = 0; i < this.state.characters.length; ++i) {
      components.push(this.renderCharacter(this.state.characters[i]));
    }

    return components;
  }

  renderDetails() {
    if (this.state.selected) {
      return (<Details onClick={() => this.hideDetails()} isActive={this.state.showDetails} char={this.state.selected} />)
    }
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

  renderCharacter(char) {
    return (
      <div key={char.name} className="column is-3">
        <Character onClick={() => this.showDetails(char)} char={char} />
      </div>
    )
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
        {this.renderDetails()}
      </div>
    )
  }
}

export default Sheet;