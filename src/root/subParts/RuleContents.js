import React from 'react';
import RuleListItem from '../common/RuleListItem';
import { Container } from '@mui/material';
import { rules } from '../rules';
import RuleConentEachItem from '../common/RuleConentEachItem';

function RuleContents() {
  return (
    <Container maxWidth="lg">
      <div>
        <RuleListItem label={"content"} child={[]} />
        {rules.map((item, index) =>
          <RuleListItem key={`${item.label}_${index}_RuleListItem`} label={item.label} child={item.child} />
        )}
        {rules.map((item, index) => 
          <RuleConentEachItem data={item} />
        )}
      </div>
    </Container>
  )
}

export default RuleContents