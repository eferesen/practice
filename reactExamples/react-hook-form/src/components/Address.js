import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const Address = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();


  return (
    <>
      <div>
        <Controller
          defaultValue={''}
          name={'city'}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={'City'}
              variant={'outlined'}
              error={!!errors.city}
              helperText={errors.city ? errors.city?.message : ''}
            />
          )}
        />
      </div>
      <br />
      <br />
      <div>
        <Controller
          defaultValue={''}
          control={control}
          name={'state'}
          render={({ field }) => (
            <TextField
              {...field}
              variant={'outlined'}
              label={'State'}
              error={!!errors.state}
              helperText={errors.state ? errors.state?.message : ''}
            />
          )}
        />
      </div>
    </>
  );
};

export default Address;
