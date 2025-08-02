import React, { useState, useEffect } from 'react'

const Mains = () => {
  const totalTime = 60 // total seconds
  const [timeLeft, setTimeLeft] = useState(totalTime)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (timeLeft <= 0) 
      {setMessage("reapply now!")
      return 
      }
      return
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  const percentage = (timeLeft / totalTime) * 100

  const gradient = `conic-gradient(
    #facc15 ${percentage}%,     /* yellow */
    #fb923c ${percentage + 0.1}%,  /* orange stop */
    #78350f ${percentage + 0.2}%   /* brown rest */
  )`

  return (
    <div className='bg-yellow-100 w-full p-3 flex flex-col items-center justify-center'>
      <div
        className='w-32 h-32 rounded-full flex items-center justify-center'
        style={{
          background: gradient,
          padding: '6px',
        }}
      >
        <div className='w-full h-full rounded-full bg-yellow-100 flex items-center justify-center'>
          <span className='text-2xl font-bold text-amber-800'>
            {timeLeft<0?message:timeLeft}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Mains
