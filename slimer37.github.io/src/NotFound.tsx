import { useEffect, useRef } from 'react'

import './NotFound.css'

function NotFound() {
    const messages = [
        "Couldn't find that page.",
        "Sorry. Turned up empty.",
        "Nothing matched that.",
        "Are you sure you've got it right?",
        "Hmmm...",
        "Maybe it's somewhere else.",
        "Wrong number.",
        "Wrong place.",
        "...the end is never the end is never the end is never the end is never the end...",
        "No.",
        "[BUZZER SOUND]",
        "wavyASK AGAIN LATER.",
        "wavyCONCENTRATE AND ASK AGAIN.",
        "wavyREPLY HAZY, TRY AGAIN."
    ]

    const typeInterval = 100
    const typeDelay = 500
    const typeChance = 0.1
    const waveInterval = 40

    const messageRef = useRef<HTMLElement>(null)
    const errRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        let text = messages[Math.floor(Math.random() * messages.length)]

        const message = messageRef.current!

        if (!text.startsWith("wavy")) {
            message.innerHTML = text
        } else {
            text = text.substring(4)
            message.innerHTML = text
                .split("")
                .map(letter => {
                    return `<span>` + letter + `</span>`;
                })
                .join("");

            Array.from(message.children).forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add("wavy");
                }, index * waveInterval);
            });
        }

        if (Math.random() < typeChance) {
            const errNumber = errRef.current!

            const initial = "037"

            const typing = [
                "037|",
                "03|",
                "0|",
                "|",
                "4|",
                "40|",
                "404|",
                "404"
            ]

            errNumber.innerHTML = initial

            Array.from(typing).forEach((text, index) => {
                setTimeout(() => {
                    errNumber.innerHTML = text
                }, index * typeInterval + typeDelay)
            });
        }
    })

    return (
        <div className='container'>
            <h1 className="err" ref={errRef}>404</h1>
            <img src="https://slimer37.me/assets/images/logoeyes.png" width="100px" style={{ marginTop: '-10px', marginBottom: '10px' }} />

            <h2 style={{ margin: 0 }}>Page not found.</h2>

            <p><i ref={messageRef} style={{ color: '#718093' }}>{ }</i></p>

            <br />

            <a className="button" href="/">Take me back</a>
        </div>
    )
}

export default NotFound;