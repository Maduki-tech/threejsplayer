"use client";
import { ThreeElements } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

export default function Floor(props: ThreeElements["mesh"]) {
    return (
        <mesh {...props} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[10]} />
            <meshStandardMaterial color="gray" />
        </mesh>
    );
}
