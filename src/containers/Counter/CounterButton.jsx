import { useSetAtom } from 'jotai';
import { counterAtom } from '../../atoms/counter.atom';

const CounterButton = ({step = 1}) => {

    const setCounter = useSetAtom(counterAtom);

    const handleIncr = () => {
        setCounter(count => count + step)
    }
    const handleDecr = () => {
        setCounter(count => count - step)
    }

    return (
        <div>
            <button onClick={handleIncr}>+ {step}</button>
            <button onClick={handleDecr}>- {step}</button>
        </div>
    )
};

export default CounterButton;