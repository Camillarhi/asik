import React from 'react'

export default function Button({ text, buttonClass, textColor, icon, mod, style }) {
  return (
    <button className={`${buttonClass} mx-3 btn text-${textColor} fw-bolder py-2 px-4 rounded`} onClick={mod} style={style}>{text} {icon}</button>
  )
}
