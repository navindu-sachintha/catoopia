import Link from 'next/link'
import React from 'react'


const CatCard = ({cat} : any) => {
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700">
       <div className="flex items-center">
            <div className="flex-shrink-0">
                <img className="w-20 h-20 rounded-full" src={cat.url} alt="Neil image" />
            </div>
            <div className="flex-1 min-w-0 ms-4">
                <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                    {cat.breeds[0].name}
                </p>
            </div>
            <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    <Link href={`/cat/${cat.id}`} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        View more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link> 
                </p>
            </div>
        </div>
    </div>
    
  )
}

export default CatCard
