import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: 'https://raw.githubusercontent.com/amart31/PM-Dashboard/master/frontend/public/images/products/product_1.png?raw=true',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: 'https://raw.githubusercontent.com/amart31/PM-Dashboard/master/frontend/public/images/products/product_2.png?raw=true',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: 'https://raw.githubusercontent.com/amart31/PM-Dashboard/master/frontend/public/images/products/product_3.png?raw=true',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: 'https://raw.githubusercontent.com/amart31/PM-Dashboard/master/frontend/public/images/products/product_4.png?raw=true',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: 'https://raw.githubusercontent.com/amart31/PM-Dashboard/master/frontend/public/images/products/product_5.png?raw=true',
    updatedAt: moment().subtract(9, 'hours')
  },
  {
    id: uuid(),
    name: 'SquareSpace',
    imageUrl: 'https://raw.githubusercontent.com/amart31/PM-Dashboard/master/frontend/public/images/products/product_6.png?raw=true',
    updatedAt: moment().subtract(10, 'hours')
  }
];