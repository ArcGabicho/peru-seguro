import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://peru-seguro.com'),
    title: 'Perú Seguro | Portal de Denuncias Online',
    description: 'Para reclamar el título profesional se nos ordenó desarrollar un portal de denuncias digital que permita a los ciudadanos reportar delitos de corrupción y extorsión.',
    openGraph: {
        type: 'website',
        url: '/',
        siteName: 'Perú Seguro',
        title: 'Perú Seguro | Portal de Denuncias Online',
        description: 'Para reclamar el título profesional se nos ordenó desarrollar un portal de denuncias digital que permita a los ciudadanos reportar delitos de corrupción y extorsión.',
        images: [
            {
                url: 'https://i.imgur.com/9cCG6Nc.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Perú Seguro | Portal de Denuncias Online',
        description: 'Para reclamar el título profesional se nos ordenó desarrollar un portal de denuncias digital que permita a los ciudadanos reportar delitos de corrupción y extorsión.',
        images: ['https://i.imgur.com/9cCG6Nc.png'],
    },
    other: {
        'facebook:app_id': '',
    },
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="es">
            <body className={`${poppins.variable} antialiased min-h-screen`}>
                {children}
            </body>
        </html>
    )
}

export default Layout;