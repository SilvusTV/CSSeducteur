import clsx from "clsx";

type FooterProps = {
  className?: string;
};
export default function Footer(props: FooterProps) {
  return (
    <footer
      className={clsx(
        "flex h-fit w-screen justify-center bg-black text-center",
        props.className,
      )}
    >
      <div className={"w-9/12 self-center text-white"}>
        <div
          className={"flex justify-between py-2 max-md:flex-col max-md:gap-10"}
        >
          <div className={"flex flex-col"}>
            <h3 className={"text-2xl font-bold"}>CSSéducteur</h3>
            <p className={"mt-2 text-sm"}>
              Créez, innovez, séduisez avec CSSéducteur.
            </p>
          </div>
          <div className={"flex flex-col"}>
            <h3 className={"text-2xl font-bold"}>Liens Utiles</h3>
            <p className={"my-2 text-sm"}>
              <a href="/">Accueil</a>
            </p>
            <p className={"my-2 text-sm"}>
              <a href="/blog">Blog</a>
            </p>
            <p className={"my-2 text-sm"}>
              <a href="/about">À Propos</a>
            </p>
          </div>
          <div className={"flex flex-col max-md:mb-5"}>
            <h3 className={"text-2xl font-bold"}>Contact</h3>
            <p className={"mt-3 flex flex-row justify-center gap-5"}>
              <a href="https://x.com/CSSeducteurlove" target={"_blank"}>
                <img
                  width={32}
                  height={32}
                  className={"m-auto w-8"}
                  src="/pictures/X_logo.svg"
                  alt="Logo X"
                  loading={"lazy"}
                />
              </a>
              <a
                href="https://discordapp.com/users/280049420396003331"
                target={"_blank"}
              >
                <img
                  width={32}
                  height={32}
                  className={"m-auto w-8"}
                  src="/pictures/Discord_logo.svg"
                  alt="Logo Discord"
                  loading={"lazy"}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/css%C3%A9ducteur/?viewAsMember=true"
                target={"_blank"}
              >
                <img
                  width={32}
                  height={32}
                  className={"m-auto w-8"}
                  src="/pictures/Linkedin_logo.svg"
                  alt="Logo LinkedIn"
                  loading={"lazy"}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
