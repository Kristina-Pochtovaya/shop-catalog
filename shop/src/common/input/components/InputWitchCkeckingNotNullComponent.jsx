import React from 'react';
import ErrorSymbol from '../../errorSymbol/components/ErrorSymbolComponent';

const InputWitchCkeckingNotNull = ({
  initialValue, classInput, classSymbol, updateData = '', type, name, removeErrorNotNull = '',
  removeErrorLength = '', classerrorLength = '', onEnterEmail = '',
}) => (
  <>
    <input
      className={classInput}
      type={type}
      name={name}
      value={initialValue}
      onChange={(e) => {
        if (updateData !== '') { updateData(e.target.value, name); }
        if (removeErrorNotNull !== '') { removeErrorNotNull(classInput, classSymbol); }
        if (removeErrorLength !== '') { removeErrorLength(classerrorLength); }
        if (onEnterEmail !== '') { onEnterEmail(e.target.value); }
      }}
    />
    <ErrorSymbol Class={`${classSymbol} -disabled`} />
  </>
);
export default InputWitchCkeckingNotNull;
