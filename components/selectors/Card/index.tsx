import React from 'react';
import { Paper, FormControl, FormLabel } from '@material-ui/core';
import { Element, useNode } from '@craftjs/core';
import {
  Container,
} from '../Container';
import Typography from '../Typography';
import Button from '../Button';

export const CardTop = ({ children }) => {
  const { connectors: { connect } } = useNode();

  return (
    <div
      ref={connect}
      className="text-only"
      style={{
        padding: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Typography,
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div style={{ padding: '10px 0' }} ref={connect}>
      {children}
    </div>
  );
};

CardBottom.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Button,
  },
};

const Card = ({ background, padding = 20 }) => (
  <Container background={background} padding={padding}>
    <Element canvas id="text" is={CardTop}>
      <Typography text="Only texts" fontSize={20} />
      <Typography text="are allowed up here" fontSize={15} />
    </Element>
    <Element canvas id="buttons" is={CardBottom}>
      <Button size="small" text="Only buttons down here" />
    </Element>
  </Container>
);

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <FormControl fullWidth margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          value={background}
          onChange={(color) => {
            setProp((props) => (props.background = color), 500);
          }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) => setProp((props) => (props.padding = value), 500)}
        />
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: '#ffffff',
  padding: 3,
  boxShadow: '0 1px 6px rgba(32,33,36,.28)',
};

Card.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};

export default Card;
