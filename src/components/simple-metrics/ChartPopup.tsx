import { ResponsiveLine } from '@nivo/line';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { motion } from 'framer-motion';
import React from 'react';

const migrateData = (data) => {
  const keyedSet = {};

  data.map((group) => {
    const { id, data: groupData } = group;
    groupData.map((datum) => {
      if (!keyedSet[datum.x]) keyedSet[datum.x] = {};
      keyedSet[datum.x][id] = datum.y;
    });
  });

  return keyedSet;
};

export default function ChartPopup({ items, id, onClose, data, colorScheme }) {
  // const { category, title } = items.find((item) => item.id === id);

  console.log('fun');

  const daturd = migrateData(data);

  return (
    <motion.div
      className=" relative bg-white overflow-hidden w-full h-auto my-0 mx-auto shadow-xl rounded border-solid border border-gray-200 p-12"
      layoutId={`card-container-${id}`}
      onClick={onClose}
    >
      <motion.div
        key="selected-content"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div className="text-5xl uppercase leading-none font-display font-black">
          {id}
        </motion.div>
        <div>4%</div>

        <div className="w-full h-56">
          <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 10, bottom: 50, left: 10 }}
            yScale={{
              type: 'linear',
              min: 0,
              max: 'auto',
            }}
            curve="natural"
            colors={colorScheme}
            // enableArea={true}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            // enableGridX={false}
            enableGridY={false}
            // defs={[
            //   linearGradientDef('gradientA', [
            //     { offset: 0, color: 'inherit' },
            //     { offset: 100, color: 'inherit', opacity: 0 },
            //   ]),
            // ]}
            fill={[{ match: '*', id: 'gradientA' }]}
            // enablePoints={false}
            // isInteractive={false}
            // enableCrosshair={false}
          />
        </div>

        <div className="grid grid-cols-5 gap-5">
          {Object.keys(daturd).map((rowDatumKey) => (
            <>
              <div>{format(parseISO(rowDatumKey), 'MMM d, YY')}</div>
              {Object.keys(daturd[rowDatumKey]).map((colDatum) => (
                <div>
                  {parseFloat(daturd[rowDatumKey][colDatum]).toFixed(2)}
                </div>
              ))}
            </>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
