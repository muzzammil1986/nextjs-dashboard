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
      
      {children}
      </body>
    </html>
  );
}
