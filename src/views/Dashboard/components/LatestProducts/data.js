import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: 'https://github.com/amart31/PM-Dashboard/blob/master/public/images/products/product_1.png?raw=true',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: 'https://github.com/amart31/PM-Dashboard/blob/master/public/images/products/product_2.png?raw=true',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: 'https://github.com/amart31/PM-Dashboard/blob/master/public/images/products/product_3.png?raw=true',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: 'https://github.com/amart31/PM-Dashboard/blob/master/public/images/products/product_4.png?raw=true',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: 'https://github.com/amart31/PM-Dashboard/blob/master/public/images/products/product_5.png?raw=true',
    updatedAt: moment().subtract(9, 'hours')
  }
];
