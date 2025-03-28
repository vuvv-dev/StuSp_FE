import { ModelHourseDance1 } from "@/components/models/ModelHourseDance1";
import { ModelHourseIdle } from "@/components/models/ModelHourseIdle";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Hourse4() {
  return (
    <Canvas
      style={{
        width: 400,
        height: 321,
      }}
    >
      <ambientLight intensity={2.5} />
      <directionalLight castShadow position={[0, 10, 20]} intensity={8.5} />
      <Suspense fallback={null}>
        <ModelHourseIdle
          position={[0, -3, 0]}
          scale={4.5}
          // rotation={[-0.3, 0.5, -0.03]}
          // rotation={[-0.2, 0.3, 0]}
          castShadow
          receiveShadow
        />
      </Suspense>
    </Canvas>
  );
}

export default Hourse4;
