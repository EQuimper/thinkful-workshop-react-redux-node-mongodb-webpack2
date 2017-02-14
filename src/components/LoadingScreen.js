/** @flow */
import React from 'react';
import ContainerFluidCenter from './ContainerFluidCenter';

const LoadingScreen = () => (
  <ContainerFluidCenter>
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube" />
      <div className="sk-cube2 sk-cube" />
      <div className="sk-cube4 sk-cube" />
      <div className="sk-cube3 sk-cube" />
    </div>
  </ContainerFluidCenter>
);

export default LoadingScreen;
