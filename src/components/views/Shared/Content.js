import React, { useEffect, useState } from 'react';
import Asteroid from '@components/common/Asteroid/Asteroid';
import LeftWrapper from './Wrappers/LeftWrapper';
import RightWrapper from './Wrappers/RightWrapper';
import ComponentWrapper from './Wrappers/ComponentWrapper';

const Content = ({ layoutElement }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (layoutElement) {
      setLoading(false);
    }
  }, [layoutElement]);
  return (
    <>
      <ComponentWrapper>
        {loading ? (
          <span>preloader............</span>
        ) : (
          <LeftWrapper>{layoutElement}</LeftWrapper>
        )}
        <RightWrapper>
          <Asteroid />
        </RightWrapper>
      </ComponentWrapper>
    </>
  );
};

export default Content;
