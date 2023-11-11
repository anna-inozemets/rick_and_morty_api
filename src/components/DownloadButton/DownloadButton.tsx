import React from 'react';
import './DownloadButton.scss';
import { DownloadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import classNames from 'classnames';

export const DownloadButton = () => {
  const { charactersToRender, isSpecificCharacter } = useSelector((state: RootState) => state.characters);
  const handleDownload = () => {
    if (!isSpecificCharacter) {
      const normalizedCharacterStr = charactersToRender
        .map(characterToRender => (
          JSON.stringify(characterToRender)
        ))
        .join('\n');
      const csvContent = `data:text/csv;charset=utf-8, ${normalizedCharacterStr}`;
      const encodedUri = encodeURI(csvContent);
      const downloadLink = document.createElement('a');

      downloadLink.setAttribute('href', encodedUri);
      downloadLink.setAttribute('download', 'characters.csv');
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <button
      type="button"
      className={classNames('fab__button fab__button--small', { disabled: isSpecificCharacter })}
      onClick={handleDownload}
    >
      <DownloadOutlined />
    </button>
  )
}