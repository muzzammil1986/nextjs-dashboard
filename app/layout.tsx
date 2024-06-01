import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1599870932013624"
      crossOrigin="anonymous">
     </script>)}
    
      </head>
      <body>
 
      {children}
      </body>
    </html>
  );
}
