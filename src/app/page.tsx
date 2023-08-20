import { Icon } from '@components';
import {
  IconAppearance,
  IconSize,
  IconName,
} from '@enums';


export default function Home() {
  const LoginHeaderCard = () => (
    <div className="relative flex justify-center items-center h-48 bg-cyan-600 rounded-bl-4xl">
      <h1 className="text-2xl font-semibold text-gray-900 mb-12">
          Welcome to HOZON!
      </h1>
      <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );

  const LoginEmailInput = () => (
    <div className="relative mt-10">
      <input
        id="email"
        name="email"
        type="text"
        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-800"
        placeholder="john@doe.com" />
      <label
        htmlFor="email"
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
          Email address
      </label>
    </div>
  );

  const LoginSubmitBtn = () => (
    <button className="mt-16 px-4 py-2 rounded bg-cyan-800 hover:bg-cyan-700 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" >
      Sign in
    </button>
  );

  return (
    <main className="hoz-login-screen relative w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="selection:bg-yellow-200 selection:text-black">
        <div className="min-h-screen flex justify-center items-center">
          <div className="p-8 flex-1">
            <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
              <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                <LoginEmailInput />
                <LoginSubmitBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


