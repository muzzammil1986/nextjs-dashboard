import '@/app/ui/global.css';
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <head>
        
      
    
      </head>
      <body>
      <Script async id="google-ads" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1599870932013624"
      crossOrigin="anonymous">
     </Script>
      {children}
      </body>
    </html>
  );
}
