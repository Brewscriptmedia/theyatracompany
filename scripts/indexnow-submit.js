const SITE_URL = "https://theyatracompany.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY = "043ab4dfa7a4340be0c6dae50c67ba17";

async function submitToIndexNow() {
  try {
    // Get the current sitemap
    const sitemapResponse = await fetch(`${SITE_URL}/sitemap.xml`);

    if (!sitemapResponse.ok) {
      throw new Error(
        `Could not fetch sitemap.xml: ${sitemapResponse.status} ${sitemapResponse.statusText}`
      );
    }

    const sitemap = await sitemapResponse.text();

    // Extract URLs from the sitemap
    const urls = [
      ...sitemap.matchAll(/<loc>(.*?)<\/loc>/g),
    ].map((match) => match[1].trim());

    if (urls.length === 0) {
      throw new Error("No URLs found in sitemap.xml");
    }

    console.log(`Found ${urls.length} URLs in sitemap.`);

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: "theyatracompany.com",
        key: KEY,
        keyLocation: `${SITE_URL}/${KEY}.txt`,
        urlList: urls,
      }),
    });

    const responseText = await response.text();

    console.log(`IndexNow response: ${response.status}`);
    console.log(responseText);

    if (!response.ok) {
      throw new Error(
        `IndexNow submission failed with status ${response.status}`
      );
    }

    console.log(`Successfully submitted ${urls.length} URLs to IndexNow.`);
  } catch (error) {
    console.error("IndexNow submission error:");
    console.error(error);
    process.exit(1);
  }
}

submitToIndexNow();