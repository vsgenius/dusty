document.addEventListener('copy', async (e) => {
  const text = await navigator.clipboard.readText();
  navigator.clipboard.writeText(`"Cкопировано с ${location.href}" ` + text);
});
