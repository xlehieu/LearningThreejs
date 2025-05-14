'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Platnet';
import SpinningPlanet from './SpinningPlanet';

export default function SolarScene() {
    return (
        <Canvas camera={{ position: [0, 10, 20], fov: 60 }} className="bg-black">
            <ambientLight intensity={1} /> // ánh sáng môi trường
            <directionalLight position={[0, 10, 0]} intensity={1} /> // ánh sáng chiếu sáng từ một hướng
            <pointLight position={[0, 0, 0]} intensity={2} />
            <Stars
                radius={100} // Khoảng cách các ngôi sao, có thể thử tăng giá trị này để tạo không gian rộng hơn
                depth={50} // Độ sâu, bạn có thể điều chỉnh để các ngôi sao gần hơn hoặc xa hơn
                count={1500} // Số lượng ngôi sao, bạn có thể tăng số này để có nhiều ngôi sao hơn
                factor={5} // Làm sáng các ngôi sao hơn, bạn có thể thử tăng giá trị này
                saturation={0} // Độ bão hòa màu sắc, bạn có thể điều chỉnh để ngôi sao sáng hơn
                fade={false} // Để làm cho các ngôi sao rõ ràng hơn mà không bị mờ dần
                // Chất liệu cho các ngôi sao
            />
            <Planet name="Sun" texture="/textures/sun.jpg" position={[0, 0, 0]} size={3} />
            <SpinningPlanet
                positionGroup={[0, 0, 0]}
                positionPlanet={[-10, 0, 0]}
                isRotationPlanet={true}
                texture="/textures/earth_daymap.jpg"
            />
            <OrbitControls /> // điều khiển camera, cho phép người dùng xoay, phóng to, thu nhỏ
        </Canvas>
    );
}
