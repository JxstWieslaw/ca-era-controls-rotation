import React, { useMemo } from "react";
import { Face1, Face2, Face3, Face4, Face5, Face6 } from "./objects";

function Face({ appliedFace}) {
  const faces = useMemo(() => {
    console.log("FACES RERENDERED");
    return (
      <>
        {appliedFace === "F4" && <Face1 />}
        {appliedFace === "F2" && <Face2 />}
        {appliedFace === "F3" && <Face3 />}
        {appliedFace === "F1" && <Face4 />}
        {appliedFace === "F5" && <Face5 />}
        {appliedFace === "F6" && <Face6 />}
      </>
    );
  }, [appliedFace]);
  return <>{faces}</>;
}

export default Face;
