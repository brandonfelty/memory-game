import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ dummyData }) => {
  return (
    <div className='leaderboard--container'>
      <h4 className='leaderboard--title'>Leaderboard</h4>
      <table className='leaderboard--table'>
        <thead>
          <td>Username</td>
          <td>Turns</td>
          <td>Time (s)</td>
        </thead>
        <tbody>
          {dummyData.map((userScore) => (
            <tr key={userScore.user_id}>
              <td>{userScore.username}</td>
              <td>{userScore.turns}</td>
              <td>{userScore.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard