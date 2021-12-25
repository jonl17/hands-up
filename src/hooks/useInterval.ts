import { useEffect } from 'react'

const useInterval = (
  action: (b: boolean) => void,
  deps: any[] = []
) => {
  useEffect(() => {
    let counter = 0

    const mark = 5
    const ttl = mark * 2

    const intervalId = setInterval(() => {
      counter++
      if (counter >= mark && counter < ttl) {
        action(true)
      } else if (counter === ttl) {
        counter = 0
        action(false)
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, deps)
}

export { useInterval }
