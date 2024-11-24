import {StrictMode} from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server'; // Pour SSR
import App from './App';

export function render(url: string) {
  const context = {};
  try {
    const html = renderToString(
      <StrictMode>
        <StaticRouter location={url} context={context}>
          <App/>
        </StaticRouter>
      </StrictMode>
    );

    return {html, context};
  } catch (err) {
    console.error('SSR Error:', err);
    return {html: '', context: {}};
  }

}
