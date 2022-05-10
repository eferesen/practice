import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const NameForm = () => {
  const {
    control,
    formState: { errors  },
  } = useFormContext();

  return (
    <>
      <div>
        <Controller
          defaultValue={''}
          name={'firstName'}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={'First Name'}
              variant={'outlined'}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName?.message : ''}
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
          name={'lastName'}
          render={({ field }) => (
            <TextField
              {...field}
              variant={'outlined'}
              label={'Last Name'}
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName?.message : ''}
            />
          )}
        />
      </div>
    </>
  );
};
export default NameForm;
