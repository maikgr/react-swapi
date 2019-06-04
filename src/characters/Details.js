import React from 'react';
import Swapi from '../services/swapi';
import './Details.css'

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      mass: '',
      hairColor: '',
      skinColor: '',
      eyeColor: '',
      birthYear: '',
      gender: '',
      loading: true
    }
  }

  fetchDetails(data) {
    this.setState({
      height: data.height,
      mass: data.mass,
      hairColor: data.hair_color,
      skinColor: data.skin_color,
      eyeColor: data.eye_color,
      birthYear: data.birth_year,
      gender: data.gender,
      loading: false
    })
  }

  componentDidMount() {
    Swapi.getDetails(this.props.char.url)
      .then((data) => {
        this.fetchDetails(data);
      });
  }

  renderContent() {
    if (this.state.loading) {
      return (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>)
    }

    return (<ul>
      <li> Height: {this.state.height} </li>
      <li> Mass: {this.state.mass} </li>
      <li> Hair Color: {this.state.hairColor} </li>
      <li>  Skin Color: {this.state.skinColor} </li>
      <li> Eye Color: {this.state.eyeColor} </li>
      <li> Birth Year: {this.state.birthYear} </li>
      <li> Gender: {this.state.gender} </li>
    </ul>)
  }

  render() {
    return (
      <div className="modal is-clipped is-active">
        <div className="modal-background" onClick={this.props.onClick}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.char.name}</p>
            <button className="delete" aria-label="close" onClick={this.props.onClick}></button>
          </header>
          <section className="modal-card-body">
            {this.renderContent()}
          </section>
        </div>
      </div>
    )
  }
}