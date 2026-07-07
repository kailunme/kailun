import FaultyTerminal from "./FaultyTerminal.jsx";

export default function HeroBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <FaultyTerminal
        scale={1.5}
        digitSize={1.2}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0.75}
        curvature={0.1}
        tint="#A7EF9E"
        mouseReact
        mouseStrength={0.5}
        brightness={0.6}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
