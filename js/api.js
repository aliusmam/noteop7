function replaceShortcodes() {
    const shortcodes = {
        egf: { name: 'GDFLIX', regex: /\[egf id='(.*?)'\]/g, url: 'https://new3.gdflix.cfd/file/' },
        egt: { name: 'GDTOT', regex: /\[egt id='(.*?)'\]/g, url: 'https://new5.gdtot.dad/file/' },
        egb: { name: 'GDBOT', regex: /\[egb id='(.*?)'\]/g, url: 'https://gdmirrorbot.nl/file/' },
    };

    const contentContainers = document.querySelectorAll('.post-body');
    contentContainers.forEach(contentContainer => {
        let content = contentContainer.innerHTML;
        for (const key in shortcodes) {
            if (shortcodes.hasOwnProperty(key)) {
                content = content.replace(shortcodes[key].regex, function(match, id) {
                    return `<a href='${shortcodes[key].url}${id}' target='_blank'>
                                ${shortcodes[key].name}
                            </a>`;
                });
            }
        }
        contentContainer.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', replaceShortcodes);

 function addFooter() {
            const footer = document.createElement('footer');
            footer.innerHTML = "Disclaimer: We do not host any files on our servers. All files or content are hosted on third-party websites. We do not accept responsibility for content hosted on third-party websites. We just index those links that are already available on the internet.";
            document.body.appendChild(footer);
        }

        document.addEventListener('DOMContentLoaded', () => {
            replaceShortcodes();
            addFooter();
        });