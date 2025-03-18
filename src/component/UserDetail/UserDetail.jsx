import React from 'react'
import { Mail,  Code,  ProjectorIcon } from 'lucide-react'

export default function UserDetail() {
  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center p-10">
        
        <div className="bg-white rounded-3xl shadow-xl max-w-5xl w-full flex overflow-hidden">
          
          {/* Left Section - Image */}
          <div className="w-1/3  bg-blue-950 flex flex-col items-center justify-center p-10 text-white">
            <img 
              src="/public/User2.jpg" 
              alt="Dev Kumar Saini" 
              className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="text-3xl font-bold mt-5">Dev Kumar Saini</h1>
            <p className="text-lg">Backend Developer</p>
          </div>

          {/* Right Section - Info */}
          <div className="w-2/3 p-10">
            
            {/* Summary */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔥 Aspiring Software Engineer</h2>
            <p className="text-gray-700 leading-relaxed">
              I am <strong>Dev Kumar Saini</strong>, a <strong>BCA graduate (2024)</strong> with a passion for 
              <strong> building scalable web applications</strong>. With expertise in 
              <strong> Node.js, Express.js, and MongoDB</strong>, I specialize in building 
              <strong> robust and efficient backend systems</strong>.
            </p>

            {/* Tech Stack */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold flex items-center"><Code className="mr-2" /> Tech Stack</h3>
              <p className="text-gray-600 mt-2">
                Node.js, Express.js, MongoDB, Redis, Mongoose, Tailwind CSS, RESTful APIs, React.js
              </p>
            </div>

            {/* Projects */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold flex items-center"><ProjectorIcon className="mr-2" /> Projects</h3>
              <ul className="list-disc pl-6 text-gray-600 mt-2">
                <li>E-commerce platform with payment integration</li>
                <li>Real-time collaboration tool</li>
                <li>YouTube backend clone</li>
                <li>Cloud-based file management system</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold flex items-center"><Mail className="mr-2" /> Contact</h3>
              <p className="text-gray-600 mt-2">
                Email: 
                <a href="mailto:devsaini27806@gmail.com" className="text-blue-500 hover:underline ml-2">
                  devsaini27806@gmail.com
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                Certification: 
                <a href="https://drive.google.com/file/d/18JqVWFxky0JaikbHT8Mxxq6yVqKDD_As/view" className="text-blue-500 hover:underline ml-2">
                  Backend Development
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                GitHub: 
                <a href="https://github.com/DevLearner212?tab=repositories" target="_blank" 
                  className="text-blue-500 hover:underline ml-2">
                  github.com/DevLearner212
                </a>
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
