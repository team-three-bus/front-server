import React from 'react';
import styled from 'styled-components';
import { Layout } from 'Common/Layout';
import Category from 'Common/Category';
// import RecommendProducts from 'Common/RecommendProducts';
import PopularProducts from 'Common/PopularProducts';
import BottomNav from 'Common/BottomNav';

const Home = styled.div`
  background: #f8f9fa;
  max-width: 768px;
  margin: 0 auto;
`;

function View({
  onSearchClick,
}) {
  return (
    <Home>
      <Layout header='main' onSearchClick={onSearchClick} />
      <Category />
      {/* <RecommendProducts /> */}
      <PopularProducts />
      <BottomNav />
    </Home>
  );
}

export default View;
