import React from 'react'

export default function SearchBar({ handleChange, name }) {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name} />
      </form>
    </div>
  )
}
