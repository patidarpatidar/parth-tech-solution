import './globals.css';import Navbar from '@/components/Navbar';import Footer from '@/components/Footer';
export const metadata={metadataBase:new URL('https://parthtechsolution.com'),title:{default:'Parth Tech Solution | Digital Products That Grow Businesses',template:'%s | Parth Tech Solution'},description:'Modern websites, web applications, e-commerce and custom software for growing businesses.',robots:{index:true,follow:true}};
export default function RootLayout({children}){return <html lang="en"><body><Navbar/><main>{children}</main><Footer/></body></html>}
