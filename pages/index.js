import React from 'react';
import Page from '../components/Page';

const IndexPage = (props) => {
  // TODO: should either add TS or turn of the rule
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  return (
    <Page>
      Hello
      {children}
    </Page>
  );
};

export default IndexPage;
