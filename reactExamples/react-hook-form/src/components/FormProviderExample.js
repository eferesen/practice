import { Button, Grid } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomFormText from './CustomFormText';
import CustomFormTextContainer from './CustomFormTextContainer';

import { formSchema } from '../schema/schema';

const FormProviderExample = () => {
  const methods = useForm({ resolver: yupResolver(formSchema) });

  const formSubmitHandler = (data) => console.log(data);

  return (
    <div>
      <p>Combined Forms</p>
      <Grid container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <Grid item>
              {/* Not memoised */}
              <CustomFormText
                label={'Name'}
                name={'name'}
              />
            </Grid>
            <Grid item>
              {/* memoised */}
              <CustomFormTextContainer
                label={'Message'}
                name={'message'}
              />
            </Grid>
            <Grid item>
              <Button type={'submite'} variant={'contained'} color={'primary'}>Submit</Button>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
    </div>
  );
};

export default FormProviderExample;
