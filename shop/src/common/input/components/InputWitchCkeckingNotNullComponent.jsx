import React from 'react';
import ErrorSymbol from '../../errorSymbol/components/ErrorSymbolComponent';
import removeErrorNotNull from '../../untils/removeErrorNotNull';

const InputWitchCkeckingNotNull = ({
  classInput, initialValue, classSymbol, handleChange,
}) => (
  <>
    <input
      className={classInput}
      type="text"
      name="firstName"
      value={initialValue}
      onChange={(e) => handleChange(e, classInput, classSymbol)}
    />
    <ErrorSymbol Class={`${classSymbol} -disabled`} />
  </>
);
export default InputWitchCkeckingNotNull;
