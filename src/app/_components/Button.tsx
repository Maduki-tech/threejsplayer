"use client";
import { ThreeElements, useFrame } from "@react-three/fiber";
import React, { useMemo, useState } from "react";
import { Color, MathUtils } from "three";

const black = new Color("Black");

export default function Button(props: ThreeElements["mesh"]) {
    const ref = React.useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [selection, setSelection] = useState(false);
    const colorTo = useMemo(
        () => new Color(Math.floor(Math.random() * 16777215)),
        []
    );

    useFrame(() => {
        ref.current.rotation.x = hovered
            ? MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
            : MathUtils.lerp(ref.current.rotation.x, 0, 0.025);

        ref.current.position.z = selection
            ? MathUtils.lerp(ref.current.position.z, 0, 0.025)
            : MathUtils.lerp(ref.current.position.z, -3, 0.025);

        ref.current.material.color.lerp(selection ? colorTo : black, 0.025);
    });
    return (
        <mesh
            {...props}
            ref={ref}
            onPointerDown={() => {
                setSelection(!selection);
            }}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <icosahedronGeometry />
            <meshPhysicalMaterial
                roughness={0}
                metalness={0}
                thickness={3.12}
                ior={1.74}
                transmission={1.0}
            />
        </mesh>
    );
}
