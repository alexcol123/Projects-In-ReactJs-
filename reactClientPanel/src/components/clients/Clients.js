import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '1',
        firstName: 'Kevin',
        lastName: 'Nash',
        email: 'Bigsexy@yahoo.com',
        phone: '989-874-8859',
        balance: '52'
      },
      {
        id: '2',
        firstName: 'Jenny',
        lastName: 'Jones',
        email: 'JJ@yahoo.com',
        phone: '974-214-4211',
        balance: '125.25'
      },
      {
        id: '3',
        firstName: 'Boe',
        lastName: 'Jackson',
        email: 'BJ@yahoo.com',
        phone: '174-574-4211',
        balance: '25'
      }
      
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              {' '}
              <h2>
                <i className="fas fa-users" /> Clients{' '}
              </h2>
            </div>
            <div className="col-md-6">total</div>
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>

          <tbody>
            {clients.map(client =>( 
              <tr key={client.id}>
                <td>{client.firstName} {client.lastName}</td>
                <td>{client.email}</td>
                <td>${parseFloat(client.balance).toFixed(2)}</td>
                <td>
                  <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm" >
              <i className="fas fa-arrow-circle-right"></i> Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
