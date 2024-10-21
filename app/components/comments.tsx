
'use client'

import Giscus from "@giscus/react"

export default function Comments() {
return (
    <footer className="mb-16">
        <Giscus
            id="comments"
            repo="mstronge/matthewstronge"
            repoId="R_kgDONDM4GQ"
            category="Announcements"
            categoryId="DIC_kwDONDM4Gc4Cjife"
            mapping="specific"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="dark"
            lang="en"
            loading="lazy"
        />
    </footer>
)
}
