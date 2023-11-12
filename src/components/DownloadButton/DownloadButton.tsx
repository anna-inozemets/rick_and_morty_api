import React from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import classNames from 'classnames';

export const DownloadButton = () => {
  const { charactersToRender, isSpecificCharacter } = useSelector((state: RootState) => state.characters);
  const handleDownload = () => {
    if (!isSpecificCharacter) {
      const csvRows = charactersToRender.map(characterToRender => {
        const { id, name, status, species, image, location, episode } = characterToRender;
        const firstEpisodeName = episode[0].name || '';
  
        return `${id},${name},${status},${species},${image},${location.name},${firstEpisodeName}`;
      }).join('\n');

      const blob = new Blob([csvRows], { type: 'text/csv;charset=utf-8,' });
      const objUrl = URL.createObjectURL(blob)

      const downloadLink = document.createElement('a');

      downloadLink.setAttribute('href', objUrl);
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