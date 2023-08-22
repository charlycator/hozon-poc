'use client';

import { useRef } from 'react';

import {
  Button,
  Icon,
  Input,
 } from '@components';
import {
  IconSize,
  IconName,
} from '@enums';
import { isValidEmail } from '@utils';


export default function Home() {
  const userEmailInputRef = useRef<string>('');
  const showNotValidEmailMsgRef = useRef<HTMLDivElement>(null);

  const LoginEmailInput = () => (
    <Input
      ref={showNotValidEmailMsgRef}
      className="relative mt-4"
      name="email"
      id="email"
      onChange={(val: string) => userEmailInputRef.current = val}
      label="Email address"
      notValidMsg="Not valid email" />
  );

  const LoginLogo = () => (
    <div style={{height: '96px'}}>
      <Icon
        className="flex justify-center"
        name={IconName.HOZON_LOGO}
        size={IconSize.XXXL} />
    </div>
  );

  const LoginSubmitBtn = () => (
    <Button onClick={tryLogin} >
      <Icon
        className="mr-2"
        name={IconName.ROCKET_LAUNCH}
        size={IconSize.SMALL} />
          Sign in
    </Button>
  );

  const tryLogin = () => {
    if (showNotValidEmailMsgRef.current) {
      if(userEmailInputRef?.current && isValidEmail(userEmailInputRef.current) && showNotValidEmailMsgRef.current) {
         showNotValidEmailMsgRef.current.hidden = true;
      } else  {
          showNotValidEmailMsgRef.current.hidden = false;
      }
    }
  }

  return (
    <main className="hoz-login-screen absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="selection:bg-yellow-200 selection:text-black">
        <div className="min-h-screen flex justify-center items-center">
          <div className="p-8 flex-1">
            <div className="hoz-login-form w-80 bg-white mx-auto overflow-hidden flex flex-col justify-center">
              <div className="px-10 pt-0 pb-8 bg-white rounded-tr-4xl">
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


