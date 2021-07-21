import React from "react" 

const ReservationCard = props => {
    const { date, id, name, number, time } = props

    return (
        <div>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <h4>{time}</h4>
            <h4>{number}</h4>
            <button>X</button>
        </div>
    )
    }

export default ReservationCard