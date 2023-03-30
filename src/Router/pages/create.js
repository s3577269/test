import React, { Component } from 'react'

export default class Create extends Component {
  render() {
    return (
      <div class="create-container">
        <div class="create-option">
            <ul>
              <li className='first'><a><span>[</span>Create Your Atlas<span>]</span></a></li>
              <li className='second'><a><span>[</span>Events<span>]</span><b>coming soon</b></a></li>
              <li className='third'><a><span>[</span>FAQs<span>]</span></a></li>
              <li className='fourth'><a><span>[</span>About<span>]</span></a></li>
              <li className='fifth'><a><span>[</span>Settings<span>]</span></a></li>
              <li className='sixth'><a><span>[</span>T&Cs<span>]</span></a></li>
            </ul>
        </div>
      </div>
    )
  }
}
