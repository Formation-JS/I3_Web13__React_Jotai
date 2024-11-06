import { useAtomValue } from 'jotai';
import { counterAtom, counterEvenAtom } from '../../atoms/counter.atom';

const CounterDisplay = () => {

    const count = useAtomValue(counterAtom);
    const msg = useAtomValue(counterEvenAtom);

    return (
        <p>Compteur : {count} ({msg})</p>
    )
};

export default CounterDisplay;