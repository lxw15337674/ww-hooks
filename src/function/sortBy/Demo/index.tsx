import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { sortBy } from 'wwhooks';

const data = [
  { user: 'fred', age: 48, phone: 123456 },
  { user: 'barney', age: 36, phone: 123456 },
  { user: 'fred', age: 48, phone: 123456 },
  { user: 'fred', age: 40, phone: 123456 },
  { user: 'barney', age: 34, phone: 123456 },
  { user: 'test', age: 40, phone: 123456 },
].map((item, index) => ({ ...item, index }));

const app = () => {
  const [dataSource, rowSpan] = sortBy(data, ['user', 'age']);
  const columns: ColumnsType = [
    {
      title: 'user',
      dataIndex: 'user',
      key: 'user',
      render: (value, _, index) => {
        const obj = {
          children: <div>{value}</div>,
          props: {
            rowSpan: rowSpan.user[index],
          },
        };
        return obj;
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      render: (value, _, index) => {
        const obj = {
          children: <div>{value}</div>,
          props: {
            rowSpan: rowSpan.age[index],
          },
        };
        return obj;
      },
    },
  ];

  return (
    <Table bordered columns={columns} dataSource={dataSource} rowKey="key" />
  );
};
export default app;
