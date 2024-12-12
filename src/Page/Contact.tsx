import MetaHead from "../Components/MetaHead.tsx";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

export default function Contact() {
  return (
    <div className={"flex flex-col items-center justify-between min-h-screen"}>
      <MetaHead
        title={"CSSeducteur : Un Breakpoint dans votre Journée ?"}
        url={"https://csseducteur.love/contact"}
        metaDescription={"Prenez un Breakpoint dans votre journée ! Connectez-vous avec CSSéducteur sur X et Discord pour échanger et explorer le charme du CSS."}
        metaKeywords={"CSSéducteur contact, Breakpoint, rejoindre CSSéducteur, X CSSéducteur, Discord CSSéducteur, communauté CSS, développement web, réseaux sociaux CSS"}
        metaImage={"og-contact.webp"}
      />
      <Navbar type={"blank"}/>
      <section className={"bg-white rounded-3xl w-9/12 self-center m-auto mt-5 mb-10 flex flex-col relative p-3"}>
        <header>
          <h1 className={"text-5xl mb-3 font-extrabold text-center"}>Un Breakpoint dans votre Journée ?</h1>
          <h2 className={"text-2xl my-3 text-center"}>
            Connectez-vous avec CSSéducteur et échangez sur le CSS qui vous séduit le plus.
          </h2>
        </header>
        <div className={"flex flex-col gap-5 items-center text-center my-8"}>
          <a href={"https://x.com/CSSeducteurlove"}
             className={" w-3/12 text-2xl font-bold p-5 bg-black text-white hover:bg-[#333] transition rounded-2xl flex flex-row items-center justify-between"}>
            <img className={"w-8 m-auto"} src="/pictures/X_logo.svg" alt="Logo X"/>
            Nous rejoindre sur X
          </a>
          <a href={"https://discordapp.com/users/280049420396003331"}
             className={"w-3/12 text-2xl font-bold p-5 text-white bg-[#5865F2] hover:bg-[#8891f2] transition rounded-2xl flex flex-row items-center"}>
            <img className={"w-10 h-auto m-auto"} src="/pictures/Discord_logo.svg" alt="Logo Discord"/>
            Nous rejoindre sur Discord
          </a>
        </div>
      </section>
      <Footer/>
    </div>
  )
}