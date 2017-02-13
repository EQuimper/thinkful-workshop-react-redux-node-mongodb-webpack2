/** @flow */
import React from 'react';
import { browserHistory } from 'react-router';
import Title from '../components/Title';
import Button from '../components/Button';
import ContainerFluidCenter from '../components/ContainerFluidCenter';

type Props = {
  location: Object,
  children: React$Element<*>
}

const App = ({ children, location }: Props): React$Element<*> => {
  const _goToPosts: Function = () => browserHistory.push('/posts');

  const _renderWithoutChildren = (): React$Element<*> => (
    <ContainerFluidCenter>
      <Title>This is a title</Title>
      <Button onClick={() => _goToPosts()}>
        Go to Posts
      </Button>
    </ContainerFluidCenter>
  );

  if (location.pathname === '/') {
    return _renderWithoutChildren();
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default App;
