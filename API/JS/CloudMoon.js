async function getCloudMoonUrls() {
  try {
    const response = await fetch('/Spectra/API/CloudMoon.json');
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
