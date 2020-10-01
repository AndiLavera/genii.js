import React from 'react';
import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

const TypographyApiSettings = () => (
  <>
    <ToolbarSection title="Variant">
      <ToolbarItem propKey="api.variant" type="radio" label="Style">
        <ToolbarRadio value="h1" label="h1" />
        <ToolbarRadio value="h2" label="h2" />
        <ToolbarRadio value="h3" label="h3" />
        <ToolbarRadio value="h4" label="h4" />
        <ToolbarRadio value="h5" label="h5" />
        <ToolbarRadio value="h6" label="h6" />
        <ToolbarRadio value="subtitle1" label="Subtitle1" />
        <ToolbarRadio value="subtitle2" label="Subtitle2" />
        <ToolbarRadio value="body1" label="Body1" />
        <ToolbarRadio value="body2" label="Body2" />
        <ToolbarRadio value="caption" label="Caption" />
        <ToolbarRadio value="button" label="Button" />
        <ToolbarRadio value="overline" label="Overline" />
        <ToolbarRadio value="srOnly" label="SrOnly" />
        <ToolbarRadio value="inherit" label="Inherit" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Display">
      <ToolbarItem propKey="api.display" type="radio" label="Style">
        <ToolbarRadio value="initial" label="Initial" />
        <ToolbarRadio value="block" label="Block" />
        <ToolbarRadio value="inline" label="Inline" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Color">
      <ToolbarItem propKey="api.color" type="radio" label="Style">
        <ToolbarRadio value="primary" label="Primary" />
        <ToolbarRadio value="secondary" label="Secondary" />
        <ToolbarRadio value="inherit" label="Inherit" />
        <ToolbarRadio value="textPrimary" label="Text Primary" />
        <ToolbarRadio value="textSecondary" label="Text Secondary" />
        <ToolbarRadio value="initial" label="Initial" />
        <ToolbarRadio value="error" label="Error" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Alignment">
      <ToolbarItem propKey="api.align" type="radio" label="Style">
        <ToolbarRadio value="left" label="Left" />
        <ToolbarRadio value="center" label="Center" />
        <ToolbarRadio value="right" label="Right" />
        <ToolbarRadio value="justify" label="Justify" />
        <ToolbarRadio value="inherit" label="Inherit" />
      </ToolbarItem>
    </ToolbarSection>
  </>
);

export default TypographyApiSettings;
