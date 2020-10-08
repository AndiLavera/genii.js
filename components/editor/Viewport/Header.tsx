import React, { useState } from 'react';
import { Element, useEditor } from '@craftjs/core';
import { Tooltip, Snackbar } from '@material-ui/core';
import styled from 'styled-components';
import cx from 'classnames';

import { Container } from '../../selectors/Container';
import Typography from '../../selectors/Typography';
import Button from '../../selectors/Button';

import Checkmark from '../../../public/icons/check.svg';
import Customize from '../../../public/icons/customize.svg';
import SquareSvg from '../../../public/icons/toolbox/rectangle.svg';
import TypeSvg from '../../../public/icons/toolbox/text.svg';
import ButtonSvg from '../../../public/icons/toolbox/button.svg';
import DownArrow from '../../../public/icons/toolbox/down-arrow.svg';
import UndoSvg from '../../../public/icons/toolbox/undo.svg';
import RedoSvg from '../../../public/icons/toolbox/redo.svg';

const Item = styled.a<{ disabled?: boolean; move?: boolean }>`
  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
  ${(props) => props.move
    && `
    cursor: move;
  `}
  ${(props) => props.disabled
    && `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

const Menu = styled.a<{ disabled?: boolean; move?: boolean }>`
  svg {
    margin-left: 2px;
    width: 10px;
    height: 10px;
    fill: #fff;
    position: absolute;
    bottom: 20%;
  }
`;

const HeaderDiv = styled.div<{ enabled: boolean }>`
  width: ${(props) => (props.enabled ? '100%' : '800px')};
  z-index: 99999;
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  height: 40px;

  ${(props) => (!props.enabled
    ? `
    backdrop-filter: blur(12px);
    background: #ccccccc2;
    color:#2d2d2d;
  `
    : '')}
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

const Header = () => {
  const {
    query,
    enabled,
    actions: { setOptions },
    connectors: { create },
    actions,
    canUndo,
    canRedo,
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  // const [snackbarMessage, setSnackbarMessage] = useState('');

  return (
    <HeaderDiv
      enabled={enabled}
      className="header bg-dark-gray-1 text-white transition w-full"
    >
      <div className="items-center flex w-full px-16">
        <div className="flex flex-row flex-1">
          <div className="flex flex-row text-center p-2">
            <div
              ref={(ref) => create(
                ref,
                <Element
                  canvas
                  is={Container}
                  background={{
                    r: 78, g: 78, b: 78, a: 1,
                  }}
                  color={{
                    r: 0, g: 0, b: 0, a: 1,
                  }}
                  height="300px"
                  width="300px"
                />,
              )}
            >
              <Tooltip title="Container" placement="bottom">
                <Item className="cursor-pointer" move>
                  <SquareSvg />
                </Item>
              </Tooltip>
            </div>
            <Menu>
              <DownArrow />
            </Menu>
          </div>

          <div className="flex flex-row text-center p-2">
            <div ref={(ref) => create(ref, <Typography />)}>
              <Tooltip title="Text" placement="right">
                <Item className="cursor-pointer" move>
                  <TypeSvg />
                </Item>
              </Tooltip>
            </div>
            <Menu>
              <DownArrow />
            </Menu>
          </div>

          <div className="flex flex-row text-center p-2">
            <div ref={(ref) => create(ref, <Button />)}>
              <Tooltip title="Button" placement="right">
                <Item className="cursor-pointer" move>
                  <ButtonSvg />
                </Item>
              </Tooltip>
            </div>
            <Menu>
              <DownArrow />
            </Menu>
          </div>
        </div>

        <div className="flex flex-row text-center p-2">
          <div className="pr-2">
            <Tooltip title="Undo" placement="right">
              <Item
                className="cursor-pointer"
                disabled={!canUndo}
                onClick={() => actions.history.undo()}
              >
                <UndoSvg />
              </Item>
            </Tooltip>
          </div>
          <div className="pr-2">
            <Tooltip title="Redo" placement="right">
              <Item
                className="cursor-pointer"
                disabled={!canRedo}
                onClick={() => actions.history.redo()}
              >
                <RedoSvg />
              </Item>
            </Tooltip>
          </div>
        </div>

        <div className="flex">
          <Btn
            className={cx([
              'transition cursor-pointer',
              {
                'bg-green-400': enabled,
                'bg-primary': !enabled,
              },
            ])}
            onClick={() => {
              const json = query.serialize();
              // copy(lz.encodeBase64(lz.compress(json)));
              console.log(json);
              // setSnackbarMessage('State copied to clipboard');
            }}
          >
            <Checkmark />
            JSON
          </Btn>
          <Btn
            className={cx([
              'transition cursor-pointer',
              {
                'bg-green-400': enabled,
                'bg-primary': !enabled,
              },
            ])}
            onClick={() => {
              setOptions((options) => { options.enabled = !enabled; });
            }}
          >
            {enabled ? <Checkmark /> : <Customize />}
            {enabled ? 'Finish Editing' : 'Edit'}
          </Btn>
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;
