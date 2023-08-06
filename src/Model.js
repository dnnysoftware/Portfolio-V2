import './css/Model.css';
import { useRef } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';

function ModelComponent() {
    const { scene } = useGLTF('/model.glb');
    const modelRef = useRef();
  
    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; // Adjust the rotation speed here
      }
    });
  
    return <primitive object={scene} ref={modelRef}/ >;
}


function Model() {

    return (
        <div className='intro-col'>
            <Canvas shadows camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 2, 4] }}>
                <Stage environment="sunset">
                    <group scale={0.01}>
                        <ModelComponent />
                    </group>
                </Stage>
            </Canvas>
        </div>
    );
}

export default Model;