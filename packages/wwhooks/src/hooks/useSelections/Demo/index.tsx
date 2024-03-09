/**
 * title: 基本用法
 * description: 常见的 Checkbox 
 */
import React from 'react';
// import { useSelections } from 'wwhooks';
import { Checkbox, Divider } from 'antd';
import useSelections from '..';

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
        isSelected,
        select	
     } = useSelections(options, [],'value');
    return <>
        <Checkbox indeterminate={partiallySelected} onChange={(e) => selectAll(e.target.checked)} checked={allSelected}>
            Check all
        </Checkbox>
        <Divider />
        {
            options.map((item, index) => {
                return <Checkbox key={index} checked={
                    isSelected(item)
                } onChange={(e) => {
                    select(item,e.target.checked)
                }}>{item.label}</Checkbox>
            })
        }
    </>
};
export default test;
