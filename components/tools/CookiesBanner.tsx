import Script from 'next/script';

const CB_SCRIPT_ID = '';

export const CookiesBanner = () => {
  if (process.env.NEXT_PUBLIC_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* COOKIE CONSENT */}

      <Script
        id="Cookiebot"
        async={true}
        src={`https://consent.cookiebot.com/uc.js`}
        strategy={`lazyOnload`}
        data-cbid={CB_SCRIPT_ID}
        data-blockingmode={`auto`}
        type={`text/javascript`}
      />

      {/* COOKIE DECLARATION */}

      <Script
        id="CookieDeclaration"
        src={`https://consent.cookiebot.com/${CB_SCRIPT_ID}/cd.js`}
        type="text/javascript"
        async={true}
      />

      {/* GOOGLE CONSENT MODE */}

      <Script
        id="gtag-consent"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("consent", "default", {
              ad_personalization: "denied",
              ad_storage: "denied",
              ad_user_data: "denied",
              analytics_storage: "denied",
              functionality_storage: "denied",
              personalization_storage: "denied",
              security_storage: "granted",
              wait_for_update: 500,
            });
            gtag("set", "ads_data_redaction", true);
            gtag("set", "url_passthrough", false);
          `,
        }}
      />
    </>
  );
};
