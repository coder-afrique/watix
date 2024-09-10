import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800">
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col h-screen">
        <header className="py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <img src="/logo.png" alt="Watix" className="h-8" />
              <div className="flex space-x-4 text-xs">
                <a href="#pricing" className="hover:text-green-500 transition-colors duration-200">PRICING</a>
                <a href="#integrations" className="hover:text-green-500 transition-colors duration-200">INTEGRATIONS</a>
                <a href="#contacts" className="hover:text-green-500 transition-colors duration-200">CONTACTS</a>
              </div>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm">
              Download App
            </button>
          </nav>
        </header>
        <main className="flex-grow flex flex-col">
          <div className="flex flex-1">
            <div className="w-3/5 border-r border-b border-gray-300 flex flex-col items-start justify-center py-8 pr-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-left">
                ELEVATE YOUR
                <span className="inline-flex items-center mx-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 -mr-2 z-30"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 -mr-2 z-20"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 z-10"></div>
                </span>
                <br />STARTUP SUCCESS
              </h2>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full px-8 py-5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg"
                />
                <button className="absolute right-2 top-2 bg-black text-white px-8 py-3 rounded-full text-lg flex items-center justify-center w-44 sm:w-52">
                  Start
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-2/5 border-b border-gray-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1586351012965-861a0c69f3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Happy Black woman using her phone" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1">
            <div className="w-3/5 flex">
              <div className="w-1/2 bg-black text-white p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold">TEAMS CREATED</span>
                  <span className="text-sm font-semibold">/2023</span>
                </div>
                <div className="text-center">
                  <span className="text-6xl font-extrabold" style={{ fontFamily: 'Playfair Display, serif' }}>400</span>
                  <span className="text-green-500 text-2xl align-super font-bold">+</span>
                </div>
              </div>
              <div className="w-1/2 bg-green-500 flex items-center justify-center text-4xl font-bold text-white">
                C2
              </div>
            </div>
            <div className="w-2/5 flex items-center justify-center text-4xl font-bold">
              D
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
