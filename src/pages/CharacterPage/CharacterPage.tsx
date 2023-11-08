import React from 'react';
import './CharacterPage.scss';

import { CharacterCard } from '../../components/CharacterCard';

const example = {
  'id': '1',
  'name': 'Rick Sanchez',
  'status': 'Alive',
  'species': 'Male',
  'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  'location': {
    'name': 'Citadel of Ricks'
  },
  'episode': [
    {
      'name': 'Pilot'
    },
    {
      'name': 'Lawnmower Dog'
    },
    {
      'name': 'Anatomy Park'
    },
    {
      'name': 'M. Night Shaym-Aliens!'
    },
    {
      'name': 'Meeseeks and Destroy'
    },
    {
      'name': 'Rick Potion #9'
    },
    {
      'name': 'Raising Gazorpazorp'
    },
    {
      'name': 'Rixty Minutes'
    },
    {
      'name': 'Something Ricked This Way Comes'
    },
    {
      'name': 'Close Rick-counters of the Rick Kind'
    },
    {
      'name': 'Ricksy Business'
    },
    {
      'name': 'A Rickle in Time'
    },
    {
      'name': 'Mortynight Run'
    },
    {
      'name': 'Auto Erotic Assimilation'
    },
    {
      'name': 'Total Rickall'
    },
    {
      'name': 'Get Schwifty'
    },
    {
      'name': 'The Ricks Must Be Crazy'
    },
    {
      'name': 'Big Trouble in Little Sanchez'
    },
    {
      'name': 'Interdimensional Cable 2: Tempting Fate'
    },
    {
      'name': 'Look Who\'s Purging Now'
    },
    {
      'name': 'The Wedding Squanchers'
    },
    {
      'name': 'The Rickshank Rickdemption'
    },
    {
      'name': 'Rickmancing the Stone'
    },
    {
      'name': 'Pickle Rick'
    },
    {
      'name': 'Vindicators 3: The Return of Worldender'
    },
    {
      'name': 'The Whirly Dirly Conspiracy'
    },
    {
      'name': 'Rest and Ricklaxation'
    },
    {
      'name': 'The Ricklantis Mixup'
    },
    {
      'name': 'Morty\'s Mind Blowers'
    },
    {
      'name': 'The ABC\'s of Beth'
    },
    {
      'name': 'The Rickchurian Mortydate'
    },
    {
      'name': 'Edge of Tomorty: Rick, Die, Rickpeat'
    },
    {
      'name': 'The Old Man and the Seat'
    },
    {
      'name': 'One Crew Over the Crewcoo\'s Morty'
    },
    {
      'name': 'Claw and Hoarder: Special Ricktim\'s Morty'
    },
    {
      'name': 'Rattlestar Ricklactica'
    },
    {
      'name': 'Never Ricking Morty'
    },
    {
      'name': 'Promortyus'
    },
    {
      'name': 'The Vat of Acid Episode'
    },
    {
      'name': 'Childrick of Mort'
    },
    {
      'name': 'Star Mort: Rickturn of the Jerri'
    },
    {
      'name': 'Mort Dinner Rick Andre'
    },
    {
      'name': 'Mortyplicity'
    },
    {
      'name': 'A Rickconvenient Mort'
    },
    {
      'name': 'Rickdependence Spray'
    },
    {
      'name': 'Amortycan Grickfitti'
    },
    {
      'name': 'Rick & Morty\'s Thanksploitation Spectacular'
    },
    {
      'name': 'Gotron Jerrysis Rickvangelion'
    },
    {
      'name': 'Rickternal Friendshine of the Spotless Mort'
    },
    {
      'name': 'Forgetting Sarick Mortshall'
    },
    {
      'name': 'Rickmurai Jack'
    }
  ]
};

export const CharacterPage = () => {

  return (
    <section className="section section--character character">
      <div className="container">
        <CharacterCard character={example} addtitonalClassName={true}>
          <p className="character-card__subtitle">Other information</p>
          <p>
            The Mosaic Rooms are a leading non-profit arts organisation and bookshop dedicated to supporting
            and promoting contemporary culture from the Arab world and beyond in London.
            Established in 2009, as a project of the A.M. Qattan Foundation, it dedicates its work to
            championing creative and critical voices that are often underrepresented.
          </p>
        </CharacterCard>
      </div>
    </section>
  )
}