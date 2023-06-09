import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  path: string;
  image: string;
  title: string;
  description: string;
}

const  ProjectCard: React.FunctionComponent<ProjectCardProps> = ( props: ProjectCardProps ) =>  {
  return (
    <>
      <Link 
        href={props.path}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          src={props.image}
          alt={`Imagem ${props.title}`}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          width={200}
          height={250}
          priority
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
          <span className="inline-flex items-center text-blue-600 hover:underline">
            Saiba mais 
            <ChevronRightIcon className="w-5 h-5 ml-2" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </>    
  )
}

export default ProjectCard