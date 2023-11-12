import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsHistoryVisible } from '../../features/history';
import { RootState } from '../../app/store';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export const HistoryButton = () => {
  const dispatch = useDispatch();
  const { isHistoryVisible } = useSelector((state: RootState) => state.history);

  const handlehistoryButton = () => {
    if (isHistoryVisible) {
      dispatch(setIsHistoryVisible(false))
    } else {
      dispatch(setIsHistoryVisible(true))
    }
  }

  return (
    <button
      type="button"
      className="fab__button fab__button--small"
      onClick={handlehistoryButton}
    >
      <ExclamationCircleOutlined />
    </button>
  )
}
