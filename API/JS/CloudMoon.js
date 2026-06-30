async function getCloudMoonUrls() {
  try {
    const response = await fetch('API/CloudMoon.json');
    if (!response.ok) return [];
    const data = await response.json();
    return data?.CloudMoonAPIURLS || [];
  } catch {
    return [];
  }
}
(async () => {
  const activeUrls = await getCloudMoonUrls();
  if (activeUrls.length === 0) return;
  window.cloudMoonUrls = activeUrls;
})();
