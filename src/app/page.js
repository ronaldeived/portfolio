import Image from "next/image";
import { socialLinks } from "@/app/config";

export default function Home() {
    return (
        <section>
            <a href={socialLinks.linkedin} target="_blank">
                <Image
                    src="/profile.png"
                    alt="Profile photo"
                    className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
                    unoptimized
                    width={160}
                    height={160}
                    priority
                />
            </a>
            <h1 className="mb-8 text-2xl font-medium tracking-tight">
                My Portfolio!
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
            </div>
        </section>
    );
}
