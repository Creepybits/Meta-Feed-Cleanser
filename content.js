function cleanGarbageFeed() {
    // === PHASE 1: NUKE SPONSORED ADS (The "/"ads/about/" check) ===
    // This is incredibly fast because it targets the specific href directly
    const adLinks = document.querySelectorAll('a[href*="/ads/about/"]');
    
    adLinks.forEach(link => {
        // Climb to find the parent post container
        const postContainer = link.closest('[aria-posinset], [role="article"], [data-pagelet^="FeedUnit"]');
        
        if (postContainer) {
            // Skip if we already nuked it
            if (postContainer.hasAttribute('data-zanno-nuked')) return;

            console.log("💥 Zanno's Cleanser (Link-Check) nuked a Sponsored Ad!");
            postContainer.style.display = 'none';
            postContainer.setAttribute('data-zanno-nuked', 'true');
        }
    });

    // === PHASE 2: NUKE SUGGESTED CONTENT ("Följ" or "Gå med") ===
    const spans = document.querySelectorAll('span');

    spans.forEach(span => {
        const text = span.textContent.trim();
        if (text === "Följ" || text === "Gå med") {

            // Climb upwards for the closest parent post container
            const postContainer = span.closest('[aria-posinset], [role="article"], [data-pagelet^="FeedUnit"]');

            if (postContainer) {
                // Skip if we already nuked it
                if (postContainer.hasAttribute('data-zanno-nuked')) return;

                // Check for the organic friend share exception
                if (!postContainer.textContent.includes("delade ett inlägg")) {
                    console.log("💥 Zanno's Cleanser (Bottom-Up) nuked a Suggested Post!");

                    postContainer.style.display = 'none';
                    postContainer.setAttribute('data-zanno-nuked', 'true');
                }
            }
        }
    });
}

const observer = new MutationObserver((mutations) => {
    cleanGarbageFeed();
});

// Run immediately on load
cleanGarbageFeed();

observer.observe(document.body, { childList: true, subtree: true });
console.log("⚔️ Zanno's Feed Cleanser v1.4 (Multi-Nuker Mode) is online...");
