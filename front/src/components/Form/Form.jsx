import React from 'react';

const Form = (props) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (!inputs.email) {
      validationErrors.email = 'Se requiere un email';
    } else if (!/^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,4})(\.[a-z]{2,4})?$/i.test(inputs.email)) {
      validationErrors.email = 'Se requiere un email válido';
    }

    if (!inputs.password) {
      validationErrors.password = 'Se requiere una contraseña';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Llama a la función "login" pasando los datos del formulario
      props.login(inputs);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='loginContainer'>
      <form onSubmit={handleSubmit}>
        <h2>Bienvenido!</h2>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={inputs.email}
            onChange={handleChange}
            className={errors.email ? 'warning' : ''}
          />
          {errors.email && <p className='danger'>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={inputs.password}
            onChange={handleChange}
            className={errors.password ? 'warning' : ''}
          />
          {errors.password && <p className='danger'>{errors.password}</p>}
        </div>
        <button type='submit' className='material-symbols-outlined'>
          <span>login</span>
        </button>
      </form>
    </div>
  );
};

export default Form;