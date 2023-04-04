import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const data = {
  id: 'root',
  name: '더존비즈온',
  children: [
    {
      id: '1',
      name: '영업본부',
      children:[
        {
          id:'2',
          name: '영업센터',
          children:[
            {
              id:'3',
              name: '영업1Unit',
              children:[
                {
                  id:'5',
                  name: '영업1Cell'
                }
              ]
            },
            {
              id:'4',
              name: '영업2Unit',
              children:[
                {
                  id:'6',
                  name: '영업2Cell'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default function RichObjectTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
}