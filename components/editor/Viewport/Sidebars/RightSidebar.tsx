import React, { useState } from 'react';
import { Layers } from '@craftjs/layers';
import styled from 'styled-components';
import { useEditor } from '@craftjs/core';
import { Toolbar } from '../../Toolbar';
import { SidebarItem } from './SidebarItem';
import CustomizeIcon from '../../../../public/icons/customize.svg';
import LayerIcon from '../../../../public/icons/layers.svg';

export const SidebarDiv = styled.div<{ enabled: boolean }>`
  width: ${(props) => (props.enabled ? 240 : 0)}px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #fff;
`;

const color = '#D8D8D8';

export const RightSidebar = () => {
  const [designVisible, setDesignVisible] = useState(true);
  const [prototypeVisible, setPrototypeVisible] = useState(false);
  const [inspectVisible, setInspectVisible] = useState(false);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <SidebarDiv enabled={enabled} className="sidebar transition bg-white w-2">
      <div className="flex flex-row justify-center">
        <div className="">
          <button
            onClick={() => {
              setDesignVisible(true);
              setPrototypeVisible(false);
              setInspectVisible(false);
            }}
            type="button"
            style={designVisible ? { } : { color }}
          >
            Design
          </button>
        </div>
        <div className="ml-4">
          <button
            onClick={() => {
              setPrototypeVisible(true);
              setInspectVisible(false);
              setDesignVisible(false);
            }}
            type="button"
            style={prototypeVisible ? {} : { color }}
          >
            Prototype
          </button>
        </div>
        <div className="ml-4">
          <button
            onClick={() => {
              setInspectVisible(true);
              setPrototypeVisible(false);
              setDesignVisible(false);
            }}
            type="button"
            style={inspectVisible ? {} : { color }}
          >
            Inspect
          </button>
        </div>
      </div>

      <div className="flex flex-col h-full">
        {/* <SidebarItem
          icon={LayerIcon}
          title="Layers"
          height="full"
          visible={dVisible}
        >
          <div className="">
            <Layers expandRootOnLoad />
          </div>
        </SidebarItem> */}

        <SidebarItem
          icon={CustomizeIcon}
          title="Customize"
          height="full"
          visible={designVisible}
        >
          <Toolbar />
        </SidebarItem>
      </div>
    </SidebarDiv>
  );
};
