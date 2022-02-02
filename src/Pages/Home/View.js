import React from 'react';
import styled from "styled-components";
import { Layout } from 'Common/Layout';

const Home = styled.div`
  background: #F8F9FA;
`

function View() {
  return (
    <Home>
      <Layout header='main'/>
    </Home>
  );
}

export default View