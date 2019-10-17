import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer, mergeStyles } from 'office-ui-fabric-react';

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#root)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});

ReactDOM.render(
  <Customizer {...FluentCustomizations}>
    <App />
  </Customizer>,
  document.getElementById('root')
);
