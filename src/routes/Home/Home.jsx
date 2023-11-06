export default function Home() {
  document.title = "HOME";

  if (sessionStorage.getItem("token-user")) {
    return (
      <div>
        <h1>Home</h1>
        <h2>Grande Oferta!</h2>

        <div>
          <figure>
            <img src="/black.png" alt="Logo" />
            <figcaption></figcaption>
          </figure>
        </div>
      </div>
    );
  } else {
    window.location = "/login";
  }
}
