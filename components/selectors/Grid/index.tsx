// Material UI Button Component
import React from 'react';
import {
  Grid as MaterialGrid,
} from '@material-ui/core';
import { useNode } from '@craftjs/core';

import GridSettings from './GridSettings';
// import formatStyles from '../../../utils/formatStyles';

type GridProps = {
  api: {
    xs: boolean | 12 | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    sm: boolean | 12 | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    md: boolean | 12 | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    lg: boolean | 12 | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    xl: boolean | 12 | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  }
  styles: {
    // background?: Record<'r' | 'g' | 'b' | 'a', number>;
    // color?: Record<'r' | 'g' | 'b' | 'a', number>;
    // margin?: string[];
    height: string;
    width: string;
  }
  children: React.ReactNode;
};

const Grid = ({ children, api, styles }: Partial<GridProps>) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <MaterialGrid
      ref={(ref) => connect(drag(ref))}
      item
      xs={api.xs}
      sm={api.sm}
      md={api.md}
      lg={api.lg}
      xl={api.xl}
      style={styles}
    >
      {children}
    </MaterialGrid>
  );
};

const defaultProps = {
  api: {
    xs: 6,
    sm: 6,
    md: 6,
    lg: 6,
    xl: 6,
  },
  styles: {
    height: '500px',
  },
  // children: undefined,
};

Grid.defaultProps = defaultProps;

Grid.craft = {
  displayName: 'Grid',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: GridSettings,
  },
};

export default Grid;
