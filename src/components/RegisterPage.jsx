import React, {useState} from 'react';
import FormInput from './FormInput';

const RegisterPage = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address',
      label: 'Email',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special charater',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm password',
      errorMessage: "Passwords don't match",
      label: 'Confirm password',
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: 'firstName',
      type: 'text',
      placeholder: 'First name',
      errorMessage: 'First name should be 3-20 characters long',
      label: 'First name',
      pattern: "^[a-zA-Z]{3,20}$",
      required: true,
    },
    {
      id: 5,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last name',
      errorMessage: 'Last name should be 3-20 characters long',
      label: 'Last name',
      pattern: "^[a-zA-Z]{3,20}$",
      required: true,
    },
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values); 
  return (
    <div className="registerPage">
      <form onSubmit={handleSubmit}>
        <h2>Registration</h2>

        {inputs.map((input) => (
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  )
}

export {RegisterPage};
