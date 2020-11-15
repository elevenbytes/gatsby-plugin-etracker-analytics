import Cookies from 'js-cookie'

export const onRouteUpdate = (
  { location },
  { isCookieConsentEnabled = true, controlCookieName = 'cookie_control_consent' }
) => {
  if (process.env.NODE_ENV === `production` && typeof window._etracker !== `undefined`) {
    if (isCookieConsentEnabled) {
      if (Cookies.get(controlCookieName) === `true`) {
        window._etracker.enableCookies(location.host)
        window._etracker.enableTracking(location.host)
      } else {
        window._etracker.disableTracking(location.host)
        window._etracker.disableCookies(location.host)
      }
    }
  }
}
