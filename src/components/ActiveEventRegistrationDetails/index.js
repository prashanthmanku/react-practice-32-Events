import './index.css'

const eventregistrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {eventregistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="initial-text">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegister = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="register-text">
        A live performance brings so much to your relationship with dance.
        seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderAlreadyRegister = () => (
    <div className="already-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-tex">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClopsedView = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-img"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We Will reopen the registrations soon!
      </p>
    </div>
  )

  const renderContent = () => {
    switch (eventregistrationStatus) {
      case eventregistrationStatusConstants.initial:
        return renderNoActiveEventView()
      case eventregistrationStatusConstants.yetToRegister:
        return renderRegister()
      case eventregistrationStatusConstants.registered:
        return renderAlreadyRegister()
      case eventregistrationStatusConstants.closed:
        return renderRegistrationsClopsedView()
      default:
        return null
    }
  }

  return (
    <div className="active-event-container">
      <div className="active-event-width-container">{renderContent()}</div>
    </div>
  )
}
export default ActiveEventRegistrationDetails
