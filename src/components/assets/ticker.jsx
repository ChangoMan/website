import React, { useMemo } from 'react';

const Ticker = ({
  textItems = ['default', 'value'],
  fullWidth = true,
  animate = false,
  repeatLength = 5
}) => {
  const [initialString, printedValue] = useMemo(() => {
    let initialString = '';
    const value = [];
    for (let i = 0; i < repeatLength; i++) {
      textItems.forEach((item, index) => {
        value.push(item);
        if (i < repeatLength - 1 || index + 1 !== textItems.length)
          value.push(' ・ ');
      });

      if (i === 0) {
        initialString = value.slice(0, -1).join('');
      }
    }
    return [initialString, value];
  }, [repeatLength, textItems]);

  return (
    <div className="font-display uppercase w-screen whitespace-normal lg:whitespace-no-wrap text-xl max-w-md lg:max-w-none text-center mt-8 lg:mt-0 px-2 lg:px-0">
      <span className="inline lg:hidden">{initialString}</span>
      <span className="hidden lg:inline">{printedValue.join('')}</span>
    </div>
  );
};

export default Ticker;
