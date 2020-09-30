// TODO: Add css styles
import {
  Button as MaterialButton,
} from '@material-ui/core';
import { useNode } from '@craftjs/core';

// import { Text } from '../Text';
import { ButtonSettings } from './ButtonSettings';

// type ButtonProps = {
//   background?: Record<'r' | 'g' | 'b' | 'a', number>;
//   color?: Record<'r' | 'g' | 'b' | 'a', number>;
//   buttonStyle?: string;
//   margin?: string[];
//   text?: string;
//   textComponent?: any;
// };

// const styles = (props: any) => {
//   const { styleBackground, styleColor, styleMargin } = props;
//   const style = {};

//   style.margin = `${styleMargin[0]}px ${styleMargin[1]}px ${styleMargin[2]}px ${styleMargin[3]}px
//   style.color = styleColor ? `rgba(${Object.values(styleColor)})` : '';
//   style.background = styleBackground ? `rgba(${Object.values(styleBackground)})` : '';

//   return style;
// };

const ButtonDefaultProps = {
  size: 'small',
  variant: 'contained',
  color: 'primary',
  text: 'Button',
  disabled: 'false',
  href: '',
  // styleBackground: undefined,
  // styleColor: undefined,
  // styleMargin: ['0', '0', '0', '0'],
};

const Button = (props: any) => {
  const {
    color, size, variant, text, disabled, href,
  } = props;

  const { connectors: { connect, drag } } = useNode();

  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      color={color}
      size={size}
      variant={variant}
      disabled={!!(disabled === 'true')}
      href={href}
      // style={styles(props)}
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
