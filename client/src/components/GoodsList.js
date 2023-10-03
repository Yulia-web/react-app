import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import GoodsItemt from './GoodsItem';
import { fetchGoods } from "../http/goodsApi";

const GoodsList = observer(() => {
  const {goods} = useContext(Context)
  useEffect(() => {
    fetchGoods().then(data => goods.setGoods(data.rows))
  }, []);

  return (
    <div className='goods-items'>
      {goods.goods.map(goods =>
        <GoodsItemt key={goods.id} goods={goods} />
      )}
    </div>
  )
})

export default GoodsList