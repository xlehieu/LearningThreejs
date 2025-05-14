'use client';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three';

type PlanetProps = {
    name?: string;
    texture: string;
    position: [number, number, number];
    size: number;
    isRotation?: boolean;
};

export default function Planet({ name, texture, position, size, isRotation = false }: PlanetProps) {
    const map = useLoader(TextureLoader, texture);
    const ref = useRef<any>(null);
    useFrame(() => {
        if (isRotation && ref.current) {
            ref.current.rotation.y += 0.01; // quay trục Y mỗi frame
        }
    });
    return (
        <mesh position={position} ref={ref}>
            <sphereGeometry args={[size, 32, 32]} /> // sphereGeometry giúp tạo một hình cầu
            <meshStandardMaterial map={map} /> // tạo vật liệu cho hình cầu như là phủ lớp hình ảnh lên
        </mesh>
    );
}
