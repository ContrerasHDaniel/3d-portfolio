import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from "react";

function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"].play();
    
    // Should be using isRotating, but I liked the plane always moving
    /*if (isRotating) { 
      actions["Take 001"].play();
    }  else {
      actions["Take 001"].stop();
    } */
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;
