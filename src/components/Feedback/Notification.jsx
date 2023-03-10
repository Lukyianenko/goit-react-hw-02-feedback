import PropTypes from "prop-types";

export const Notification = ({ message }) => (
    <>
    <h2>Statistics</h2>
    <p>{message}</p>
    </>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}