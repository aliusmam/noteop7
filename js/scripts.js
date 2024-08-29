function replaceShortcodes() {
    const shortcodes = {
        egf: { name: 'GDFLIX', regex: /\[egf id='(.*?)'\]/g, url: 'https://txrlinks.icu/elinks/' },
        egt: { name: 'GDTOT', regex: /\[egt id='(.*?)'\]/g, url: 'https://txrlinks.icu/elinks/' },
        egb: { name: 'GDBOT', regex: /\[egb id='(.*?)'\]/g, url: 'https://txrlinks.icu/elinks/' },
        zgf: { name: 'GDFLIX', regex: /\[zgf id='(.*?)'\]/g, url: 'https://new3.gdflix.cfd/file/' },
        zgt: { name: 'GDTOT', regex: /\[zgt id='(.*?)'\]/g, url: 'https://new5.gdtot.dad/file/' },
        zap: { name: 'No-Deside', regex: /\[zap id='(.*?)'\]/g, url: 'https://gdbot.txrlinks.icu/' },
        zgb: { name: 'GDBOT', regex: /\[zgb id='(.*?)'\]/g, url: 'https://gdmirrorbot.nl/file/' },
        mgf: { name: 'GDFLIX', regex: /\[mgf id='(.*?)'\]/g, url: 'https://new3.gdflix.cfd/file/' },
        mgt: { name: 'GDTOT', regex: /\[mgt id='(.*?)'\]/g, url: 'https://new5.gdtot.dad/file/' },
        mgb: { name: 'GDBOT', regex: /\[mgb id='(.*?)'\]/g, url: 'https://gdmirrorbot.nl/file/' },
    };

    const contentContainers = document.querySelectorAll('.post-body');
    contentContainers.forEach(contentContainer => {
        let content = contentContainer.innerHTML;
        for (const key in shortcodes) {
            if (shortcodes.hasOwnProperty(key)) {
                content = content.replace(shortcodes[key].regex, function(match, id) {
                    return `<a href='${shortcodes[key].url}${id}' target='_blank'>
                                <button class='download-button'>${shortcodes[key].name}</button>
                            </a>`;
                });
            }
        }
        contentContainer.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', replaceShortcodes);
