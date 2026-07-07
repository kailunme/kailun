import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LINE1 = 'building things';
const LINE2 = 'that work.';
const SPEED = 65;
const LINE_PAUSE = 350;

export default function HeroTitle() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  // phase: 'line1' | 'pause' | 'line2' | 'done'
  const [phase, setPhase] = useState('line1');
  const cursor1Ref = useRef(null);
  const cursor2Ref = useRef(null);

  // start cursor blink animation on whichever cursor is active
  useEffect(() => {
    const el = phase === 'line2' || phase === 'done' ? cursor2Ref.current : cursor1Ref.current;
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.set(el, { opacity: 1 });
    gsap.to(el, { opacity: 0, duration: 0.5, repeat: -1, yoyo: true, ease: 'power2.inOut' });
  }, [phase]);

  // typing state machine
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
      <span className="title-line">
        <span className="title-text-wrap">
          {line1}
          {(phase === 'line1' || phase === 'pause') && (
            <span ref={cursor1Ref} className="hero-cursor">_</span>
          )}
        </span>
      </span>
      <span className="title-line dim-line">
        <span className="title-text-wrap">
          {line2}
          {(phase === 'line2' || phase === 'done') && (
            <span ref={cursor2Ref} className="hero-cursor">_</span>
          )}
        </span>
      </span>
    </h1>
  );
}
