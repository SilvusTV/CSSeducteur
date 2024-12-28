import MetaHead from "../Components/MetaHead.tsx";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <MetaHead
        title={"CSSéducteur : Un Breakpoint dans votre Journée ?"}
        url={"https://csseducteur.love/contact"}
        metaDescription={
          "Prenez un Breakpoint dans votre journée ! Connectez-vous avec CSSéducteur sur X et Discord pour échanger et explorer le charme du CSS."
        }
        metaKeywords={
          "CSSéducteur contact, Breakpoint, rejoindre CSSéducteur, X CSSéducteur, Discord CSSéducteur, communauté CSS, développement web, réseaux sociaux CSS"
        }
        metaImage={"og-contact.webp"}
      />
      <Navbar type="blank" />

      {/* Section Hero */}
      <section className="relative m-auto mb-10 mt-10 flex w-9/12 flex-col items-center rounded-3xl bg-white p-8 text-center shadow-xl max-md:w-10/12 max-sm:w-11/12">
        <h1 className="mb-4 text-4xl font-extrabold leading-snug text-gray-800 max-md:text-3xl max-sm:text-2xl">
          Un Breakpoint dans votre Journée ?
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Prenez une pause et rejoignez la communauté CSSéducteur pour échanger,
          partager et découvrir les dernières tendances du CSS.
        </p>
        <p className="mb-6 text-lg text-gray-600">
          Que ce soit pour poser une question, échanger des astuces ou
          simplement discuter, nous sommes là pour vous accueillir.
        </p>
        <img
          width={1700}
          height={400}
          src="/pictures/contact-hero.webp"
          alt="Illustration CSSéducteur Contact"
          className="mt-6 w-full rounded-b-3xl"
        />
      </section>

      {/* Section Connexion Réseaux Sociaux */}
      <section className="m-auto mb-10 mt-10 flex w-9/12 flex-col rounded-3xl bg-white p-8 text-center shadow-lg max-md:w-10/12 max-sm:w-11/12">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
          Connectez-vous avec Nous
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Rejoignez-nous sur nos plateformes préférées et restez informé des
          dernières nouveautés, articles et astuces CSS.
        </p>
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://x.com/CSSeducteurlove"
            className="flex w-3/12 items-center justify-between rounded-2xl bg-black px-8 py-4 text-xl font-bold text-white transition-transform hover:scale-105 hover:bg-[#333] max-lg:w-5/12 max-md:w-7/12 max-sm:w-9/12"
          >
            Nous rejoindre sur X
            <img
              width={32}
              height={32}
              className="ml-auto w-8"
              src="/pictures/X_logo.svg"
              alt="Logo X"
              loading="lazy"
            />
          </a>
          <a
            href="https://discordapp.com/users/280049420396003331"
            className="flex w-3/12 items-center justify-between rounded-2xl bg-[#5865F2] px-8 py-4 text-xl font-bold text-white transition-transform hover:scale-105 hover:bg-[#8891f2] max-lg:w-5/12 max-md:w-7/12 max-sm:w-9/12"
          >
            Nous rejoindre sur Discord
            <img
              width={32}
              height={32}
              className="ml-auto w-10"
              src="/pictures/Discord_logo.svg"
              alt="Logo Discord"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/csseducteur"
            className="flex w-3/12 items-center justify-between rounded-2xl bg-[#0077B5] px-8 py-4 text-xl font-bold text-white transition-transform hover:scale-105 hover:bg-[#005582] max-lg:w-5/12 max-md:w-7/12 max-sm:w-9/12"
          >
            Nous rejoindre sur LinkedIn
            <img
              width={32}
              height={32}
              className="ml-auto w-8"
              src="/pictures/Linkedin_logo.svg"
              alt="Logo LinkedIn"
              loading="lazy"
            />
          </a>
        </div>
      </section>

      {/* Section Informations Complémentaires */}
      <section className="m-auto mb-10 mt-10 flex w-9/12 flex-col rounded-3xl bg-white p-8 text-center shadow-lg max-md:w-10/12 max-sm:w-11/12">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
          Pourquoi nous rejoindre ?
        </h2>
        <p className="mb-4 text-lg text-gray-600">
          Rejoindre CSSéducteur, c'est intégrer une communauté passionnée par le
          développement web et le CSS.
        </p>
        <ul className="list-inside list-disc text-left text-lg text-gray-600">
          <li className="mb-2">
            Partagez vos connaissances et découvrez des astuces CSS.
          </li>
          <li className="mb-2">
            Restez informé des dernières tendances du web design.
          </li>
          <li className="mb-2">
            Accédez à du contenu exclusif et des ressources utiles.
          </li>
        </ul>
      </section>

      {/* Section Call to Action */}
      <section className="m-auto mb-10 mt-10 flex w-9/12 flex-col items-center rounded-3xl bg-white p-8 text-center shadow-lg max-md:w-10/12 max-sm:w-11/12">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 max-sm:text-2xl">
          Prêt à rejoindre l'aventure CSSéducteur ?
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Cliquez sur les liens ci-dessus et connectez-vous directement avec
          nous sur X et Discord.
        </p>
      </section>

      <Footer />
    </div>
  );
}
