// TODO: Add css styles
import {
  Button as MaterialButton,
} from '@material-ui/core';
import { useNode } from '@craftjs/core';

// import { Text } from '../Text';
import { ButtonSettings } from './ButtonSettings';
import formatStyles from '../../../utils/formatStyles';

// type ButtonProps = {
//   background?: Record<'r' | 'g' | 'b' | 'a', number>;
//   color?: Record<'r' | 'g' | 'b' | 'a', number>;
//   buttonStyle?: string;
//   margin?: string[];
//   text?: string;
//   textComponent?: any;
// };

const ButtonDefaultProps = {
  text: 'Button',
  api: {
    size: 'small',
    variant: 'contained',
    color: 'primary',
    disabled: 'false',
    href: '',
  },
  styles: {
    background: {},
    color: {},
    margin: ['0', '0', '0', '0'],
  },
};

const Button = (props: any) => {
  const {
    text, api, styles,
  } = props;

  const { connectors: { connect, drag } } = useNode();

  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      color={api.color}
      size={api.size}
      variant={api.variant}
      disabled={!!(api.disabled === 'true')}
      href={api.href}
      style={formatStyles(styles)}
    >
      {text}
    </MaterialButton>
  );
};

Button.craft = {
  displayName: 'Button',
  props: ButtonDefaultProps,
  related: {
    toolbar: ButtonSettings,
  },
};

export { Button };
