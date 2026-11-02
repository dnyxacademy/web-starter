// Week 1: plain JavaScript, loaded as a module.
// Week 2 you will rebuild this screen in React. For now, the DOM directly.

const button = document.querySelector("#demo-button");
const output = document.querySelector("#demo-output");

button?.addEventListener("click", () => {
  output.textContent = `It works. The time is ${new Date().toLocaleTimeString()}.`;
});

// Fetching JSON — you need this from Week 1, Day 5 onwards.
// Delete it once your own code replaces it.
export async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }
  return response.json();
}
