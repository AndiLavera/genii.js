import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import { Editor, Frame, Element } from '@craftjs/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
// import lz from 'lzutf8';
import { Container } from '../components/selectors';
import Button from '../components/selectors/Button';
import Typography from '../components/selectors/Typography';
import Grid from '../components/selectors/Grid';
import Card from '../components/selectors/Card';
import { Video } from '../components/selectors/Video';
import { Viewport, RenderNode } from '../components/editor';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'acumin-pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  const [enabled] = useState(true);
  // const base64 = '';
  // const uint8array = lz.decodeBase64(base64);
  // const json = lz.decompress(uint8array);

  return (
    <ThemeProvider theme={theme}>
      <div className="h-full h-screen">
        <NextSeo
          title="Craft.js"
          description="A React framework for building drag-n-drop page editors."
          canonical="https://craft.js.org/"
          twitter={{
            site: 'craft.js.org',
            cardType: 'summary_large_image',
          }}
        />
        <Editor
          resolver={{
            Container,
            Typography,
            Button,
            Video,
            Grid,
            Card,
          }}
          enabled={enabled}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame>
              <Element
                canvas
                is={Container}
                width="800px"
                height="auto"
                background={{
                  r: 255, g: 255, b: 255, a: 1,
                }}
                padding={['40', '40', '40', '40']}
              />
            </Frame>
          </Viewport>
        </Editor>

      </div>
    </ThemeProvider>
  );
}

export default App;
