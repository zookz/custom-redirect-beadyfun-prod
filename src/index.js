import "./styles.css";

function getQueryParameters() {
  const url = window.location.search;
  const queryString = url.split("?")[1] || url.split("://")[1];
  const urlParams = new URLSearchParams(queryString);

  const path = urlParams.get("path") || "/Dashboard";
  const id = urlParams.get("id");
  return { path, id };
}

function handleRedirect(path, id, timeout) {
  setTimeout(() => {
    window.location = `https://app.beady.fun/?path=${path}&query={'pattern':'${id}'}`;
  }, timeout);

  const deepLinkURL = `fun.beady.consumerapp://&path=${path}&query={'pattern':'${id}'}`;
  window.location.replace(deepLinkURL);
}

const { path, id } = getQueryParameters();
handleRedirect(path, id, 5000);

document.getElementById("app").innerHTML = `
<h1>Beady app viderestilling...</h1>
<div>
Vi sender dig videre til Beady appen. Hvis det ikke sker automatisk, kan du trykke på linket nedenfor.
  <br /><br />
  <a href="javascript:void(0);" id="manualRedirect" rel="noopener noreferrer">Fortsæt til Beady appen her</a>.
</div>
`;

document
  .getElementById("manualRedirect")
  .addEventListener("click", () => handleRedirect(path, id, 0));
