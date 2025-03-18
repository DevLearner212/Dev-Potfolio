import React from 'react'
import Header from '../Header/Header'

export default function ProjectDetail() {
  return (
     <>
     <div className="div w-screen h-screen bg-black">
 

        <div className="div  w-full h-96 flex justify-center items-center">
            <div className="div w-96 rounded-xl h-96  ">
                <img src="https://cdn.pixabay.com/photo/2022/01/21/00/38/youtube-icon-6953527_640.jpg" className=' object-cover  rounded-xl' alt="" />
            </div>
        </div>
        <div className="w-full   mt-2 h-auto text-white flex flex-col justify-center items-center bg-black p-6 rounded-xl shadow-lg">
  <h1 className="text-2xl font-bold mb-4">⚙️ Tech Stack Used:</h1>

  {/* Tech Stack Table */}
  <table className="w-full max-w-4xl border-collapse border border-gray-700 mb-8">
    <thead className="bg-gray-800">
      <tr>
        <th className="p-4 text-left text-gray-200">Category</th>
        <th className="p-4 text-left text-gray-200">Technology</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-700">
        <td className="p-4">Backend</td>
        <td className="p-4">Node.js, Express.js</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4">Database</td>
        <td className="p-4">MongoDB (Mongoose)</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4">Authentication</td>
        <td className="p-4">JWT & bcrypt.js</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4">Storage</td>
        <td className="p-4">Cloudinary (Video & Thumbnails)</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4">Caching</td>
        <td className="p-4">Redis</td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4">Pagination & Filtering</td>
        <td className="p-4">Mongoose pipelines</td>
      </tr>
      <tr>
        <td className="p-4">Version Control</td>
        <td className="p-4">Git & GitHub</td>
      </tr>
    </tbody>
  </table>

  {/* Key Features */}
  <h2 className="text-2xl font-bold mb-4">🚀 Key Features:</h2>
  <div className="w-full max-w-4xl text-gray-300 space-y-4">
    
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">✅ User Authentication & Authorization:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>Secure user registration and login with JWT.</li>
        <li>Password encryption using bcrypt.</li>
        <li>Protected routes with middleware authentication.</li>
      </ul>
    </div>

    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">✅ Video Management:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>Upload & Stream: Users can upload videos and generate thumbnails.</li>
        <li>Cloudinary Integration: Video and thumbnail files are stored on Cloudinary.</li>
        <li>Duration Extraction: Extract and store video duration.</li>
        <li>Public & Private Videos: Only public videos are displayed on the platform.</li>
      </ul>
    </div>

    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">✅ Like, Dislike, and Comments:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>Users can like and dislike videos with real-time updates.</li>
        <li>Commenting system with CRUD operations.</li>
      </ul>
    </div>

    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">✅ Subscription System:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>Users can subscribe and unsubscribe to channels.</li>
        <li>Displays the total subscriber count.</li>
      </ul>
    </div>

    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">✅ Search & Pagination:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>MongoDB pipelines for efficient searching and filtering videos.</li>
        <li>Pagination implemented for smooth browsing experience.</li>
      </ul>
    </div>

    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">✅ Caching with Redis:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>Redis used to cache frequently accessed data.</li>
        <li>Reduces database hits and improves response time.</li>
      </ul>
    </div>

    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">✅ Optimized Database Queries:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>MongoDB indexes used for faster data retrieval.</li>
        <li>Aggregation pipelines for efficient filtering and sorting.</li>
      </ul>
    </div>
  </div>
</div>




     </div>
     </>
  )
}
