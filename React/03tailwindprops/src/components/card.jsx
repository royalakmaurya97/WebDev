import React from 'react'

function Card({ username, btnText = 'Visit Me' }) {
  // Destructured prop; log only for debug (remove in production)
  console.log('Props:', username)

  return (
    <div className="w-70 rounded-xl overflow-hidden shadow-lg flex flex-col bg-white">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt="Giphy"
        className="w-full h-36 object-cover"
      />
      <div className="glass py-4 px-5 rounded-b-xl bg-opacity-90 border-t">
        <h1 className="text-[0.75rem] font-semibold text-black">{username ?? 'Guest'}</h1>

        <button
          type="button"
          className="mt-3 inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded"
        >
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default Card