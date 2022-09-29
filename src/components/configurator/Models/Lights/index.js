import { useMemo } from "react";

function Lights() {
  const lights = useMemo(() => {
    console.log("LIGHTS RERENDERED");
    return (
      <>
        <>
          <ambientLight intensity={0.3} />
          <pointLight intensity={0.8} position={[10, 15, 10]} />
          <pointLight intensity={0.8} position={[10, 15, -10]} />
          <pointLight intensity={0.8} position={[-10, 15, -10]} />
        </>
      </>
    );
  }, []);

  return <>{lights}</>;
}

export default Lights;
