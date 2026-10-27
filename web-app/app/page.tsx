import NavLinks from './nav-links';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
            <h1 className="text-4xl font-bold">
                Welcome
            </h1>

            <p className="text-gray-600">
                Select a page to visit.
            </p>

            <nav className="flex flex-wrap justify-center gap-4">
                <NavLinks />
            </nav>
        </main>
    );
}