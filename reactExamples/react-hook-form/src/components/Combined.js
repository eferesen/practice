import { yupResolver } from '@hookform/resolvers/yup';
import {nameBio, addressBio} from '../schema/schema';
import { useForm, FormProvider } from 'react-hook-form';
import Address from './Address';
import NameForm from './NameForm';

const Combined = () => {
  const methods = useForm({ resolver: yupResolver(nameBio.concat(addressBio)) });

  const formSubmitHandler = (data) => console.log(data);

  return (
    <div>
      <p>Combined Forms</p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          <NameForm />
          <br />
          <br />
          <Address />
          <br />
          <br />
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};
export default Combined;
