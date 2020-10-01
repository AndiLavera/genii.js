import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Divider,
} from '@material-ui/core';
import {
  useNode,
} from '@craftjs/core';
import {
  makeStyles,
} from '@material-ui/core/styles';

const usePanelStyles = makeStyles((_) => ({
  root: {
    background: 'transparent',
    boxShadow: 'none',
    '&:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    '&.Mui-expanded': {
      margin: '0 0',
      minHeight: '40px',
      '&:before': {
        opacity: '1',
      },
      '& + .MuiExpansionPanel-root:before ': {
        display: 'block',
      },
    },
  },
}));

const useSummaryStyles = makeStyles((_) => ({
  root: {
    'min-height': '36px',
    padding: 0,
  },
  content: {
    margin: '0px',
  },
}));

const ToolbarSection = ({
  title, props, summary, children,
}: any) => {
  const panelClasses = usePanelStyles({});
  const summaryClasses = useSummaryStyles({});
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props && props.reduce((res: any, key: any) => {
        if (key.includes('.')) {
          const keys = key.split('.');
          res[keys[0]] = res[keys[0]] || {};
          res[keys[0]][keys[1]] = node.data.props[keys[0]][keys[1]] || null;
        } else {
          res[key] = node.data.props[key] || null;
        }

        return res;
      }, {}),
  }));

  return (
    <ExpansionPanel classes={panelClasses}>
      <ExpansionPanelSummary classes={summaryClasses}>
        <div className="px-6 w-full">
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item xs={4}>
              <h5 className="text-sm text-light-gray-1 text-left font-medium text-dark-gray">
                {title}
              </h5>
            </Grid>

            {summary && props ? (
              <Grid item xs={8}>
                <h5 className="text-light-gray-2 text-sm text-right text-dark-blue">
                  {summary(
                    props.reduce((acc: any, key: any) => {
                      if (key.includes('.')) {
                        const keys = key.split('.');
                        acc[keys[0]] = acc[keys[0]] || {};
                        acc[keys[0]][keys[1]] = nodeProps[keys[0]][keys[1]];
                      } else {
                        acc[key] = nodeProps[key];
                      }

                      return acc;
                    }, {}),
                  )}
                </h5>
              </Grid>
            ) : null}
          </Grid>
        </div>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails style={{ padding: '0px 24px 20px' }}>
        <Divider />
        <Grid container spacing={1}>
          {children}
        </Grid>
      </ExpansionPanelDetails>

    </ExpansionPanel>
  );
};

export { ToolbarSection };
