import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  onClickEvent = () => {
    const {event, onChangeActiveRegistrationStatus} = this.props
    const {registrationStatus, id} = event
    onChangeActiveRegistrationStatus(registrationStatus, id)
  }

  render() {
    const {event, activeId} = this.props
    const {imageUrl, name, location, id} = event
    const itemImgClassName =
      activeId === id ? 'event-img item-border' : 'event-img'
    return (
      <li className="event-item-container ">
        <button
          type="button"
          onClick={this.onClickEvent}
          className="img-button"
        >
          <img src={imageUrl} alt="event" className={itemImgClassName} />
        </button>

        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </li>
    )
  }
}

export default EventItem
