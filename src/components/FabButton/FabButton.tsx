import React, { useState } from 'react';
import './FabButton.scss';
import { EllipsisOutlined, CloseOutlined } from '@ant-design/icons';
import { HistoryButton } from '../HistoryButton';
import { DownloadButton } from '../DownloadButton';

export const FabButton = () => {
  const [isButtonsVisible, setIsButtonVisible] = useState(false);

  const handleFabButtonClick = () => {
    setIsButtonVisible(prevState => !prevState)
  }

  return (
    <div className="fab">
      <button type="button" className="fab__button" onClick={handleFabButtonClick}>
        {isButtonsVisible ? (<CloseOutlined />) : (<EllipsisOutlined />)}
      </button>
      {isButtonsVisible && (
        <>
          <DownloadButton />
          <HistoryButton />
        </>
      )}
    </div>
  )
}