import { useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const CustomFormText = ({ label, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      label={label}
      variant={'outlined'}
      error={!!errors[name]}
      helperText={errors[name]?.message ?? ''}
      fullWidth
      margin={'dense'}
      {...register(name)}
    />
  );
};
export default CustomFormText;
