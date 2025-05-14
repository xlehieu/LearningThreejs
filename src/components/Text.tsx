'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function TextComp({
    positionGroup,
    positionText,
    textContent,
}: {
    positionGroup?: [number, number, number];
    positionText?: [number, number, number];
    textContent?: string;
}) {
    const ref = useRef<any>(null);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01; // quay trục Y mỗi frame
        }
    });

    return (
        <group position={positionGroup}>
            <Text ref={ref} position={positionText ? positionText : [0, 0, 0]} fontSize={1} color="pink">
                {textContent}
            </Text>
        </group>
    );
}
