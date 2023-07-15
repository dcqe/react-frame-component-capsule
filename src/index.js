import React from "react";
import ReactDOM from "react-dom";
import Frame, { FrameContextConsumer } from 'react-frame-component'

function App() {
  return (
    <div>
      <Frame initialContent="<!DOCTYPE html><html><head></head><body><div></div><div>Some other static content</div></body></html>">
          <FrameContextConsumer>
              {
                  // Callback is invoked with iframe's window and document instances
                  ({document, window}) => {
                      // Render Children

                  }
              }
          </FrameContextConsumer>
        Content!
      </Frame>
      <Frame
        mountTarget="#mountHere"
        initialContent="<!DOCTYPE html><html><head></head><body><div>Some static content</div><div id='mountHere'></div></body></html>"
      >
        Content with mountTarget prop
      </Frame>
        <Frame
            initialContent='
                <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <!--
          manifest.json provides metadata used when your web app is installed on a
          users mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        -->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        <link rel="stylesheet" type="text/css" href="styles.css" />

        <!--
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.

          Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
          work correctly both with client-side routing and a non-root public URL.
          Learn how to configure a non-root public URL by running `npm run build`.
        -->
        <title>Cocktail Ordering</title>
        <meta charset="UTF-8">
            <title>React Frame Component Examples</title>
            <style>
                * {
                color: blue;
            }
                iframe {
                width: 100%;
            }
                section {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
            </style>
        </head>
        <body>

        <div id="top-container">
            <div id="first-line">
                <div id="initial-user-request">
                    Please say the name of your drink.
                </div>
                <canvas id="waveformCanvas"></canvas>
                <div id="order-result-container">
                    <div id="youcurrentlyordered">You selected for order:</div>
                    <div id="order-result-text">nothing</div>
                    <div id="confirm-order"></div>
                    <div id="engage-container"></div>
                    <div id="success-container"></div>
                </div>
            </div>

            <button id="order-now-button"
                    style="display: none"
                    onclick="onOrderConfirmPress()">
                Click to confirm order.
            </button>
        </div>

        <script src="waveform.js"></script>
        <script src="file_fetch.js"></script>
        <script src="transcription.js"></script>
        <script src="debug_input.js"></script>
        <script src="utils.js"></script>
        <script src="fm.js"></script>


        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <script src="fm.js"></script>
        <h1>&lt;Frame /> examples</h1>
        <p>Two examples below showing how you can encapsulate individual components or your entire application</p>
        <section>
            <div id="example1"></div>
            <div id="example2"></div>
            <div id="example3"></div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <noscript>You need to enable JavaScript to run this app.</noscript>


        <!--
          To begin the development, run `npm start` or `yarn start`.
          To create a production bundle, use `npm run build` or `yarn build`.
        -->
        </body>
    </html>
    '
        >
            Content with mountTarget prop
        </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
