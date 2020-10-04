import React from 'react';
import { useNode } from '@craftjs/core';
// import ContentEditable from 'react-contenteditable';
import {
  Typography as MaterialTypography,
} from '@material-ui/core';

import TypographySettings from './TypographySettings';

type TypographyProps = {
  text: string;
  api?: {
    color: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
    display: 'initial' | 'block' | 'inline';
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit';
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  };
  styles?: {
    fontSize: string;
    textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
    fontWeight: number;
    color: Record<'r' | 'g' | 'b' | 'a', string>;
    shadow: number;
    margin: [string, string, string, string];
  };
};

const Typography = ({ text, api, styles }: Partial<TypographyProps>) => {
  const {
    connectors: { connect, drag },
    // For contentEditable
    // setProp,
  } = useNode();

  // For contentEditable - useEditor is from '@craftjs/core'
  // const { enabled } = useEditor((state) => ({
  //   enabled: state.options.enabled,
  // }));

  return (
    <MaterialTypography
      ref={(ref) => connect(drag(ref))}
      align={api.align}
      color={api.color}
      variant={api.variant}
      display={api.display}
      style={{
        width: '100%',
        margin: `${styles.margin[0]}px ${styles.margin[1]}px ${styles.margin[2]}px ${styles.margin[3]}px`,
        color: `rgba(${Object.values(styles.color)})`,
        // fontSize: `${styles.fontSize}px`,
        textShadow: `0px 0px 2px rgba(0,0,0,${(styles.shadow || 0) / 100})`,
        fontWeight: styles.fontWeight,
        textAlign: styles.textAlign,
      }}
    >
      {/* TODO: Can't get contentEditable working with material-ui typography */}
      {/* <ContentEditable
        innerRef={connect}
        html={text} // innerHTML of the editable div
        disabled={!enabled}
        onChange={(e) => {
          setProp((prop) => (prop.text = e.target.value), 500);
        }} // use true to disable editing
        tagName={api.variant} // Use a custom HTML tag (uses a div by default)

      /> */}
      {text}
    </MaterialTypography>
  );
};

const TypographyDefaultProps = {
  text: 'Hello World!',
  api: {
    color: 'textPrimary',
    display: 'initial',
    variant: 'body1',
    align: 'left',
  },
  styles: {
    fontSize: '12',
    textAlign: 'left',
    fontWeight: 500,
    color: {},
    margin: [0, 0, 0, 0],
    shadow: 0,
  },
};

Typography.defaultProps = TypographyDefaultProps;

Typography.craft = {
  displayName: 'Typography',
  props: TypographyDefaultProps,
  related: {
    toolbar: TypographySettings,
  },
};

export default Typography;
