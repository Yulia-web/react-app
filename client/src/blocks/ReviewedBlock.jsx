import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import GoodsItem from '../components/GoodsItem'
import { fetchGoods } from "../http/goodsApi";

const ReviewedBlock = (props) => {
  const { goods } = useContext(Context)

  useEffect(() => {
    fetchGoods().then(data => goods.setGoods(data.rows))
  }, []);
  return (
    <div className='goods-block'>
      <h2 className='title'>{props.title}</h2>
      <div className='goods-items'>
        {goods.reviewed.map(goods =>
          <GoodsItem key={goods.id} goods={goods} />
        )}
      </div>
    </div>
  )
}

export default ReviewedBlock
