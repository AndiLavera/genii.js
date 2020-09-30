import React from 'react';
import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';
import { ToolbarTextInput } from '../../editor/Toolbar/ToolbarTextInput';

const ButtonSettings = () => (
  <>
    {/* TODO: Add css styles */}
    {/* <ToolbarSection
      title="Colors"
      props={['styleBackground', 'styleColor']}
      summary={({ styleBackground, styleColor }: any) => (
        <div className="flex flex-row-reverse">
          <div
            style={{
              background:
              styleBackground && `rgba(${Object.values(styleBackground)})`,
            }}
            className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
          >
            <p
              style={{ color: styleColor && `rgba(${Object.values(styleColor)})` }}
              className="text-white w-full text-center"
            >
              T
            </p>
          </div>
        </div>
      )}
    >
      <ToolbarItem
        full
        propKey="styleBackground"
        type="bg"
        label="Background"
      />
      <ToolbarItem full propKey="styleColor" type="color" label="Text" />
    </ToolbarSection>
    <ToolbarSection
      title="Margin"
      props={['styleMargin']}
      summary={({ styleMargin }: any) => `${styleMargin[0] || 0}px ${styleMargin[1] || 0}px ${styleMargin[2] || 0}px ${
        styleMargin[3] || 0
      }px`}
    >
      <ToolbarItem propKey="styleMargin" index={0} type="slider" label="Top" />
      <ToolbarItem propKey="styleMargin" index={1} type="slider" label="Right" />
      <ToolbarItem propKey="styleMargin" index={2} type="slider" label="Bottom" />
      <ToolbarItem propKey="styleMargin" index={3} type="slider" label="Left" />
    </ToolbarSection> */}

    <ToolbarSection title="Variant">
      <ToolbarItem propKey="variant" type="radio" label="Style">
        <ToolbarRadio value="contained" label="Full" />
        <ToolbarRadio value="outlined" label="Outline" />
        <ToolbarRadio value="text" label="Text" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Size">
      <ToolbarItem propKey="size" type="radio" label="Style">
        <ToolbarRadio value="small" label="Small" />
        <ToolbarRadio value="medium" label="Medium" />
        <ToolbarRadio value="large" label="Large" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Background">
      <ToolbarItem propKey="color" type="radio" label="Style">
        <ToolbarRadio value="primary" label="Primary" />
        <ToolbarRadio value="secondary" label="Secondary" />
        <ToolbarRadio value="inherit" label="Inherit" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Disabled">
      <ToolbarItem propKey="disabled" type="radio" label="Style">
        <ToolbarRadio value="false" label="False" />
        <ToolbarRadio value="true" label="True" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection title="Href">
      <ToolbarItem propKey="href" type="text" label="URL">
        <ToolbarTextInput value="" label="URL" />
      </ToolbarItem>
    </ToolbarSection>
  </>
);

export { ButtonSettings };
