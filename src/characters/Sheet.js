import React from 'react';
import Details from './Details';
import './Sheet.css';

function Character(props) {
  return (
    <div className="card card-pointer" onClick={props.onClick}>
      <div className="card-content">
        <div className="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Tion Medon</p>
            <p className="subtitle is-6">Male Pau'an</p>
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
      showDetails: false
    }
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

  render() {
    return (
      <div className="columns is-multiline is-mobile">
        <div className="column is-3">
          <Character onClick={() => this.showDetails()} />
        </div>
        <Details onClick={() => this.hideDetails()} isActive={this.state.showDetails} />
      </div>
    )
  }
}

export default Sheet;