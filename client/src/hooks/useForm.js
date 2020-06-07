// write your custom hook here to control your checkout form
import { useState } from "react";



/* logic
  - state for the input ✅
  - handleChanges ✅
  - clearForm ✅

  super form hook
  - naming convention ✅
  - any number of inputs in a form ✅
  */

export const useForm = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValue);
  };

  return [values, handleChanges, clearForm];
};
