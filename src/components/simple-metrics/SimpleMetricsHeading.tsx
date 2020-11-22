import { motion } from 'framer-motion';
import React from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

/**
 * Types
 */
export interface Props {
  mightBeDown?: boolean;
  isLoading?: boolean;
  hasError?: boolean;
}

/**
 *
 * Component
 *
 */
const SimpleMetricsHeading = ({ mightBeDown, isLoading, hasError }: Props) => (
  <motion.div
    className="mt-12 mb-8 flex justify-between items-center"
    layoutId={`page-title`}
  >
    <div className="text-left">
      <div className="font-black font-display text-5xl uppercase leading-none">
        Simple Metrics
      </div>
      <div className="font-light font-display text-2xl leading-none">
        for Raspberry Pi
      </div>
    </div>
    {!hasError && !isLoading && (
      <div className="text-5xl">
        {mightBeDown ? (
          <div className="bg-red-200 rounded-full p-1">
            <FaExclamationCircle className="text-red-700" />
          </div>
        ) : (
          <div className="bg-green-200 rounded-full p-1 flex items-center">
            <FaCheckCircle className="text-green-600" />
          </div>
        )}
      </div>
    )}
    {isLoading && (
      <div className="bg-gray-200 rounded-full p-1 text-5xl ">
        <div
          className="rounded-full animate-spin border-solid border-4 border-gray-200"
          style={{
            borderLeftColor: '#bbb',
            height: '1em',
            width: '1em',
          }}
        ></div>
      </div>
    )}
  </motion.div>
);

export default SimpleMetricsHeading;
