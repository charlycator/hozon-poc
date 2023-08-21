'use client';

import Image from 'next/image';

import {
  Button,
  Icon,
 } from '@components';
import {
  IconAppearance,
  IconSize,
  IconName,
} from '@enums';

import hozonLogoSrc from '@images/hozon-logo.png';


export default function Home() {

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

  const LoginLogo = () => (
    <div className="flex justify-center mt-4 mb-16">
      <Image src={hozonLogoSrc} alt="Hozon logo" height={65} />
    </div>
  );

  const LoginSubmitBtn = () => (
    <Button onClick={(e) => console.log('clicked')} >
        <Icon
          className="mr-2"
          name={IconName.ROCKET_LAUNCH}
          size={IconSize.SMALL} />
          Sign in
    </Button>
  );

  return (
    <main className="hoz-login-screen absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="selection:bg-yellow-200 selection:text-black">
        <div className="min-h-screen flex justify-center items-center">
          <div className="p-8 flex-1">
            <div className="hoz-login-form w-80 bg-white mx-auto overflow-hidden flex flex-col justify-center">
              <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                <LoginLogo />
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


