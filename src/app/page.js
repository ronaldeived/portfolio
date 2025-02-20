import Image from "next/image";
import { socialLinks } from "@/app/config";

export default function Home() {
    return (
        <section>
            <a href={socialLinks.linkedin} target="_blank">
                <Image
                    src="/images/me.png"
                    alt="Profile photo"
                    className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
                    unoptimized
                    width={160}
                    height={160}
                    priority
                />
            </a>
            <h1 className="mb-8 text-2xl font-medium tracking-tight">
                Full Stack Developer | C# .NET | Angular | React
            </h1>
            <p className="mb-2">
                With over 5 years of experience, I'm a Full Stack Developer specializing in C#/.NET, Angular and React, with professional experience since 2020. I focus on building scalable, high-performance applications, primarily in commercial and financial sectors.
            </p>

            <p className="mb-2">
                I have strong expertise in developing RESTful Web APIs, optimizing system performance and integrations, and working with event-driven architectures using CQRS, DDD, and messaging systems like Azure Service Bus.
            </p>

            <p className="mb-2">
                My frontend experience includes Angular using reactivity with NgRx, delivering responsive and maintainable UIs with Angular Material, as well as expertise in React, Next.js, and Tailwind CSS.
            </p>

            <p className="mb-2">
                I prioritize code longevity and maintainability, applying SOLID principles, clean architecture, and testing with XUnit and Fluent Assertions.
            </p>

            <p className="mb-2">
                I'm passionate about problem-solving, debugging complex issues, and collaborating with teams to build reliable and efficient solutions.
            </p>
        </section>
    );
}
