
import Layout from '../../layout/layout';

// Metadata export without viewport
export const metadata = {
    title: 'PrimeReact Sakai',
    description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
    robots: { index: false, follow: false },
    openGraph: {
        type: 'website',
        title: 'PrimeReact SAKAI-REACT',
        url: 'https://sakai.primereact.org/',
        description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
        images: ['https://www.primefaces.org/static/social/sakai-react.png'],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};

// Separate viewport export
export const viewport = {
    initialScale: 1.0, // Ensure proper floating-point value
    width: 'device-width', // Proper string format
};

export default function AppLayout({ children }) {
    return <Layout>{children}</Layout>;
}
