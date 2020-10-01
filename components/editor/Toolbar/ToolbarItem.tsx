import React from 'react';
import { Grid, Slider, RadioGroup } from '@material-ui/core';
import { useNode } from '@craftjs/core';
import { withStyles } from '@material-ui/styles';
import { ToolbarTextInput } from './ToolbarTextInput';
import { ToolbarDropdown } from './ToolbarDropdown';

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const SliderStyled = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '5px 0',
    width: '100%',
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -7,
    marginLeft: -7,
    '&:focus,&:hover,&$active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': { boxShadow: iOSBoxShadow },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: { height: 2 },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

function setValue(props, propKey, propValue, value, index, onChange) {
  if (Array.isArray(propValue) && propKey.includes('.')) {
    const keys = propKey.split('.');
    props[keys[0]][keys[1]][index] = onChange ? onChange(value) : value;
  } else if (Array.isArray(propValue)) {
    props[propKey][index] = onChange ? onChange(value) : value;
  } else if (propKey.includes('.')) {
    const keys = propKey.split('.');
    props[keys[0]][keys[1]] = onChange ? onChange(value) : value;
  } else {
    props[propKey] = onChange ? onChange(value) : value;
  }
}

export type ToolbarItem = {
  prefix?: string;
  label?: string;
  full?: boolean;
  propKey?: string;
  index?: number;
  children?: React.ReactNode;
  type: string;
  onChange?: (value: any) => any;
};

const ToolbarItem = ({
  full = false, propKey, type, onChange, index, ...props
}: ToolbarItem) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => {
    // Allows passing in 'api.variant' as a prop key
    // Allows storing component setting props in nested objects
    if (propKey.includes('.')) {
      const keys = propKey.split('.');
      return { propValue: node.data.props[keys[0]][keys[1]] };
    }
    return { propValue: node.data.props[propKey] };
  });

  const value = Array.isArray(propValue) ? propValue[index] : propValue;

  return (
    <Grid item xs={full ? 12 : 6}>
      <div className="mb-2">
        {(() => {
          if (['text', 'color', 'bg', 'number'].includes(type)) {
            return (
              <ToolbarTextInput
                {...props}
                type={type}
                value={value}
                onChange={(value) => {
                  setProp((props: any) => {
                    setValue(props, propKey, propValue, value, index, onChange);
                  }, 500);
                }}
              />
            );
          }

          if (type === 'slider') {
            return (
              <>
                {props.label ? <h4 className="text-sm text-light-gray-2">{props.label}</h4> : null}

                <SliderStyled
                  value={parseInt(value) || 0}
                  onChange={
                    ((_, value: number) => {
                      setProp((props: any) => {
                        setValue(props, propKey, propValue, value, index, onChange);
                      }, 1000);
                    }) as any
                  }
                />
              </>
            );
          }

          if (type === 'radio') {
            return (
              <>
                {props.label ? <h4 className="text-sm text-light-gray-2">{props.label}</h4> : null}

                <RadioGroup
                  value={value || 0}
                  onChange={(e) => {
                    const { value } = e.target;
                    setProp((props: any) => {
                      setValue(props, propKey, propValue, value, index, onChange);
                    });
                  }}
                >
                  {props.children}
                </RadioGroup>
              </>
            );
          }

          if (type === 'select') {
            return (
              <ToolbarDropdown
                value={value || ''}
                onChange={(value) => setProp(
                  // setValue(props, propKey, propValue, value, index, onChange)
                  // ^ should work but needs to be tested. Should hit the `else` clause
                  (props: any) => (props[propKey] = onChange ? onChange(value) : value),
                )}
                {...props}
              />
            );
          }

          return null;
        })()}
      </div>
    </Grid>
  );
};

export { ToolbarItem };
