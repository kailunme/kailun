import { useState, useEffect } from 'react';

const LINE1 = 'building things';
const LINE2 = 'that work.';
const SPEED = 65;
const LINE_PAUSE = 350;

export default function HeroTitle() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [phase, setPhase] = useState('line1');

  useEffect(() => {
    let t;
    if (phase === 'line1') {
      if (line1.length < LINE1.length) {
        t = setTimeout(() => setLine1(LINE1.slice(0, line1.length + 1)), SPEED);
      } else {
        t = setTimeout(() => setPhase('line2'), LINE_PAUSE);
      }
    } else if (phase === 'line2') {
      if (line2.length < LINE2.length) {
        t = setTimeout(() => setLine2(LINE2.slice(0, line2.length + 1)), SPEED);
      } else {
        setPhase('done');
      }
    }
    return () => clearTimeout(t);
  }, [phase, line1, line2]);

  return (
    <h1 className="hero-title">
      <span className="title-line">{line1}</span>
      <span className="title-line dim-line">{line2}</span>
    </h1>
  );
}
