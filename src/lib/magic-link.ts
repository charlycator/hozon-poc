'use client'
import { Magic } from 'magic-sdk';

import {storeLSItem} from './local-storage';

const magic = new Magic(process.env.MAGIC_PUBLISHABLE_API_KEY as string);


export const loginWithEmailOTP = async (email : string) : Promise < boolean > => {
    try {
        // Initiate login flow
        await magic.auth.loginWithEmailOTP({email});
        const didToken = magic.user.getIdToken();
        const stored = storeLSItem('did-magic', JSON.stringify(didToken));

        // if not stored we have any problem with the LS and we can not move forward
        return stored;
    } catch (error) {
        console.log("[HOZON] Error when doing magic login with email", error);
        return false;
    }
}

export const isUserLoggedIn = async () : Promise < boolean > => {
    if (await magic.user.isLoggedIn()) {
        const didToken = await magic.user.getIdToken();

        if (didToken) 
            return true;
        
    }

    return false;
}

export const logoutFromMagic = async () : Promise < void > => {
    await magic.user.logout();
}
