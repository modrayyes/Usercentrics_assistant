import * as React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div>
      <img src="icon.png" />
    </div>
  );
}


const root = document.createElement('div')
document.body.appendChild(root)
  const root1 = createRoot(root);
  root1.render(<App />);
