import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Donaldo Lopez',
        email: 'hormigaLover@yahoo.net',
        phone: '804-547-8874'
      },
      {
        id: 2,
        name: 'Olguita Correa',
        email: 'boricua@yahoo.net',
        phone: '804-147-7844'
      },
      {
        id: 3,
        name: 'Jorge Santos',
        email: 'NyRican@yahoo.net',
        phone: '804-514-0102'
      }
    ],
    dispatch: action => 
      this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
