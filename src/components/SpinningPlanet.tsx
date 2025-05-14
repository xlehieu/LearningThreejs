'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Planet from './Platnet';

export default function SpinningPlanet({
    positionGroup,
    positionPlanet = [0, 0, 0],
    texture,
    isRotationGroup = true,
    isRotationPlanet = false,
}: {
    isRotationGroup?: boolean;
    isRotationPlanet?: boolean;
    texture: string;
    positionGroup: [number, number, number];
    positionPlanet?: [number, number, number];
}) {
    const refGroup = useRef<any>(null);
    useFrame(() => {
        if (refGroup.current && isRotationGroup) {
            refGroup.current.rotation.y += 0.01; // quay trục Y mỗi frame
        }
    });
    return (
        <group position={positionGroup} ref={refGroup}>
            <Planet texture={texture} position={positionPlanet} size={1} isRotation={isRotationPlanet} />
        </group>
    );
}
