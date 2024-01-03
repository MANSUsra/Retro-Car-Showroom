"use client"
import "./globals.css";

import { ImageSlider, CallToAction, Blog, Footer, NavBar } from "@components";

export const metadata = {
  title: "RETROCAR SHOWROOM"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const slides = [
    {url: "http://localhost:3000/rent.jpg", title: "Rent cars", text: 'Rent cars'},
    {url: "http://localhost:3000/no.jpg", title: "Embark on a journey through time, spanning both the past and the future.", text: 'Travel between the past and the future'},
    {url: "http://localhost:3000/blogging.jpg", title: "Read and Write Blogs about your experience with cars", text: 'Blog about cars'},
  ];
  const containerStyles = {
    width: '900px',
    height: '80vh',
    margin: "0 auto 40px",
    padding: '40px'

  }
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <div style={containerStyles}>
          <ImageSlider slides={slides}/>
        </div>
        <Blog/>
        <CallToAction/>
        <Footer />
      </body>
    </html>
  );
}
