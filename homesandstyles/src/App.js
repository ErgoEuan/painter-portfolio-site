/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router-dom";
import { css, Global } from "@emotion/react";

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default function App() {
  return (
    <html lang="en">
      <head>

        <meta name="robots" content="noindex,nofollow" />
      </head>
      <Global styles={[globalStyles]} />
      <body>
        <Outlet />
      </body>
    </html>
  );
}
