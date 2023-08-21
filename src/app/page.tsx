'use client';

import {
  Button,
  Icon,
  Input,
 } from '@components';
import {
  IconSize,
  IconName,
} from '@enums';


export default function Home() {

  const LoginEmailInput = () => (
    <Input
      className="relative mt-10"
      name="email"
      id="email"
      label="Email address" />
  );

  const LoginLogo = () => (
      <Icon
        className="flex justify-center"
        name={IconName.HOZON_LOGO}
        size={IconSize.XXXL} />
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


