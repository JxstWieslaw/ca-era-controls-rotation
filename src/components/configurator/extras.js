import "./App.css";
import * as THREE from "three";
import { Suspense, useState, useMemo, useRef } from "react";
import { Canvas,extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CameraControls from "camera-controls";
import { PerspectiveCamera } from "three";
import { FaceObject, face_Objects } from "./Models/Face/swatch";
import {
  BoyHairStyleObject,
  boyHairStyle_Objects,
} from "./Models/HairStyle/Boy/swatch";
import { BoyOption, boyFaceInactive } from "./Options/swatch";
import {
  BoyHairColorObject,
  boyHairColor_Objects,
} from "./Models/HairStyle/Boy/color";
import Lights from "./Models/Lights";
import BoyHairstyle from "./Models/HairStyle/Boy";
import Face from "./Models/Face";
import Loading from "./Loading/Loading";
import { ElementObject, elements_objects } from "./Elements/swatch";
// import { CameraControls1 } from "./Controls/camera_ref.current";

CameraControls.install({ THREE });
extend({ CameraControls })

function Foo() {
  const { camera } = useThree();
  console.log(camera);
}

function Controls({
  zoom,
  focus,
  pos = new THREE.Vector3(),
  look = new THREE.Vector3(),
}) {
  const ref = useRef()
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  // const ref.current = useMemo(() => new CameraControls(camera, gl.domElement), []);

  useFrame((state, delta) => {
    pos.set(focus[zoom].x, focus[zoom].y, focus[zoom].z + 0.2);
    look.set(focus[zoom].x, focus[zoom].y, focus[zoom].z - 0.2);

    state.camera.position.lerp(pos, 1);
    state.camera.updateProjectionMatrix();

    ref.current.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true
    );
    ref.current.update(delta);
  });
  return <cameraControls ref={ref} args={[camera,gl.domElement]} />
}

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 0.7134719790724953, 0.1, 1000);
  return (
    <group position={[0, 3.061616997868383e-16, 5]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}

function Configurator({ history, checkGender }) {
  // const cameraControls = useRef(CameraControls1);
  const [focus, setFocus] = useState({});
  const focusPosition = [
    {
      x: 0,
      y: -4,
      z: 10,
    },
    {
      x: 0,
      y: 0,
      z: 10,
    },
  ];
  console.log("RERENDERED CONFIGURATOR");
  //currently used activeOption
  const [activeOption, setActiveOption] = useState(0);
  const [boyColorActive, setBoyColorActive] = useState(false);
  const [activeElement, setActiveElement] = useState(0);

  //Applied Object
  const [appliedFace, setAppliedFace] = useState("F1");
  const [appliedHairColor, setAppliedHairColor] = useState(null);
  const [appliedBoyHairStyle, setAppliedBoyHairStyle] = useState("BHS2");
  const [colorBHS, setColorBHS] = useState(null);
  const [textureBHS, setTextureBHS] = useState(null);

  const colorChange = [
    {
      color: "#f5e3cb",
    },
    {
      color: "#f2d3b7",
    },
    {
      color: "#f2d2ac",
    },
    {
      color: "#d6ab8b",
    },
    {
      color: "#c38a5f",
    },
    {
      color: "#966640",
    },
    {
      color: "#6e4229",
    },
  ];

  const hairColorChange = [
    {
      color: "#F2A97F",
    },
    {
      color: "#D85F52",
    },
    {
      color: "#D92E37",
    },
    {
      color: "#FC9736",
    },
    {
      color: "#F7BD69",
    },
    {
      color: "#A4D09C",
    },
    {
      color: "#4C8A67",
    },
  ];

  function handleColorChange(index) {
    console.log(index);
    let color;
    if (activeOption === 1) {
      color = hairColorChange[index];
    }
    if (activeOption === 7 || activeOption === 6) {
    }
    let new_mtl;

    if (color.texture) {
      let cur = color.texture;
      cur.repeat.set(color.size[0], color.size[1], color.size[2]);
      cur.wrapS = THREE.RepeatWrapping;
      cur.wrapT = THREE.RepeatWrapping;
      new_mtl = {
        map: cur,
        shininess: color.shininess ? color.shininess : 10,
      };

      if (activeOption === 1) {
        setTextureBHS(new_mtl);
        setColorBHS(null);
      }
    } else {
      console.log("Entered");
      new_mtl = {
        color: color.color,
        shininess: color.shininess ? color.shininess : 10,
      };
      if (activeOption === 1) {
        setColorBHS(new_mtl);
        setTextureBHS(null);
      }
    }
  }

  return (
    <>
      <div className="App">
        <div className="flex flex-col lg:flex-row h-screen">
          <div className="flex flex-row w-full h-1/2 lg:w-1/2  lg:h-full">
            <div className="flex flex-col w-1/6">
              <div className="icons">
                {elements_objects.map((options, index) => (
                  <ElementObject
                    key={index}
                    id={index}
                    options={options}
                    active={activeElement}
                    onClick={() => {
                      setActiveElement(index);
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="w-4/6">
              <Suspense fallback={null}>
                <Canvas flat camera={{ fov: 60, near: 0.1, far: 1000 }}>
                  <Foo />
                  <CameraHelper />
                  <Suspense fallback={null}>
                    {/* <Suspense fallback={null}>
                      <Foo clicked={clicked} setClicked={setClicked} />
                    </Suspense> */}
                    <Suspense fallback={null}>
                      <Lights />
                    </Suspense>
                    <Suspense fallback={null}>
                      <Face appliedFace={appliedFace} />
                    </Suspense>
                    <Suspense fallback={null}>
                      <BoyHairstyle
                        appliedBoyHairStyle={appliedBoyHairStyle}
                        appliedFace={appliedFace}
                        textureBHS={textureBHS}
                        colorBHS={colorBHS}
                      />
                    </Suspense>
                    {/* <Suspense fallback={null}>
                      <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                      />
                    </Suspense> */}
                  </Suspense>
                  {/* <CameraControls1 ref={cameraControls} /> */}
                  <Controls zoom={activeElement} focus={focusPosition} />
                </Canvas>
              </Suspense>
            </div>
            <div className="relative w-1/6"></div>
          </div>
          <div className="lg:relative flex justify-center  w-full h-1/2 lg:h-full lg:w-1/2 ">
            <div className="lg:absolute lg:bottom-1/4 flex flex-col  h-full lg:h-4/6   w-full lg:w-1/2">
              <div className="title-bar rounded-t-3xl">
                <div className="font-sans p-4 m-2 h-16 text-3xl text-white ">
                  Choose what to change?
                </div>
              </div>
              <div className="options-bar p-1">
                <div className="flex flex-row">
                  {boyFaceInactive.map((options, index) => (
                    <BoyOption
                      key={index}
                      id={index}
                      options={options}
                      active={activeOption}
                      activeColor={boyColorActive}
                      onClick={() => {
                        setActiveOption(index);
                        setBoyColorActive(false);
                      }}
                      colorChange={() => {
                        setBoyColorActive(true);
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="objects-bar  h-screen">
                <div className=" flex flex-wrap">
                  {activeOption === 0 &&
                    face_Objects.map((options, index) => (
                      <FaceObject
                        key={index}
                        id={index}
                        active={appliedFace}
                        options={options}
                        onClick={() => setAppliedFace(options.alt_text)}
                      />
                    ))}

                  {activeOption === 1 &&
                    !boyColorActive &&
                    boyHairStyle_Objects.map((options, index) => (
                      <BoyHairStyleObject
                        key={index}
                        id={index}
                        active={appliedBoyHairStyle}
                        options={options}
                        onClick={() => setAppliedBoyHairStyle(options.alt_text)}
                      />
                    ))}

                  {activeOption === 1 &&
                    boyColorActive &&
                    boyHairColor_Objects.map((options, index) => (
                      <BoyHairColorObject
                        key={index}
                        id={index}
                        active={appliedHairColor}
                        options={options}
                        onClick={() => handleColorChange(index)}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loading />
    </>
  );
}

export default Configurator;
