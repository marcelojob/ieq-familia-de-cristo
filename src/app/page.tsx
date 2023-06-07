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
      <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl uppercase">
              Uma igreja que valoriza
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Venha nos visitar e conhecer melhor esse Deus maravilhoso que servimos!
            </p>
            <Link 
              href="https://www.google.com/search?q=ieq+passo+dos+negros&sxsrf=APwXEdeOzusCzL5ft_MJ59Gi-yODbhmX3Q%3A1686107292725&ei=nPR_ZI7zK8OT0Ab-0ruICA&ved=0ahUKEwiOsfGRl7D_AhXDCdQKHX7pDoEQ4dUDCA8&uact=5&oq=ieq+passo+dos+negros&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoICAAQogQQsAM6BAgjECc6BwgjEIoFECc6DgguEIMBENQCELEDEIAEOgsIABCABBCxAxCDAToNCC4QigUQxwEQ0QMQQzoLCAAQigUQsQMQgwE6BQgAEIAEOggIABCABBCxAzoLCC4QigUQsQMQgwE6CAguEIAEENQCOg4ILhDHARCxAxDRAxCABDoLCC4QgAQQxwEQrwE6EQguEIoFELEDEIMBEMcBEK8BOgsILhCABBDHARDRAzoHCAAQigUQQzoICAAQFhAeEA86BggAEBYQHjoICAAQFhAeEAo6AggmOgUIIRCgAToICCEQFhAeEB1KBAhBGAFQ-AhYvhpgtBtoBHAAeACAAd8BiAH8FpIBBjAuMTguMZgBAKABAcABAcgBAg&sclient=gws-wiz-serp"
              className="d-flex items-center"
            >
              <div className=" hover:bg-black hover:rounded p-3 mt-10 text-base font-semibold leading-7 text-gray-300 flex items-center justify-center">
                <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-800">
                  <GlobeAltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="ml-4">Av. Pres. Getúlio Vargas - Vila Elsa, Alvorada - RS, 94836-193 </h3>

              </div>
            </Link>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
    </main>
  )
}