import React from 'react'
import Header from '../Header/Header'

export default function ECommerce() {
  return (
     <>
     <div className="div w-screen h-screen bg-black">
 

        <div className="div  w-full h-96 flex justify-center items-center">
            <div className="div w-96 rounded-xl h-96  ">
                <img src="/public/E-commerce.png" className=' object-cover w-full h-full  rounded-xl' alt="" />
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
      <td className="p-4">Frontend</td>
      <td className="p-4">React.js, Tailwind CSS (Responsive Design)</td>
    </tr>
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
      <td className="p-4">JWT & bcrypt.js (Password Hashing)</td>
    </tr>
    <tr className="border-b border-gray-700">
      <td className="p-4">Storage</td>
      <td className="p-4">Cloudinary (Product Images)</td>
    </tr>
    <tr className="border-b border-gray-700">
      <td className="p-4">Caching</td>
      <td className="p-4">Redis (Performance Optimization)</td>
    </tr>
    <tr className="border-b border-gray-700">
      <td className="p-4">Payment</td>
      <td className="p-4">Stripe API (Secure Transactions)</td>
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
    <h3 className="text-xl font-semibold">✅ User Authentication:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Secure JWT-based authentication with middleware protection.</li>
      <li>Password encryption using bcrypt.js.</li>
    </ul>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold">✅ Product Management:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Admins can add, update, and delete products.</li>
      <li>Cloudinary integration for image storage and management.</li>
    </ul>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold">✅ Cart & Wishlist:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Users can add products to cart and wishlist.</li>
      <li>Real-time updates with persistent storage.</li>
    </ul>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold">✅ Payment Integration:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Stripe payment gateway for secure transactions.</li>
      <li>Seamless checkout experience.</li>
    </ul>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold">✅ Search, Filter & Pagination:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Efficient search by product name, category, and price.</li>
      <li>Optimized pagination for large datasets.</li>
    </ul>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold">✅ Admin Dashboard:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Admins can manage products, users, and orders.</li>
      <li>Sales analytics and performance tracking.</li>
    </ul>
  </div>

  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold">✅ Redis Caching:</h3>
    <ul className="list-disc list-inside ml-4">
      <li>Frequently accessed data is cached in Redis.</li>
      <li>Reduces database load and improves performance.</li>
    </ul>
  </div>

</div>

</div>




     </div>
     </>
  )
}
