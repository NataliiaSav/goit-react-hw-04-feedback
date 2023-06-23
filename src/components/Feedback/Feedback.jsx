import React  from "react";
import PropTypes from "prop-types";
import css from './Feedback.module.css'

export const Feedback = ({options, onLeaveFeedback}) => {
        return (
            <>
            <div className = {css.buttons}>
                    {options.map(option =>{
                        return (
                            <button className = {css.btn} key = {option} type = 'button' onClick={() => onLeaveFeedback(option)}>{option}</button>
                        )
                    })}
                </div>
                </>
        )
}
Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };