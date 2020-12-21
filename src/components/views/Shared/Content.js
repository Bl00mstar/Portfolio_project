import React, { useEffect, useState } from 'react';
import HumanImage from '@components/common/HumanImage/HumanImage';
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
          <HumanImage />
        </RightWrapper>
      </ComponentWrapper>
    </>
  );
};

export default Content;
