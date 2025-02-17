import Link from "next/link";

const navItems = {
    "/projects": { name: "Projects" }
};

export function Navbar() {
    return (
        <nav className="lg:mb-16 mb-12 py-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <Link href="/" className="text-3xl font-semibold tracking-tight">
                    Ronaldeived
                </Link>
                <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
                    {Object.entries(navItems).map(([path, {name}]) => (
                        <Link
                            key={path}
                            href={path}
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
