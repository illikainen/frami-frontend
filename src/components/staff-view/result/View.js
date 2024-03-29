import React from 'react';

import { Form } from './Form';
import { List } from './List';

const View = (props) => {
  const { match: { params: { action, uid, mid } }, page } = props;
  const to = `/${page}/${uid}/result/`;

  if (mid) {
    return <Form {...props} rid={mid} to={to} />;
  }

  if (action === 'add') {
    return <Form {...props} to={to} />;
  }

  return <List {...props} />;
};

export { View };
