import React from 'react';
import { ToolbarSection, ToolbarItem, ToolbarTextInput } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';
import { capitalize, weightDescription } from '../../../utils/text';
import TypographyApiSettings from './TypographyApiSettings';

const TypographySettings = () => (
  <>
    <ToolbarSection title="Text">
      <ToolbarItem propKey="text" type="text" label="Text">
        <ToolbarTextInput value="" label="URL" type="text" />
      </ToolbarItem>
    </ToolbarSection>

    <TypographyApiSettings />

    <ToolbarSection
      title="Typography"
      props={['styles.fontSize', 'styles.fontWeight', 'styles.textAlign']}
      summary={({ styles }: any) => `${styles.fontSize || ''}, ${weightDescription(
        styles.fontWeight,
      )}, ${capitalize(styles.textAlign)}`}
    >
      <ToolbarItem
        full
        propKey="styles.fontSize"
        type="slider"
        label="Font Size"
      />

      <ToolbarItem propKey="styles.textAlign" type="radio" label="Align">
        <ToolbarRadio value="left" label="Left" />
        <ToolbarRadio value="center" label="Center" />
        <ToolbarRadio value="right" label="Right" />
      </ToolbarItem>

      <ToolbarItem propKey="styles.fontWeight" type="radio" label="Weight">
        <ToolbarRadio value="400" label="Regular" />
        <ToolbarRadio value="500" label="Medium" />
        <ToolbarRadio value="700" label="Bold" />
      </ToolbarItem>
    </ToolbarSection>

    <ToolbarSection
      title="Margin"
      props={['styles.margin']}
      summary={({ styles }: any) => `${styles.margin[0] || 0}px ${styles.margin[1] || 0}px ${styles.margin[2] || 0}px ${
        styles.margin[3] || 0
      }px`}
    >
      <ToolbarItem propKey="styles.margin" index={0} type="slider" label="Top" />
      <ToolbarItem propKey="styles.margin" index={1} type="slider" label="Right" />
      <ToolbarItem propKey="styles.margin" index={2} type="slider" label="Bottom" />
      <ToolbarItem propKey="styles.margin" index={3} type="slider" label="Left" />
    </ToolbarSection>

    <ToolbarSection
      title="Appearance"
      props={['styles.color', 'styles.shadow']}
      summary={({ styles }: any) => (
        <div className="fletext-right">
          <p
            style={{
              color: styles.color && `rgba(${Object.values(styles.color)})`,
              textShadow: `0px 0px 2px rgba(0, 0, 0, ${styles.shadow / 100})`,
            }}
            className="text-white text-right"
          >
            T
          </p>
        </div>
      )}
    >
      <ToolbarItem full propKey="styles.color" type="color" label="Text" />
      <ToolbarItem
        full
        propKey="styles.shadow"
        type="slider"
        label="Shadow"
      />
    </ToolbarSection>
  </>
);

export default TypographySettings;
