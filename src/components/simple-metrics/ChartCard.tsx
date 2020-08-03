import { linearGradientDef } from '@nivo/core';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaExpandAlt } from 'react-icons/fa';

export interface Props {
  crumbs?: { to?: string; title: string }[];
}

const ChartCard = ({
  title,
  primaryMetric,
  primaryMetricPrintout,
  data,
  colorScheme,
}: Props) => {
  const crumbList = false;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div
        className={`${
          modalOpen &&
          'z-50 fixed top-0 left-0 w-screen h-screen flex justify-center items-center'
        }`}
      >
        {modalOpen && (
          <motion.div
            className="fixed z-50 top-0 left-0 w-screen h-screen"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <motion.div
          className={`rounded overflow-hidden shadow-xl border-solid border border-gray-200 bg-white ${
            modalOpen ? 'z-50 fixed' : 'relative'
          }`}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="absolute bottom-0 opacity-50 z-0"
            style={{ width: '100%', height: '75px' }}
          >
            <ResponsiveLine
              data={data}
              margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
              yScale={{
                type: 'linear',
                min: 0,
                max: 'auto',
              }}
              curve="natural"
              colors={colorScheme}
              enableArea={true}
              axisTop={null}
              axisRight={null}
              axisBottom={null}
              axisLeft={null}
              enableGridX={false}
              enableGridY={false}
              defs={[
                linearGradientDef('gradientA', [
                  { offset: 0, color: 'inherit' },
                  { offset: 100, color: 'inherit', opacity: 0 },
                ]),
              ]}
              fill={[{ match: '*', id: 'gradientA' }]}
              enablePoints={false}
              isInteractive={false}
              enableCrosshair={false}
            />
          </div>
          <div className="relative z-10">
            <div
              className="relative"
              style={{ width: '100%', height: '300px' }}
            >
              <ResponsivePie
                data={[
                  {
                    id: 'metric',
                    value: primaryMetric,
                    color: '#000',
                  },
                  {
                    id: 'spacer',
                    label: 'haskell',
                    value: 100 - primaryMetric,
                    color: '#ddd',
                  },
                ]}
                margin={{ top: 0, right: 50, bottom: 30, left: 50 }}
                startAngle={-135}
                endAngle={135}
                innerRadius={0.7}
                colors={['#000', 'rgba(0,0,0,0.1)']}
                enableRadialLabels={false}
                enableSlicesLabels={false}
                animate={true}
                isInteractive={false}
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <div className="text-4xl uppercase leading-none font-display font-black">
                  {title}
                </div>
                <div>{primaryMetricPrintout}</div>
              </div>

              <button
                className="absolute top-0 right-0 mt-1 mr-1 p-2 text-1xl text-gray-500 rounded hover:bg-gray-500 hover:text-white"
                onClick={() => setModalOpen(true)}
              >
                <FaExpandAlt />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChartCard;
