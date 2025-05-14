import dynamic from 'next/dynamic';

const SolarScene = dynamic(() => import('@/components/SolarScene')); // dùng ssr là vì đây sẽ là file ở trên server mà server không có window và document nên phải chuyển cho trình duyệt nghĩa là nó đang là client-side
export default function Home() {
    return (
        <div className="h-screen w-screen">
            <main className="row-start-2 w-full h-full">
                <SolarScene />
            </main>
        </div>
    );
}
