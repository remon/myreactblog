import React from 'react';

import TopIntro from '../components/TopIntro';
import SkillsContainer from '../components/SkillsContainer';
import Portifolio from '../components/Portifolio';

class BodyContainer extends React.Component {
  render() {
    return (
      <div className='container'>
        <TopIntro />
        <SkillsContainer />
        <Portifolio />
      </div>
    );
  }
}

export default BodyContainer;
