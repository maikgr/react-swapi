import React from 'react';

function Details(props) {
  return (
    <div className={"modal is-clipped " + (props.isActive ? 'is-active' : '')}>
      <div className="modal-background" onClick={props.onClick}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Tion Medon</p>
          <button className="delete" aria-label="close" onClick={props.onClick}></button>
        </header>
        <section className="modal-card-body">
          <ol>
            <li>
              Height: 172
            </li>
            <li>
              Mass: 77
            </li>
            <li>
              Hair Color: Blond
            </li>
            <li>
              Skin Color: Fair
            </li>
            <li>
              Eye Color: Blue
            </li>
            <li>
              Birth Year: 19BBY
            </li>
            <li>
              Gender: Male
            </li>
            <li>
              Homeworld:
            </li>
            <li>
              Films:
            </li>
            <li>
              Species:
            </li>
            <li>
              Vehicles:
            </li>
            <li>
              Starships:
            </li>
          </ol>
        </section>
      </div>
    </div>
  )
}

export default Details;