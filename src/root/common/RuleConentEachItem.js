import React from 'react'
import SubTitle from './SubTitle';
import NormalText from './NormalText';

function RuleConentEachItem(props) {
  const { data } = props;
  return (
    <div>
      <SubTitle text={data.label} />
      {
        data.child && data.child.map((item1) => {
          return <div key={`${item1.label}_item1_`}>
            <SubTitle text={item1.label} />
            {
              item1.contents && item1.contents.map(item2 =>
                <NormalText text={item2.text} key={`${JSON.stringify(item2.text)}_item2`} />
              )
            }
          </div>
        })
      }
    </div>
  )
}

export default RuleConentEachItem