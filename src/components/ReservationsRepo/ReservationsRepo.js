import React from "react"
import ReservationCard from "../ReservationCard/ReservationCard"
import "./ReservationCard.css"

const ReservationsRepo = props => {
    const resComps = props.reservations.map(reservation => {
        return (
            <ReservationCard 
                date={reservation.date}
                key={reservation.id}
                id={reservation.id}
                name={reservation.name}
                number={reservation.number}
                time={reservation.time}
            />
        )
    })

    return (
        <>
        {resComps}
        </>
    )
}

export default ReservationsRepo