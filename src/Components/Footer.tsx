export default function Footer() {
  return (
    <footer className={"w-screen h-32 bg-black flex justify-center text-center"}>
      <div className={"w-9/12 text-white self-center"}>
        <div className={"flex justify-between"}>
          <div className={"flex flex-col"}>
            <h3 className={"text-2xl font-bold"}>CSSéducteur</h3>
            <p className={"text-sm"}>Les Mémoires du CSSéducteur</p>
          </div>
          <div className={"flex flex-col"}>
            <h3 className={"text-2xl font-bold"}>Liens Utiles</h3>
            <p className={"text-sm"}><a href="/">Accueil</a></p>
            <p className={"text-sm"}><a href="/blog">Blog</a></p>
            <p className={"text-sm"}><a href="/about">À Propos</a></p>
          </div>
          <div className={"flex flex-col"}>
            <h3 className={"text-2xl font-bold"}>Contact</h3>
            <p className={"flex-row flex justify-center gap-5 mt-3"}>
              <a href="https://x.com/CSSeducteurlove" target={"_blank"}>
                <img className={"w-8 m-auto"} src="/pictures/X_logo.svg" alt="Logo X"/>
              </a>
              <a href="https://discordapp.com/users/280049420396003331" target={"_blank"}>
                <img className={"w-8 m-auto"} src="/pictures/Discord_logo.svg" alt="Logo Discord"/>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}