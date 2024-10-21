
'use client'

import Giscus from "@giscus/react"

export default function Comments({ id }) {
return (
    <footer className="mb-16 mt-16">
        <Giscus
            id={id}
            repo="mstronge/matthewstronge"
            repoId="R_kgDONDM4GQ"
            category="Announcements"
            categoryId="DIC_kwDONDM4Gc4Cjife"
            mapping="specific"
            term={id}
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="dark"
            lang="en"
            loading="lazy"
        />
    </footer>
)
}
