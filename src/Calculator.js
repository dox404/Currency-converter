import React from 'react'

export default function Calculator() {
  return (
    <div>
      <div class="flex">
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <input type="text" id="name" name="name-input" className="slight-left" placeholder="First Name" />
        <input type="text" id="lastName" name="lastName-input" className="slight-left" placeholder="Last Name" />
      </div>
    </div>
  )
}
