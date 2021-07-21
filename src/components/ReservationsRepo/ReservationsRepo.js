import React from "react"

const ReservationsRepo = props => {
    const { date, id, name, number, time } = props
    const resComps = props.reservations.map(reservation => {
        return (
            <ReservationCard 
                date={date}
                key={id}
                id={id}
                name={name}
                number={number}
                time={time}
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