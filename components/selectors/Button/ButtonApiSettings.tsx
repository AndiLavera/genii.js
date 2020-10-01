import React from 'react';
import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';
import { ToolbarTextInput } from '../../editor/Toolbar/ToolbarTextInput';

const ButtonApiSettings = () => (
  <>
    <ToolbarSection title="Variant">
      <ToolbarItem propKey="api.variant" type="radio" label="Style">
        <ToolbarRadio value="contained" label="Full" />
        <ToolbarRadio value="outlined" label="Outline" />
        <ToolbarRadio value="text" label="Text" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Size">
      <ToolbarItem propKey="api.size" type="radio" label="Style">
        <ToolbarRadio value="small" label="Small" />
        <ToolbarRadio value="medium" label="Medium" />
        <ToolbarRadio value="large" label="Large" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Background">
      <ToolbarItem propKey="api.color" type="radio" label="Style">
        <ToolbarRadio value="primary" label="Primary" />
        <ToolbarRadio value="secondary" label="Secondary" />
        <ToolbarRadio value="inherit" label="Inherit" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Disabled">
      <ToolbarItem propKey="api.disabled" type="radio" label="Style">
        <ToolbarRadio value="false" label="False" />
        <ToolbarRadio value="true" label="True" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Href">
      <ToolbarItem propKey="api.href" type="text" label="URL">
        <ToolbarTextInput value="" label="URL" />
      </ToolbarItem>
    </ToolbarSection>
  </>
);

export default ButtonApiSettings;
