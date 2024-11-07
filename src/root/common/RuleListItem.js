import React from 'react'
import SubTitle from './SubTitle'
import ConentLlistEachItem from './ConentLlistEachItem';

function RuleListItem(props) {
  const { label, child } = props;
  return (
    <div>
      <SubTitle text={label} />
      {
        child && child.map((item, index) => 
          <ConentLlistEachItem label={item.label} to={item.to} key={`${JSON.stringify(item)}_${index}`} />
        )
      }
    </div>
  )
}

export default RuleListItem