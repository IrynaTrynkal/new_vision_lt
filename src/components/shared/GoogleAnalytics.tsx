import Script from "next/script";

export const GoogleAnalytics = ({ gaId }: { gaId: string }) => {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
                type="text/plain"
                data-cookieyes="analytics"
            />

            <Script
                id="ga-init"
                strategy="afterInteractive"
                type="text/plain"
                data-cookieyes="analytics"
            >
                {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `}
            </Script>
        </>
    );
};
