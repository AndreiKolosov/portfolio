import React from 'react';
import Header from '../components/header/header';
import Main from '../components/main/main';
import Preview from '../components/preview/preview';

const MainPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Preview />
      </Main>
    </>
  );
};

export default MainPage;
