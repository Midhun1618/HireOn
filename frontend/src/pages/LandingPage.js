import React from 'react'

function LandingPage() {
  return (
    <div>
      <body class="bg-white">
        <header class="flex items-center justify-between px-8 py-6 max-w-[1200px] mx-auto">
          <div class="text-2xl font-extrabold select-none">
            <span class="text-orange-500">
              H
            </span>
            <span class="text-gray-600">
              ire
            </span>
            <span class="text-orange-500">
              On
            </span>
          </div>
          <nav class="flex items-center space-x-8 text-gray-600 text-sm font-medium">
            <a class="hover:text-gray-900" href="#">
              Home
            </a>
            <a class="hover:text-gray-900" href="#">
              Features
            </a>
            <a class="hover:text-gray-900" href="#">
              Contact
            </a>
          </nav>
          <div class="flex items-center space-x-4">
            <button class="text-orange-500 border border-orange-300 rounded-md px-4 py-1.5 font-semibold hover:bg-orange-50 transition">
              Sign In
            </button>
            <button class="bg-orange-500 text-white rounded-md px-5 py-2 font-semibold hover:bg-orange-600 transition">
              Login
            </button>
          </div>
        </header>
        <main class="max-w-[1200px] mx-auto px-8">
          <section class="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl overflow-hidden">
            <div class="md:w-1/2 p-8 md:p-16 text-white">
              <h1 class="text-3xl md:text-4xl font-semibold leading-tight mb-3">
                <span class="font-normal">
                  Turn
                </span>
                <span class="font-extrabold text-orange-400">
                  Campus Skills
                </span>
                <br />
                <span class="font-normal">
                  to
                </span>
                <span class="font-extrabold text-orange-400">
                  Earnings!
                </span>
              </h1>
              <p class="text-sm font-normal mb-8">
                Post tasks or earn money by helping peers with your talent
              </p>
              <div class="flex space-x-4">
                <button class="bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-md px-5 py-2">
                  Post a Task
                </button>
                <button class="bg-white hover:bg-gray-100 text-orange-400 font-bold rounded-md px-5 py-2">
                  Find Work
                </button>
              </div>
            </div>
            <div class="md:w-1/2 flex justify-center md:justify-end p-8 md:p-16">
              <img alt="Silhouette of two people shaking hands with orange highlights on a dark gray gradient background" class="max-w-full h-auto" height="200" src="https://storage.googleapis.com/a1aa/image/bdf509bb-d75e-4dfb-a456-d7696fce6eb3.jpg" width="300" />
            </div>
          </section>
        </main>
      </body>
    </div>
  )
}

export default LandingPage
