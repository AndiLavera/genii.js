import React from 'react';
import { ToolbarSection, ToolbarItem } from '../../editor';

const GridApiSettings = () => (
  <>
    {/* TODO: IDT slider is the best option here.
    Inputs 1-12? just select number of columns(1-6)? */}
    <ToolbarSection title="XS" props={['api.xs']} summary={({ api }: any) => api.xs}>
      <ToolbarItem propKey="api.xs" type="slider" label="Value" />
    </ToolbarSection>

    <ToolbarSection title="SM" props={['api.sm']} summary={({ api }: any) => api.sm}>
      <ToolbarItem propKey="api.sm" type="slider" label="Value" />
    </ToolbarSection>

    <ToolbarSection title="MD" props={['api.md']} summary={({ api }: any) => api.md}>
      <ToolbarItem propKey="api.md" type="slider" label="Value" />
    </ToolbarSection>

    <ToolbarSection title="LG" props={['api.lg']} summary={({ api }: any) => api.lg}>
      <ToolbarItem propKey="api.lg" type="slider" label="Value" />
    </ToolbarSection>

    <ToolbarSection title="XL" props={['api.xl']} summary={({ api }: any) => api.xl}>
      <ToolbarItem propKey="api.xl" type="slider" label="Value" />
    </ToolbarSection>
  </>
);

export default GridApiSettings;
