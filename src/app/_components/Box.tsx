"use client";
import { useFrame, type ThreeElements, useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

export const Box = (props: ThreeElements["mesh"]) => {
    const texture = useLoader(THREE.TextureLoader, "./img/grid.png");
    const [hovered, setHover] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);

    const ref = React.useRef<THREE.Mesh>(null!);

    useFrame(() => {
        ref.current.rotation.x += 0.01;
    });

    return (
        <mesh
            {...props}
            castShadow
            receiveShadow
            ref={ref}
            scale={clicked ? 1.5 : 3}
            onClick={() => setClicked(!clicked)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color={hovered ? "hotpink" : "orange"}
                map={texture}
            />
        </mesh>
    );
};
