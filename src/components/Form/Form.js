import React from "react"

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            name: "",
            date: "",
            time: "",
            number: "",
            id: 0
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    clearInputs = () => {
        this.setState({
            name: "",
            date: "",
            time: "",
            number: "",
            id: 0
        })
    }

    submitReservation = event => {
        event.preventDefault()
        this.setState({id: Date.now()})
        this.props.addReservation(this.state)
        this.clearInputs()
    }

    render() {
        return (
            <form>
                <input 
                type="text" 
                name="name" 
                value={this.state.name} 
                placeholder="Name" 
                onChange={event => this.handleChange(event)}
                /> 
                <input 
                    type="text" 
                    name="date" 
                    value={this.state.date} 
                    placeholder="Date" 
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type="text" 
                    name="time" 
                    value={this.state.time} 
                    placeholder="Time" 
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type="text" 
                    name="number" 
                    value={this.state.number} 
                    placeholder="Number" 
                    onChange={event => this.handleChange(event)}
                />
                <button type="submit">Make Reservation!</button>
            </form>


        )
    }
}

export default Form