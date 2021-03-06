import React from 'react';

export class TicketForm extends React.Component {

    render() {
        return (
            <div>
                <h1>Ticket Form</h1>
                <form onSubmit={this.props.createTicket}>
                    {this.props.airlines.map(airline => (
                        <div key={airline.id}>
                            <label>
                                <input value={airline.id} name="airline" type="radio" /> {airline.name}
                            </label>
                        </div>
                    ))}
                    <input type="submit" />
                </form>
            </div>
        );
    }
}