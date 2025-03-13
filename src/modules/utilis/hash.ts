import crypto from 'crypto';

export function hashPassword(password:string){
    const salt = crypto.randomBytes(16).toString('hex');

    const hash = crypto.pbkdf2Sync(password,salt,1000,64,"sha512");

    return {hash,salt}

};


export function verifyPassword({candidatepassword,salt,hash}:{
    candidatepassword:string,
    salt:string,
    hash:string
}){

    const candidatehash = crypto.pbkdf2Sync(candidatepassword,salt,1000,64,"sha512").toString('hex');

    return candidatehash == hash;


}

