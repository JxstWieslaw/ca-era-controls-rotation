import React, { useMemo } from "react";
import * as THREE from "three";
import { BoyHairstyle1, BoyHairstyle2, BoyHairstyle3,BoyHairstyle4,BoyHairstyle6,BoyHairstyle7,BoyHairstyle8,BoyHairstyle9,BoyHairstyle10,BoyHairstyle12 } from "./objects";
import {
  normalMap1,
  normalMap2,
  normalMap3,
  normalMap6,
  normalMap7,
  normalMap8,
  normalMap9,
  normalMap10,
} from "./textures";

function BoyHairstyle({
  appliedBoyHairStyle,
  appliedFace,
  textureBHS,
  colorBHS,
}) {
  const normalMap_1 = useMemo((normal) => new THREE.TextureLoader().load(normalMap1), [normalMap1]);
  const normalMap_2 = useMemo(() => new THREE.TextureLoader().load(normalMap2), [normalMap2]);
  const normalMap_3 = useMemo(() => new THREE.TextureLoader().load(normalMap3), [normalMap3]);
  const normalMap_6 = useMemo(() => new THREE.TextureLoader().load(normalMap6), [normalMap6]);
  const normalMap_7 = useMemo(() => new THREE.TextureLoader().load(normalMap7), [normalMap7]);
  const normalMap_8 = useMemo(() => new THREE.TextureLoader().load(normalMap8), [normalMap8]);
  const normalMap_9 = useMemo(() => new THREE.TextureLoader().load(normalMap9), [normalMap9]);
  const normalMap_10 = useMemo(() => new THREE.TextureLoader().load(normalMap10), [normalMap10]);
  normalMap_1.flipY=false;
  normalMap_2.flipY=false;
  normalMap_3.flipY=false;
  normalMap_6.flipY=false;
  normalMap_7.flipY=false;
  normalMap_8.flipY=false;
  normalMap_9.flipY=false;
  normalMap_9.flipY=false;
  normalMap_10.flipY=false;
  
  const boyHairStyle = useMemo(() => {
    console.log("BOYHAIRSTYLE RERENDERED");
    return (
      <>
        {
          appliedBoyHairStyle === "BHS1" &&
          appliedFace === "F1" && (
            <BoyHairstyle1 texture={textureBHS} color={colorBHS} normalMap={normalMap_1}/>
          )}
        {
          appliedBoyHairStyle === "BHS2" &&
          appliedFace === "F1" && (
            <BoyHairstyle2 texture={textureBHS} color={colorBHS}  normalMap={normalMap_2}/>
          )}
        {
          appliedBoyHairStyle === "BHS3" &&
          appliedFace === "F1" && (
            <BoyHairstyle3 texture={textureBHS} color={colorBHS}  normalMap={normalMap_3}/>
          )}
      </>
    );
  }, [appliedBoyHairStyle, appliedFace, textureBHS, colorBHS]);
  return <>{boyHairStyle}</>;
}

export default BoyHairstyle;
