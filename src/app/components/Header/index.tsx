import Image from "next/image"
import Link from "next/link"

const  Header: React.FunctionComponent = () =>  {
  return (
    <>
      <header className="bg-black p-8 w-full">
        <div className="relative isolate">
          <Link 
            href="/"
          >
            <Image
              src="/logo.svg"
              alt="IEQ Família de Cristo Logo"
              className="mx-auto"
              width={150}
              height={20}
              priority
            />
          </Link>
        </div>
      </header>
    </>    
  )
}

export default Header