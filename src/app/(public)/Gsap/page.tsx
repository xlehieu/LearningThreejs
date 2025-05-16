import GsapFromTo from '@/components/GsapFromTo';
import GsapStagger from '@/components/GsapStagger';
import GsapTimeline from '@/components/GsapTimeline';
import GsapTo from '@/components/GsapTo';
export default function GsapStaggerHome() {
    return (
        <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <GsapTo />
            <GsapFromTo />
            <GsapTimeline />
            <GsapStagger />
        </section>
    );
}
