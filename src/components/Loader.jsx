import { Html, useProgress } from "@react-three/drei";

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="font-black text-xl text-center">
      <div className="loader">
        <span>{progress} % loaded</span>
      </div>
    </Html>
  );
};
