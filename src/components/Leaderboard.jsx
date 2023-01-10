import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ leaderboard }) => {
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
          {leaderboard.map((userScore) => (
            <tr key={userScore.user_id}>
              <td>{userScore.username}</td>
              <td>{userScore.turns}</td>
              <td>{userScore.total_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard