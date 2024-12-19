import MetaHead from "../Components/MetaHead.tsx";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

export default function Contact() {
  return (
    <div className={"flex min-h-screen flex-col items-center justify-between"}>
      <MetaHead
        title={"CSSeducteur : Un Breakpoint dans votre Journée ?"}
        url={"https://csseducteur.love/contact"}
        metaDescription={
          "Prenez un Breakpoint dans votre journée ! Connectez-vous avec CSSéducteur sur X et Discord pour échanger et explorer le charme du CSS."
        }
        metaKeywords={
          "CSSéducteur contact, Breakpoint, rejoindre CSSéducteur, X CSSéducteur, Discord CSSéducteur, communauté CSS, développement web, réseaux sociaux CSS"
        }
        metaImage={"og-contact.webp"}
      />
      <Navbar type={"blank"} />
      <section
        className={
          "relative m-auto mb-10 mt-5 flex w-9/12 flex-col self-center rounded-3xl bg-white p-3"
        }
      >
        <header>
          <h1 className={"mb-3 text-center text-5xl font-extrabold"}>
            Un Breakpoint dans votre Journée ?
          </h1>
          <h2 className={"my-3 text-center text-2xl"}>
            Connectez-vous avec CSSéducteur et échangez sur le CSS qui vous
            séduit le plus.
          </h2>
        </header>
        <div className={"my-8 flex flex-col items-center gap-5 text-center"}>
          <a
            href={"https://x.com/CSSeducteurlove"}
            className={
              "flex w-3/12 flex-row items-center justify-between rounded-2xl bg-black p-5 text-2xl font-bold text-white transition hover:bg-[#333]"
            }
          >
            <img
              width={32}
              height={32}
              className={"m-auto w-8"}
              src="/pictures/X_logo.svg"
              alt="Logo X"
              loading={"lazy"}
            />
            Nous rejoindre sur X
          </a>
          <a
            href={"https://discordapp.com/users/280049420396003331"}
            className={
              "flex w-3/12 flex-row items-center rounded-2xl bg-[#5865F2] p-5 text-2xl font-bold text-white transition hover:bg-[#8891f2]"
            }
          >
            <img
              width={32}
              height={32}
              className={"m-auto h-auto w-10"}
              src="/pictures/Discord_logo.svg"
              alt="Logo Discord"
              loading={"lazy"}
            />
            Nous rejoindre sur Discord
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
