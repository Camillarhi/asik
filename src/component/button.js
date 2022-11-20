import React from 'react'

export default function Button({ text, buttonColor, textColor, icon }) {
  return (
    <button className={`btn-${buttonColor} mx-3 btn text-${textColor} fw-bolder py-2 px-4`}>{text} {icon}</button>
  )
}
