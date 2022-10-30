import "tailwindcss/tailwind.css";
import Navlink from "./navlink";

// Option + Command + array keys for multiline cursors
// cmd w+a to wrap
// .classname to create div

export default function RootLayout({ children }) {
    return (
        <html className="bg-gray-900 text-gray-100 antialiased">
            <head>
                <title>Nested layouts by example</title>
            </head>
            <body>
                <header className="border-b p-4">
                    <nav className="space-x-4">
                        <Navlink href="/">Home</Navlink>
                        <Navlink href="/civilizations">Civilizations</Navlink>
                    </nav>
                </header>
                <div className="p-4">{children}</div>
            </body>
        </html>
    );
}
