import {StrictMode} from 'react'
import {renderToString} from 'react-dom/server'
import App from './App'
import {StaticRouter} from "react-router-dom/server";

interface IRenderProps {
  path: string
}

export function render({path}: IRenderProps) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <App/>
      </StaticRouter>
    </StrictMode>,
  )
  return {html}
}