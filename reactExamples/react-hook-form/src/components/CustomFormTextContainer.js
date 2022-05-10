import React from 'react';
import { useFormContext } from 'react-hook-form';
import CustomFormTextMemo from './CustomFormTextMemo';

const CustomFormTextContainer = ({ name, label }) => {
  const methods = useFormContext();

  return <CustomFormTextMemo methods={methods} label={label} name={name} />;
};

export default CustomFormTextContainer;
