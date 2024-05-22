import { useCounter } from "../core/hooks/useCounter"

export const CountContainer = () => {
  const {counter, decrementCount, incrementCount} = useCounter();

  return (
    <section>
      <button onClick={decrementCount}>-</button>
      <span>{counter}</span>
      <button onClick={incrementCount}>+</button>
    </section>
  )
}