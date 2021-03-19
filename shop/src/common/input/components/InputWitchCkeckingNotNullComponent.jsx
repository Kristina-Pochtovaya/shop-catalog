import React from 'react';
import ErrorSymbol from '../../errorSymbol/components/ErrorSymbolComponent';
import removeErrorNotNull from '../../untils/removeErrorNotNull';
import removeErrorLength from '../../untils/removeErrorLength';

const InputWitchCkeckingNotNull = ({
  initialValue, classInput, classSymbol, updateData, type, name, removeErrorLengthFunc = '', classerrorLength = '', onEnterEmail = '',
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
        if (removeErrorLengthFunc !== '') { removeErrorLength(classerrorLength); }
        if (onEnterEmail !== '') { onEnterEmail(initialValue); }
      }}
    />
    <ErrorSymbol Class={`${classSymbol} -disabled`} />
  </>
);
export default InputWitchCkeckingNotNull;
