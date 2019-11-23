import React, { useMemo } from 'react';

const Ticker = ({
  textItems = ['default', 'value'], fullWidth = true, animate = false, repeatLength = 5,
}) => {
  const printedValue = useMemo(() => {
    const value = [];
    for (let i = 0; i < repeatLength; i++) {
      textItems.forEach((item, index) => {
        value.push(item);
        if (i < repeatLength - 1 || index + 1 !== textItems.length) value.push(' ・ ');
      });
    }
    return value;
  }, [repeatLength, textItems]);

  return <div className="font-display uppercase w-screen whitespace-no-wrap text-xl">{printedValue.join('')}</div>;
};

export default Ticker;
