import { useState, useEffect } from 'react'

export const useCustomHook = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1)
    },1000)
  }, [time])

  return time
}