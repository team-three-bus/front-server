import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { ResponsiveLine } from '@nivo/line';
import { Layout } from 'Common/Layout';
import { ProductInfo } from 'Common/ProductInfo';
import { Product } from 'Common/Product';
import { Empty } from 'Common/Empty';

const ProductGraphWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 20px 24px;
`

const ProductGraph = styled.div`
  height: 200px;
  font-size: 15px;
`

const ProductGraphTitle = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;
`

const ProductGraphSubTitle = styled.div`
  margin: 7px 0 12px;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #868E96;
`

const SameProductListWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 19px;
  margin-bottom: 44px;
`

const SameProductList = styled.div`
  display: flex;
  overflow-x: auto;
  > div {
    margin-right: 19px;
  }
`

const SameProductListTitle = styled.p`
  font-family: 'NanumSquareRoundOTF';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 36px;
  margin: 0 0 14px;
`

const View = ({ 
  msg,
  product, 
  sameProducts, 
  graphData, 
  shareLink, 
  getPerPrice, 
  changeLike,
  gotoDetail
}) => {
  return (
    <Layout
      header='sub'
      title='상품 상세'
      share={true}
      search={false}
      shareLink={shareLink}
    >
      {Object.keys(product).length === 0 ?
        <Empty text='상품 데이터가 없습니다' /> :
        <>
          <ProductInfo
            id={product.id}
            img={product.imageUrl}
            title={product.name}
            price={product.price || ''}
            perPrice={getPerPrice(product.price, product.lastEventType)}
            like={product.isLike}
            plus={product.lastEventType}
            store={product.brand}
            changeLike={() => changeLike(product, 'product')}
            saleend={!product.isEvent}
          />

          <ProductGraphWrap>
            <ProductGraphTitle>최근 3개월간 1개당 가격 변화</ProductGraphTitle>
            <ProductGraphSubTitle>{msg}</ProductGraphSubTitle>
            <ProductGraph>
              <ResponsiveLine
                data={graphData}
                margin={{ top: 30, right: 20, bottom: 24, left: 20 }}
                xScale={{ type: 'point' }}
                yScale={{
                  type: 'linear',
                  min: 'auto',
                  max: 'auto',
                  stacked: true,
                  reverse: false
                }}
                axisLeft={null}
                axisBottom={{
                  tickSize: 0,
                  tickPadding: 10
                }}
                enablePointLabel={true}
                enableGridX={false}
                lineWidth={6}
                pointSize={14}
                colors={[ '#EF586A' ]}
                pointColor={{ from: 'color', modifiers: [] }}
                pointBorderWidth={4}
                pointBorderColor="inherit"
                pointLabel={(t) => `${(t.y).toLocaleString()}원`}
                pointLabelYOffset={-12}
              />
            </ProductGraph>
          </ProductGraphWrap>
                
          <SameProductListWrap>
            <SameProductListTitle>비슷한 상품이 궁금하신가요?</SameProductListTitle>
            <SameProductList>
              {sameProducts.map((sameProduct, i) => (
                <Product
                  key={i}
                  size='sm'
                  id={sameProduct.id}
                  img={sameProduct.imageUrl}
                  title={sameProduct.name}
                  price={sameProduct.price || ''}
                  like={sameProduct.isLike}
                  plus={sameProduct.lastEventType}
                  store={sameProduct.brand}
                  changeLike={() => changeLike(sameProduct, 'sameProduct')}
                  saleend={!sameProduct.isEvent}
                  gotoDetail={gotoDetail}
                />
              ))}
            </SameProductList>
          </SameProductListWrap>
          <ToastContainer 
            position="top-right"
            autoClose={1000}
            pauseOnHover={false}
          />
        </>
      }
    </Layout>
  );
};

export default View;
