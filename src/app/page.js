import Image from "next/image";
import { socialLinks } from "@/app/config";

export default function Home() {
    return (
        <section>
            <a href={socialLinks.linkedin} target="_blank">
                <Image
                    src="/images/me.png"
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
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="prose prose-neutral dark:prose-invert">
            </div>
        </section>
    );
}
