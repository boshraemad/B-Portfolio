import LightRays from '../../react-bits/LightRays/LightRays';


export default function TopLight() {
  return (
    <div className="w-full h-[600px] absolute">
  <LightRays
    raysOrigin="top-center"
    raysColor="#ff00a2"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>
  )
}
