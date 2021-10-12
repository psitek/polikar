import React from "react"

const List = () => {
  return (
    <div class="flex flex-col text-gray-700">
      <p className="pb-4 text-gray-700 text-md">
        Jako podstawy naszej pracy przyjmujemy elastycznść, otwartość,
        rzetelność, terminowość dostaw, sprawną komunikację i ciągłe
        poszukiwanie nowatorskich rozwiązań.
      </p>
      <p className="pb-4 text-gray-700 text-md">
        Współpraca z naszymi klientami, przedstawicielami rożnych branż i
        regionów Polski i Europy zaowocowała wiedzą, która pozwoli nam
        zrealizować wiele Państwa pomysłów.
      </p>
      <p className="text-gray-700 text-md">
        Chętnie podejmiemy się wszystkich lub wybranych elementów w zależności
        od Państwa potrzeb.
      </p>
      <dt class="my-8 flex items-center">
        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-gradient text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <p class="ml-16 text-lg leading-6 font-medium text-gray-700">
          prowadzenie i zarządzanie produkcją
        </p>
      </dt>

      <dt class="mb-8 flex items-center">
        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-gradient text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
        <p class="ml-16 text-lg leading-6 font-medium text-gray-700">
          opracowanie graficzne, korekty graficzne, impozycje
        </p>
      </dt>
      <dt class="mb-8 flex items-center">
        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-gradient text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </div>
        <p class="ml-16 text-lg leading-6 font-medium text-gray-700">
          biegła znajomość CTP i DTP, druku
        </p>
      </dt>
      <dt class="mb-8 flex items-center">
        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-gradient text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <p class="ml-16 text-lg leading-6 font-medium text-gray-700">
          biegła znajomość introligatorni opraw broszurowych, zeszytowych,
          twardych i zintegrowanych
        </p>
      </dt>
      <dt class="mb-8 flex items-center">
        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-gradient text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
        </div>
        <p class="ml-16 text-lg leading-6 font-medium text-gray-700">
          realizacja opakowań litych, kaszerowanych, reklam, uszlachetniań druku
        </p>
      </dt>
    </div>
  )
}

export default List
