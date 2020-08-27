import { motion } from 'framer-motion';
import React from 'react';

export default function ChartPopup({ items, id, onClose }) {
  // const { category, title } = items.find((item) => item.id === id);

  console.log('fun');

  return (
    <div className="top-0 left-0 right-0 z-50 fixed w-full h-full flex justify-center items-center pointer-events-none overflow-hidden p-0">
      <motion.div
        className="pointer-events-none relative bg-white overflow-hidden w-full h-auto max-w-xl my-0 mx-auto shadow-xl rounded border-solid border border-gray-200 p-12"
        layoutId={`card-container-${id}`}
      >
        {/* <motion.div
          className="card-image-container"
          layoutId={`card-image-container-${id}`}
        >
          <img className="card-image" src={`images/${id}.jpg`} alt="" />
        </motion.div> */}
        {/* <motion.div
          className="title-container"
          layoutId={`title-container-${id}`}
        > */}
        {/* <span className="category">{category}</span>
        <h2>{title}</h2> */}
        {/* <span className="category">hay</span>
          <h2>le gay</h2> */}
        <motion.div
          className="text-5xl uppercase leading-none font-display font-black"
          layoutId={`title-${id}`}
        >
          {id}
        </motion.div>
        <div>4%</div>
        {/* </motion.div> */}
        <motion.div className="pt-12" animate>
          pewper scewper
        </motion.div>
      </motion.div>
    </div>
  );
}
