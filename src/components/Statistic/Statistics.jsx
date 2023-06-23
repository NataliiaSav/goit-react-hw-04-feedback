import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css"

export const Statistics = ({good, neutral, bad, total, positive}) => {
    return (
        <div className={css.stat}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positiv feedback: { positive} %</p>
        </div>
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
}