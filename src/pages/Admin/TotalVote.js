import React from 'react'

export default function TotalVote({vote}) {
  return (
    <div>
      {
        vote.map((ele)=>(<div className='result'>{ele.candidate}  vote count = {ele.vote_Count}</div>))
      }
    </div>
  )
}
