import React from 'react';
import './HistoryButton.scss';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { setIsHistoryVisible } from '../../features/history';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';

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