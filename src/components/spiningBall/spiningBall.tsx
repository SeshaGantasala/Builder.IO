"use client";
import React, { useState } from 'react';
import { Builder } from '@builder.io/react';
import styles from './styles.module.css';

const SpinningBall = () => {
 const [isSpinning, setIsSpinning] = useState(true);
 const startSpin = () => {
   setIsSpinning(true);
 };
 const stopSpin = () => {
   setIsSpinning(false);
 };
 return (
<div>
<div className={isSpinning ? styles.spinningBall : styles.stoppedBall}></div>
<button onClick={startSpin}>Start</button>
<button onClick={stopSpin}>Stop</button>
</div>
 );
};
Builder.registerComponent(SpinningBall, {
  name: 'SpiningBall',
   });

export default SpinningBall;