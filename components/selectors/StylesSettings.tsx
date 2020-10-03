import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';
// import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';
// import { ToolbarTextInput } from '../../editor/Toolbar/ToolbarTextInput';

const styleSummary = (styles) => {
  // eslint-disable-next-line no-unused-expressions
  `${styles.margin[0] || 0}px ${styles.margin[1] || 0}px ${styles.margin[2] || 0}px ${
    styles.margin[3] || 0}px`;
  return (
    <div className="flex flex-row-reverse">
      <div
        style={{
          background:
          styles.background && `rgba(${Object.values(styles.background)})`,
        }}
        className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
      >
        <p
          style={{ color: styles.color && `rgba(${Object.values(styles.color)})` }}
          className="text-white w-full text-center"
        >
          T
        </p>
      </div>
    </div>
  );
};

const keys = ['styles.background', 'styles.color', 'styles.margin'];

const StylesSettings = () => (
  <>
    <ToolbarSection title="CSS" props={keys} summary={({ styles }: any) => styleSummary(styles)}>
      <ToolbarItem full propKey="styles.background" type="bg" label="Background" />

      <ToolbarItem full propKey="styles.color" type="color" label="Text" />

      <ToolbarItem propKey="styles.margin" index={0} type="slider" label="Margin Top" />
      <ToolbarItem propKey="styles.margin" index={1} type="slider" label="Margin Right" />
      <ToolbarItem propKey="styles.margin" index={2} type="slider" label="Margin Bottom" />
      <ToolbarItem propKey="styles.margin" index={3} type="slider" label="Margin Left" />
    </ToolbarSection>
  </>
);

export default StylesSettings;
