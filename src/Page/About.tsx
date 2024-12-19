import MetaHead from "../Components/MetaHead.tsx";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <MetaHead
        title={
          "CSSéducteur : Le Charme Révélé - Découvrez l'essence de CSSéducteur"
        }
        url={"https://csseducteur.love/about"}
        metaDescription={
          "Plongez dans l'univers de CSSéducteur avec 'Le Charme Révélé'. Découvrez notre mission, nos valeurs et notre passion pour vous guider vers le framework CSS parfait."
        }
        metaKeywords={
          "CSSéducteur, frameworks CSS, à propos CSS, développement web, choisir framework CSS, design responsive, tendances web, Bootstrap, Tailwind CSS, communauté front-end, sublimer projets web, outils front-end, valeurs CSSéducteur"
        }
        metaImage={"og-about.webp"}
      />
      <Navbar type="blank" />

      <section className="relative mx-auto mt-10 w-9/12 rounded-3xl bg-white p-8 text-center shadow-lg max-md:mt-5 max-md:w-10/12 max-sm:mt-2.5 max-sm:w-11/12">
        <h1 className="text-5xl font-extrabold text-gray-800 max-md:text-4xl max-sm:text-3xl">
          Le Charme Révélé
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-md:text-lg max-sm:text-base">
          Découvrez l'histoire et la mission de CSSéducteur, votre guide pour
          choisir le framework CSS parfait.
        </p>
      </section>

      <section className="mx-auto mt-10 grid w-9/12 grid-cols-1 gap-10 max-md:mt-5 max-md:w-10/12 max-md:gap-5 max-sm:mt-2.5 max-sm:w-11/12 max-sm:gap-2.5">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
            Qui sommes-nous ?
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            CSSéducteur, c'est bien plus qu'un simple site web : c'est une
            expérience. Créé par une équipe de passionnés de développement
            front-end et de design, notre objectif est clair : vous aider à
            trouver le framework CSS qui correspond le mieux à vos besoins et à
            vos projets.
          </p>
          <p className="text-lg text-gray-600">
            Nous croyons que chaque développeur mérite un partenaire parfait
            pour sublimer ses créations.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
            Notre mission : séduire et inspirer
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Dans le monde des frameworks CSS, il peut être difficile de choisir
            celui qui conviendra parfaitement à vos ambitions. Bootstrap,
            Tailwind CSS, Foundation… chaque outil a son charme, mais lequel est
            fait pour vous ? CSSéducteur vous guide dans cette quête avec des
            comparatifs détaillés, des articles inspirants et des conseils
            pratiques.
          </p>
          <p className="text-lg text-gray-600">
            Nous voulons que chaque développeur, qu'il soit débutant ou expert,
            puisse découvrir et exploiter les merveilles des frameworks CSS tout
            en restant à la pointe des tendances web.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
            Pourquoi le thème de la séduction ?
          </h2>
          <p className="text-lg text-gray-600">
            La séduction, c'est un art, tout comme le développement web. Un bon
            framework CSS doit s'adapter à vos besoins, vous inspirer et vous
            aider à révéler tout le potentiel de vos projets. CSSéducteur joue
            avec cette analogie pour rendre votre exploration des outils
            front-end aussi amusante qu'enrichissante.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
            Nos valeurs
          </h2>
          <ul className="space-y-4 text-lg text-gray-600">
            <li>
              <strong>Accessibilité :</strong> Nous croyons que la technologie
              doit être accessible à tous, quelle que soit votre expérience.
            </li>
            <li>
              <strong>Passion :</strong> Chaque ligne de contenu est créée avec
              amour pour le développement web.
            </li>
            <li>
              <strong>Innovation :</strong> Restez à jour avec les dernières
              tendances CSS et front-end.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto my-10 w-9/12 rounded-3xl bg-white p-8 text-center shadow-lg max-md:my-5 max-md:w-10/12 max-sm:my-2.5 max-sm:w-11/12">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
          Rejoignez-nous
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Vous avez une question ou une suggestion ? Nous sommes là pour
          échanger :
          <a
            className="text-purple-600 underline hover:text-purple-800"
            href="/contact"
            title="Contactez-nous"
          >
            Contactez-nous
          </a>
          .
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://x.com/CSSeducteurlove"
            className="w-1/2 rounded-lg bg-black px-4 py-2 text-center text-lg text-white transition hover:bg-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suivez-nous sur X
          </a>
          <a
            href="https://discordapp.com/users/280049420396003331"
            className="w-1/2 rounded-lg bg-[#5865F2] px-4 py-2 text-center text-lg text-white transition hover:bg-[#8891f2]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rejoignez-nous sur Discord
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
