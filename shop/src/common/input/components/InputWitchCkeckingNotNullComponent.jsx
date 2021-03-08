import React from 'react';
import ErrorSymbol from '../../errorSymbol/components/ErrorSymbolComponent';
import removeErrorNotNull from '../../untils/removeErrorNotNull';

const InputWitchCkeckingNotNull = ({
  initialValue, classInput, classSymbol, updateData, type, name,
}) => (
  <>
    <input
      className={classInput}
      type={type}
      name={name}
      value={initialValue}
      onChange={(e) => {
        updateData(e.target.value, name);
        removeErrorNotNull(classInput, classSymbol);
      }}
    />
    <ErrorSymbol Class={`${classSymbol} -disabled`} />
  </>
);
export default InputWitchCkeckingNotNull;
