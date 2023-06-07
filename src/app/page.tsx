import Image from 'next/image';
import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative isolate px-5 lg:px-5">
        <Image
          src="/logo.png"
          alt="IEQ Família de Cristo Logo"
          className="mx-auto"
          width={200}
          height={200}
          priority
        />
      </div>
    </main>
  )
}