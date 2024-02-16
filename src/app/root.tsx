import { GithubIcon } from 'lucide-react'

export default function Root() {
    return (
        <h1 className="flex flex-col items-center gap-4">
            We are working in it
            <a
                href="https://github.com/murilobalbino/treinos.club"
                target="_blank"
                className="flex cursor-pointer gap-2 rounded-md border px-5 py-1 ring-0 transition-all duration-300 hover:opacity-50 focus:opacity-50 focus:ring focus:ring-zinc-200"
                rel="noreferrer"
            >
                <GithubIcon /> Repository
            </a>
        </h1>
    )
}
