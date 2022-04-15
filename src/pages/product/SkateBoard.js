import {useRef, Suspense} from 'react';
import {OrbitControls, Environment, ContactShadows} from "@react-three/drei";
import {useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

function Shoe({...props}) {
    const group = useRef()
    const {nodes, materials} = useGLTF('shoe-draco.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.shoe.geometry} material={materials.laces}/>
            <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}/>
            <mesh geometry={nodes.shoe_2.geometry} material={materials.caps}/>
            <mesh geometry={nodes.shoe_3.geometry} material={materials.inner}/>
            <mesh geometry={nodes.shoe_4.geometry} material={materials.sole}/>
            <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes}/>
            <mesh geometry={nodes.shoe_6.geometry} material={materials.band}/>
            <mesh geometry={nodes.shoe_7.geometry} material={materials.patch}/>
        </group>
    )
}


function SkateBoard() {
    return (
        <Canvas>
            <ambientLight intensity={0.2} />
            <spotLight intensity={0.3} position={[5, 20, 20]}/>
            <Suspense fallback={null}>
                <Shoe/>
                <Environment files="hdr.hdr" />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    )
}

export default SkateBoard;