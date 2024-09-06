// Base64 encoding and decoding functions
function encodeBase64(str) {
    try {
        return btoa(unescape(encodeURIComponent(str)));
    } catch (e) {
        console.error("Encoding failed:", e);
        return str; // Fallback to original if encoding fails
    }
}

function decodeBase64(encodedStr) {
    try {
        return decodeURIComponent(escape(atob(encodedStr)));
    } catch (e) {
        console.error("Decoding failed:", e);
        return encodedStr; // Fallback to encoded string if decoding fails
    }
}

// Function to replace shortcodes and encode the ID and URL
function replaceShortcodes() {
    const shortcodes = {
         egf: { name: 'GDFLIX', regex: /\[egf id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://txrlinks.icu/elinks/egf/' },
        egt: { name: 'GDTOT', regex: /\[egt id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://txrlinks.icu/elinks/egt/' },
        egb: { name: 'GDBOT', regex: /\[egb id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://txrlinks.icu/elinks/egb/' },
        zgf: { name: 'GDFLIX', regex: /\[zgf id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://new3.gdflix.cfd/file/' },
        zgt: { name: 'GDTOT', regex: /\[zgt id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://new5.gdtot.dad/file/' },
        zap: { name: 'No-Deside', regex: /\[zap id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://gdbot.txrlinks.icu/' },
        zgb: { name: 'GDBOT', regex: /\[zgb id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://gdmirrorbot.nl/file/' },
        mgf: { name: 'GDFLIX', regex: /\[mgf id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://new3.gdflix.cfd/file/' },
        mgt: { name: 'GDTOT', regex: /\[mgt id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://new5.gdtot.dad/file/' },
        mgb: { name: 'GDBOT', regex: /\[mgb id='(.*?)'\]/g, url: 'https://droplink.co/st?api=d84cf1c232f6aa62029cfa8d08acbac1f965b488&url=https://gdmirrorbot.nl/file/' },
    };

    const contentContainers = document.querySelectorAll('.post-body');
    contentContainers.forEach(contentContainer => {
        let content = contentContainer.innerHTML;
        for (const key in shortcodes) {
            if (shortcodes.hasOwnProperty(key)) {
                content = content.replace(shortcodes[key].regex, function(match, id) {
                    // Encode the full URL including the ID
                    const fullUrl = `${shortcodes[key].url}${id}`;
                    const encodedUrl = encodeBase64(fullUrl);
                    // Debugging log
                    console.log(`Original URL: ${fullUrl}, Encoded URL: ${encodedUrl}`);
                    // Create the encoded link with a class for decoding on click
                    return `<a href='data:text/plain;base64,${encodedUrl}' class='encoded-link' target='_blank'>
                               <button class='download-button'> ${shortcodes[key].name}</button>
                            </a>`;
                });
            }
        }
        contentContainer.innerHTML = content;
    });

    // Add event listener to decode the encoded URL on click
    document.querySelectorAll('.encoded-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent immediate navigation
            const encodedUrl = this.href.split(',')[1]; // Extract the Base64 part
            const decodedUrl = decodeBase64(encodedUrl);
            // Debugging log
            console.log(`Encoded URL: ${encodedUrl}, Decoded URL: ${decodedUrl}`);
            window.open(decodedUrl, '_blank'); // Open the decoded URL in a new tab
        });
    });
}

document.addEventListener('DOMContentLoaded', replaceShortcodes);
