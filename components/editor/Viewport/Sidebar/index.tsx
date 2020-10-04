import React, { useState } from 'react';
import { Layers } from '@craftjs/layers';
import styled from 'styled-components';
import { useEditor } from '@craftjs/core';
import { Toolbar } from '../../Toolbar';
import { SidebarItem } from './SidebarItem';
import CustomizeIcon from '../../../../public/icons/customize.svg';
import LayerIcon from '../../../../public/icons/layers.svg';

export const SidebarDiv = styled.div<{ enabled: boolean }>`
  width: ${(props) => (props.enabled ? 280 : 0)}px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #fff;
`;

const color = '#D8D8D8';

export const Sidebar = () => {
  const [layersVisible, setLayerVisible] = useState(false);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <SidebarDiv enabled={enabled} className="sidebar transition bg-white w-2">
      <div className="flex flex-row justify-center">
        <div className="mr-8">
          <button
            onClick={() => setLayerVisible(false)}
            type="button"
            style={layersVisible ? { color } : {}}
          >
            Design
          </button>
        </div>
        <div className="ml-8">
          <button
            onClick={() => setLayerVisible(true)}
            type="button"
            style={layersVisible ? {} : { color }}
          >
            Layers
          </button>
        </div>
      </div>

      <div className="flex flex-col h-full">
        <SidebarItem
          icon={LayerIcon}
          title="Layers"
          height="full"
          visible={layersVisible}
        >
          <div className="">
            <Layers expandRootOnLoad />
          </div>
        </SidebarItem>

        <SidebarItem
          icon={CustomizeIcon}
          title="Customize"
          height="full"
          visible={!layersVisible}
        >
          <Toolbar />
        </SidebarItem>
      </div>
    </SidebarDiv>
  );
};
