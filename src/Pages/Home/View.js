import React from 'react';
import styled from 'styled-components';
import { Layout } from 'Common/Layout';
import Category from 'Common/Category';
import RecommendProducts from 'Common/RecommendProducts';
import PopularProducts from 'Common/PopularProducts';
import BottomNav from 'Common/BottomNav';

const Home = styled.div`
  background: #F8F9FA;
`

function View() {
  return (
    <Home>
      <Layout header='main'/>
      <Category />
      <RecommendProducts />
      <PopularProducts />
      <BottomNav />
    </Home>
  );
}

export default View