import React, { useState, useEffect } from 'react';
import Form from './Form';
import User from './User';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
  key: ''
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: ''
};

const initialUsers = [
  {name: 'Sergio Alvarez', email: 'sa@gmail.com', password: 'sa9001julyruby', key:'.123456789'}
];

const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {

  };

  const postNewUser = (newUser) => {

  };

  const inputChange = (name, value) => {

  };

  const formSubmit = () => {

  };

  return (
    <div className="container">
      <header>
        <h1>User App</h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {users.map((user) => {
        return <User key={user.id} details={user}/>
      })}
    </div>
  );
}
