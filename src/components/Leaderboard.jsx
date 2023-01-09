import React from 'react';
import './Leaderboard.css';

const dummyData = [
  {user_id: 1, username: 'mike', turns: 5, time: 10},
  {user_id: 2, username: 'larry', turns: 6, time: 100},
  {user_id: 3, username: 'cleo', turns: 12, time: 10},
  {user_id: 4, username: 'stew', turns: 17, time: 100},
  {user_id: 5, username: 'mary', turns: 18, time: 100},
  {user_id: 6, username: 'cindy', turns: 18, time: 1000},
  {user_id: 7, username: 'bane', turns: 19, time: 1000},
  {user_id: 8, username: 'gerry', turns: 20, time: 100},
  {user_id: 9, username: 'tiger', turns: 20, time: 1000},
  {user_id: 10, username: 'eagermike', turns: 22, time: 1000}
];

const Leaderboard = () => {
  return (
    <div className='leaderboard--container'>
      <h4 className='leaderboard--title'>Leaderboard</h4>
      <table className='leaderboard--table'>
        <tr>
          <td>Username</td>
          <td>Turns</td>
          <td>Time (s)</td>
        </tr>
        {dummyData.map((userScore) => (
          <tr key={userScore.user_id}>
            <td>{userScore.username}</td>
            <td>{userScore.turns}</td>
            <td>{userScore.time}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Leaderboard