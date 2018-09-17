export function increment() {
  return {type: 'INCREMENT'}
}

export function decrement() {
  return {type: 'DECREMENT'}
}

export const double = () => {
  return {type: 'DOUBLE'}
}

export const half = () => {
  return {type: 'HALF'}
}

export const reset = () => {
  return {type: 'RESET'}
}