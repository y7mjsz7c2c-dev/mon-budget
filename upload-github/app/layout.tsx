import type {Metadata,Viewport} from 'next';
import './globals.css';
import Pwa from './pwa';
export const metadata:Metadata={title:'Mon Budget — Vos finances, simplement',description:'Votre budget personnel, en français.',applicationName:'Mon Budget',appleWebApp:{capable:true,title:'Mon Budget',statusBarStyle:'black-translucent'},icons:{apple:'/icons/apple-touch-icon.png',icon:'/icons/icon-192.png'},formatDetection:{telephone:false}};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#000000',colorScheme:'dark'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body><Pwa/>{children}</body></html>}
