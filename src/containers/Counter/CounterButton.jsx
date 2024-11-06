
const CounterButton = ({step = 1}) => {

    return (
        <div>
            <button>+ {step}</button>
            <button>- {step}</button>
        </div>
    )
};

export default CounterButton;