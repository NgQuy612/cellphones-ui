import styles from './IphoneProduct.module.scss';
import classNames from 'classnames/bind';
import styled from 'styled-components';
import { useState } from 'react';
import DetailProduct from '~/components/DetailProduct';
const cx = classNames.bind(styles);

function IphoneProduct() {
    return <DetailProduct api="http://localhost:3000/iphone" />;
}

export default IphoneProduct;
