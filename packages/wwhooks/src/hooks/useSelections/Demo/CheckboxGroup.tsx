/**
 * title: 高阶用法
 * description: 与组件库CheckboxGroup集合用法 
 */
import React from 'react';
import { useSelections } from 'wwhooks';
import { Checkbox, Divider } from 'antd';
const CheckboxGroup = Checkbox.Group;

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
const test = () => {
  const {
    partiallySelected,
    allSelected,
    selectAll,
    selectedKeys,
    selectGroupByKey,
  } = useSelections(options, [], 'value');
  return <>
    <Checkbox indeterminate={partiallySelected} onChange={(e) => selectAll(e.target.checked)} checked={allSelected}>
      Check all
    </Checkbox>
    <Divider />
    <CheckboxGroup
      options={options} value={selectedKeys}
      onChange={(checkedValue) => {
        selectGroupByKey(checkedValue as string[])
      }}
    />
  </>
};
export default test;
