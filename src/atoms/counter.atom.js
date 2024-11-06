import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

//! Un atom 
// export const counterAtom = atom(0);

//! Un atom avec stockage (par defaut -> localStorage)
export const counterAtom = atomWithStorage(
    'counterKey',   // Identification pour le stockage
    0,              // Valeur initial
);

//! Un atom dérivé (Un valeur calculer)
export const counterEvenAtom = atom((getAtom) => {
    const count = getAtom(counterAtom);

    return count % 2 == 0 ? 'Pair' : 'Impair'; 
});