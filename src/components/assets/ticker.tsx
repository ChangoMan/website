import React, { useMemo } from 'react';

interface Props {
  textItems: string[];
  repeatLength?: number;
}

const Ticker = ({
  textItems = ['default', 'value'],
  repeatLength = 5
}: Props) => {
  const [initialString, printedValue] = useMemo(() => {
    let thisInitialString = '';
    const value: string[] = [];
    for (let i = 0; i < repeatLength; i++) {
      textItems.forEach((item, index) => {
        value.push(item);
        if (i < repeatLength - 1 || index + 1 !== textItems.length)
          value.push(' ・ ');
      });

      if (i === 0) {
        thisInitialString = value.slice(0, -1).join('');
      }
    }
    return [thisInitialString, value];
  }, [repeatLength, textItems]);

  return (
    <div className="font-display uppercase w-screen whitespace-normal lg:whitespace-no-wrap text-xl max-w-md lg:max-w-none text-center mt-8 lg:mt-0 px-2 lg:px-0">
      <span className="inline lg:hidden">{initialString}</span>
      <span className="hidden lg:inline">{printedValue.join('')}</span>
    </div>
  );
};

export default Ticker;
