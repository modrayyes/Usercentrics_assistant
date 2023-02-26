import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'


function App() {


  const config_Data = () => {
    let queryOptions = { active: true, currentWindow: true }
    chrome.tabs.query(queryOptions, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['js/get_config_data.js'],
      })
    })
  }

  const scripts = () => {
    let queryOptions = { active: true, currentWindow: true }
    chrome.tabs.query(queryOptions, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['js/get_scripts.js'],
      })
    })
  }

  const data_layer = () => {
    let queryOptions = { active: true, currentWindow: true }
    chrome.tabs.query(queryOptions, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['js/get_data_layer.js'],
      })
    })
  }

  const consents = () => {
    let queryOptions = { active: true, currentWindow: true }
    chrome.tabs.query(queryOptions, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['js/get_consents.js'],
      })
    })
  }



  return (
    <div id="container" className="bg-light">
      <div id="header-image">
        <img src="uc-logo.png" alt="logo" />
      </div>
      <div id="uc-data-header">
        <div id="uc-data" className="container">
          <div className="row text-center" id="get-uc-data">
            <div className="col">
              <button
                onClick={config_Data}
                type="button"
                id="btn-uc-data"
                className="btn btn-primary"
              >
                Config Data
              </button>
            </div>
          </div>
          <div className="row text-center" id="get-scripts">
            <div className="col">
              <button
                onClick={scripts}
                type="button"
                id="btn-scripts"
                className="btn btn-primary"
              >
                Scripts
              </button>
            </div>
          </div>
          <div className="row text-center" id="get-data-layer">
            <div className="col">
              <button
              onClick={data_layer}
                type="button"
                id="btn-data-layer"
                className="btn btn-primary"
              >
                Data Layer
              </button>
            </div>
          </div>
          <div className="row text-center" id="get-consents">
            <div className="col">
              <button
                onClick={consents}
                type="button"
                id="btn-consents"
                className="btn btn-primary"
              >
                Consents
              </button>
            </div>
          </div>
          <div className="row text-center" id="get-config">
            <div className="col" id="config-data">
              <button
                type="button"
                id="btn-consents"
                className="btn btn-primary"
              >
                get config
              </button>
            </div>
          </div>
          <div className="row text-center" id="inject-cmp">
            <div className="col">
              <input type="submit" id="btn-inject-cmp" value="Inject CMP" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 id="config-data-input" />
      </div>
      {/* <script>
        const div = document.getElementById("container");
        div.onloaded = function(){
          const script = document.createElement("script");
          script.src = "/index.js"
          div.appendChild(script)
        }
      </script> */}

      <script></script>
    </div>
  )
}

// export default App;

const root = document.createElement('div')
document.body.appendChild(root)
const root1 = createRoot(root)
root1.render(<App />)
