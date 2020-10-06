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

const Item = styled.a<{ disabled?: boolean; move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
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

const HeaderDiv = styled.div<{ enabled: boolean }>`
  width: ${(props) => (props.enabled ? '100%' : '800px')};
  z-index: 99999;
  position: fixed;
  transform: translateX(-50%);
  left: 50%;

  ${(props) => (!props.enabled
    ? `
    backdrop-filter: blur(12px);
    background: #ccccccc2;
    color:#2d2d2d;
  `
    : '')}
`;

const Link = styled.a<any>`
  padding: 10px 0px;
  margin-right: 35px;
  font-size: 13px;
  position: relative;
  opacity: ${(props) => (props.selected ? 1 : 0.8)};
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    bottom: ${(props) => (props.selected ? 0 : '-2')}px;
    opacity: ${(props) => (props.selected ? 1 : 0)};
    left: 0;
    position: absolute;
  }
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
    query, enabled,
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

  const [snackbarMessage, setSnackbarMessage] = useState('');

  return (
    <HeaderDiv
      enabled={enabled}
      className="header bg-dark-gray-1 text-white transition w-full"
    >
      <div className="items-center flex w-full px-4 ">
        <div className="flex flex-row xl:flex-row flex-row">
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
            <Tooltip title="Container" placement="right">
              <Item className="m-2 pb-2 cursor-pointer" move>
                <SquareSvg />
              </Item>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <Typography />)}>
            <Tooltip title="Text" placement="right">
              <Item className="m-2 pb-2 cursor-pointer" move>
                <TypeSvg />
              </Item>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <Button />)}>
            <Tooltip title="Button" placement="right">
              <Item className="m-2 pb-2 cursor-pointer" move>
                <ButtonSvg />
              </Item>
            </Tooltip>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-end justify-end">
          {/* <Link href={process.env.url['BASIC_EXAMPLE']}>Another Example</Link> */}
          <Link href="https://github.com/prevwong/craft.js">Github</Link>
          <Link href="https://craft.js.org/r/docs/overview">Documentation</Link>
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
              setSnackbarMessage('State copied to clipboard');
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

      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={!!snackbarMessage}
        onClose={() => setSnackbarMessage(null)}
        message={<span>{snackbarMessage}</span>}
      />
    </HeaderDiv>
  );
};

export default Header;
