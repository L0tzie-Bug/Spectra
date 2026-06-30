async function getCloudMoonUrls() {
  try {
    const response = await fetch('CloudMoon.json');
    if (!response.ok) return [];
    const data = await response.json();
    return data?.CloudMoonAPIURLS || [];
  } catch {
    return [];
  }
}
(async () => {
  const activeUrls = await getCloudMoonUrls();
  window.cloudMoonUrls = activeUrls;
})();
