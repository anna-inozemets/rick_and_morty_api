import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsHistoryVisible } from '../../features/history';
import { RootState } from '../../app/store';
import './History.scss';

export const History = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((state: RootState) => state.history);

  const handleCloseHistory = () => {
    dispatch(setIsHistoryVisible(false))
  }

  return (
    <article className="history">
      <div className="history__content">
        <h2>History</h2>
        {history.length === 0 ? (
          <p>Your history is empty!</p>
        ) : (
          <div className="history__content-items">
            {
              history.map((historyItem, index) => (
                <div key={`${index}-${historyItem.characters}-${historyItem.keyWords}`} className="history__content-item">
                  {historyItem.keyWords.length !==0 && (
                    <p><span>You try to find:</span> {historyItem.keyWords}</p>
                  )}
                  {historyItem.characters.length !==0 && (
                    <p><span>Characters:</span> {historyItem.characters}</p>
                  )}
                  {historyItem.location.length !==0 && (
                    <p><span>Location:</span> {historyItem.location}</p>
                  )}
                  {historyItem.episode.length !==0 && (
                    <p><span>Episode:</span> {historyItem.episode}</p>
                  )}
                  {historyItem.name.length !==0 && (
                    <p><span>You recently have been looking for:</span> {historyItem.name}</p>
                  )}
                </div>
              ))
            }
          </div>
        )}
        <button className='history__close' type="button" onClick={handleCloseHistory}>
          Close
        </button>
      </div>
    </article>
  )
}
