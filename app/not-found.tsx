import React from 'react'

function NotFound() {
  return (
    <div className="bg-white py-6 my-7">
    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div className="flex flex-row flex-wrap">
        <div className="flex-shrink max-w-full w-full">
          <div className="p-10 text-center">
              <div className="mb-4 text-center">
              <h1 className="text-6xl text-gray-800 font-bold mb-2">404</h1>
              <span className="inline-block h-0.5 w-20 bg-red-600"></span>
            </div>
            <h3 className="text-2xl mb-2">Oops! That page can’t be found.</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NotFound
