import React from 'react'

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  { secureCode = null, respectDnt = true, blockCookies = true }
) => {
  if (process.env.NODE_ENV === `production` && secureCode) {
    const E_TRACKER_ANALYTICS_SCRIPT = (
      <script
        async
        id="_etLoader"
        type="text/javascript"
        src="//static.etracker.com/code/e.js"
        charSet="UTF-8"
        data-secure-code={secureCode}
        data-respect-dnt={respectDnt}
        data-block-cookies={blockCookies}
      />
    )
    setHeadComponents([E_TRACKER_ANALYTICS_SCRIPT])
  }
}
