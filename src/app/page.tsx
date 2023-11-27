"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, OrbitControls, Environment, Center } from "@react-three/drei";
import { Vector3 } from "three";
import Button from "./_components/Button";

const vec = new Vector3();

function Ring() {
    return useFrame(({ camera, mouse }) => {
        vec.set(mouse.x, mouse.y, camera.position.z);
        camera.position.lerp(vec, 0.85);
        camera.lookAt(0, 0, 0);
    });
}

export default function Home() {
    return (
        <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <Canvas shadows>
                <Environment preset="forest" background />
                <Center>
                    {[...Array(5).keys()].map((x) =>
                        [...Array(3).keys()].map((y) => (
                            <Button
                                key={x + y * 5}
                                position={[x * 2.5, y * 2.5, 0]}
                            />
                        ))
                    )}
                </Center>

                <Ring />
                <Stats />
            </Canvas>
        </main>
    );
}
