import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@material-ui/core';


import {login} from '../schema/schema';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(login) });

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <p>Form</p>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name="email"
          type="email"
          control={control}
          defaultValue="example@example.com"
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />
        <br />
        <br />
        <Controller
          name="password"
          autocomplete="on"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"              
              name="password"
              aria-invalid='false'
              label="Password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          )}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
