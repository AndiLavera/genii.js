// TODO: Add css styles
import {
  Button as MaterialButton,
} from '@material-ui/core';
import { useNode } from '@craftjs/core';

import { ButtonSettings } from './ButtonSettings';
import formatStyles from '../../../utils/formatStyles';

type ButtonProps = {
  text?: string;
  api?: {
    size?: string;
    variant?: string;
    color?: string;
    href?: string;
  }
  styles?: {
    background?: Record<'r' | 'g' | 'b' | 'a', number>;
    color?: Record<'r' | 'g' | 'b' | 'a', number>;
    margin?: string[];
  }
};

const Button = ({ text, api, styles }: ButtonProps) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      color={api.color}
      size={api.size}
      variant={api.variant}
      href={api.href}
      style={formatStyles(styles)}
    >
      {text}
    </MaterialButton>
  );
};

const ButtonDefaultProps = {
  text: 'Button',
  api: {
    size: 'small',
    variant: 'contained',
    color: 'primary',
    href: '',
  },
  styles: {
    background: {},
    color: {},
    margin: ['0', '0', '0', '0'],
  },
};

Button.defaultProps = ButtonDefaultProps;

Button.craft = {
  displayName: 'Button',
  props: ButtonDefaultProps,
  related: {
    toolbar: ButtonSettings,
  },
};

export { Button };
