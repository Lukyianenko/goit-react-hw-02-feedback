import PropTypes from "prop-types";
import {} from './Feadback.styled';

export const FeedbackOptions = ({ incrementNeutral, incrementGood, incrementBad }) => (
        <ul>
        <li><button type="button" onClick={() => incrementGood()}>Good</button></li>
        <li><button type="button" onClick={() => incrementNeutral()}>Neutral</button></li>
        <li><button type="button" onClick={() => incrementBad()}>Bad</button></li>
        </ul>
)

FeedbackOptions.propTypes = {
        incrementNeutral: PropTypes.func.isRequired,
        incrementGood: PropTypes.func.isRequired, 
        incrementBad: PropTypes.func.isRequired
}


