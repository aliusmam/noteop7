function replaceShortcodes() {
    const shortcodes = {
        fd: { name: '720p', regex: /\[fd id='(.*?)'\]/g, url: 'https://www.fastdrama.icu/p/' },
        egf: { name: 'GDFLIX', regex: /\[egf id='(.*?)'\]/g, url: 'https://new5.gdflix.cfd/file/' },
        egft: { name: 'GDTOT', regex: /\[egt id='(.*?)'\]/g, url: 'https://new7.gdtot.dad/file/' },
    };

    document.querySelectorAll('.download-links').forEach(contentContainer => {
        let content = contentContainer.innerHTML;

        Object.values(shortcodes).forEach(({ name, regex, url }) => {
            content = content.replace(regex, (match, id) => 
                `<a href='${url}${id}' target='_blank'>${name}</a>`
            );
        });

        contentContainer.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', replaceShortcodes);
