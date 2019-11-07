import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => {
  //console.log(props);
  return (
    <div className='card-list'>
      {// Tra ve 1 mang cac JSX, React tu hieu la render nhung cai trong mang do.
      // Key de React biet duoc thang nao thay doi thi chi update thang do thoi, ko re-render lai toan bo ca list
      props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
