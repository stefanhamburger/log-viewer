import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer, mergeStyles } from 'office-ui-fabric-react';
import { getState } from './state';

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

export default function render(): void {
  const state = getState();

  ReactDOM.render(
    <Customizer {...FluentCustomizations}>
      <App logEntries={state.logEntries} />
    </Customizer>,
    document.getElementById('root')
  );
}
