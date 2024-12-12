import MetaHead from "../Components/MetaHead.tsx";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

export default function About() {
  return (
    <div className={"flex flex-col items-center justify-between min-h-screen"}>
      <MetaHead
        title={"CSSeducteur : Le Charme Révélé - Découvrez l'essence de CSSéducteur"}
        url={"https://csseducteur.love/about"}
        metaDescription={"Plongez dans l'univers de CSSéducteur avec 'Le Charme Révélé'. Découvrez notre mission, nos valeurs et notre passion pour vous guider vers le framework CSS parfait."}
        metaKeywords={"CSSéducteur, frameworks CSS, à propos CSS, développement web, choisir framework CSS, design responsive, tendances web, Bootstrap, Tailwind CSS, communauté front-end, sublimer projets web, outils front-end, valeurs CSSéducteur"}
        metaImage={"og-about.webp"}
      />
      <Navbar type={"blank"}/>
      <section className={"bg-white rounded-3xl w-9/12 self-center m-auto mt-5 mb-10 flex flex-col relative p-3"}>
        <header>
          <h1 className={"text-5xl mb-3 font-extrabold text-center"}>Le Charme Révélé</h1>
          <p className={"text-2xl my-3 text-center"}>Découvrez l'histoire et la mission de CSSéducteur, votre guide pour choisir le framework CSS parfait.</p>
        </header>

        <article>
          <h2 className={"text-2xl font-bold mt-1"}>Qui sommes-nous ?</h2>
          <p className={"text-xl mb-5"}>
            CSSéducteur, c'est bien plus qu'un simple site web : c'est une expérience. Créé par une équipe de passionnés
            de développement front-end et de design, notre objectif est clair : vous aider à trouver le framework CSS
            qui correspond le mieux à vos besoins et à vos projets. Nous croyons que chaque développeur mérite un
            partenaire parfait pour sublimer ses créations.
          </p>

          <h2 className={"text-2xl font-bold mt-1"}>Notre mission : séduire et inspirer</h2>
          <p className={"text-xl"}>
            Dans le monde des frameworks CSS, il peut être difficile de choisir celui qui conviendra parfaitement à vos
            ambitions. Bootstrap, Tailwind CSS, Foundation… chaque outil a son charme, mais lequel est fait pour vous ?
            CSSéducteur vous guide dans cette quête, avec des comparatifs détaillés, des articles inspirants et des
            conseils pratiques.
          </p>
          <p className={"text-xl mb-5"}>
            Nous voulons que chaque développeur, qu'il soit débutant ou expert, puisse découvrir et exploiter les
            merveilles des frameworks CSS tout en restant à la pointe des tendances web.
          </p>

          <h2 className={"text-2xl font-bold mt-1"}>Pourquoi le thème de la séduction ?</h2>
          <p className={"text-xl mb-5"}>
            La séduction, c'est un art, tout comme le développement web. Tout comme un partenaire idéal, un bon
            framework CSS doit s'adapter à vos besoins, vous inspirer et vous aider à révéler tout le potentiel de vos
            projets. CSSéducteur joue avec cette analogie pour rendre votre exploration des outils front-end aussi
            amusante qu'enrichissante.
          </p>

          <h2 className={"text-2xl font-bold mt-1"}>Un espace pour les passionnés</h2>
          <p className={"text-xl"}>
            CSSéducteur, c'est aussi une communauté. Notre blog regorge d'articles captivants, d'exemples concrets et de
            retours d'expérience pour enrichir vos connaissances. Rejoignez-nous pour partager vos découvertes, poser
            des questions et continuer à apprendre.
          </p>
          <p className={"text-xl mb-5"}>
            Consultez notre <a className={"underline"} href="/blog" title="Visitez notre blog CSSéducteur">blog ici</a> pour plonger dans un
            univers de charme et d'expertise.
          </p>

          <h2 className={"text-2xl font-bold mt-1"}>Nos valeurs</h2>
          <ul className={"text-xl mb-5"}>
            <li><strong>Accessibilité :</strong> Nous croyons que la technologie doit être accessible à tous, quelle que
              soit votre expérience.
            </li>
            <li><strong>Passion :</strong> Chaque ligne de contenu est créée avec amour pour le développement web.</li>
            <li><strong>Innovation :</strong> Restez à jour avec les dernières tendances CSS et front-end.</li>
          </ul>

          <h2 className={"text-2xl font-bold mt-1"}>Faites partie de l'aventure</h2>
          <p  className={"text-xl"}>
            CSSéducteur est une invitation à explorer, expérimenter et apprendre. Suivez-nous sur nos réseaux sociaux
            pour ne rien manquer et rejoignez des milliers de développeurs séduits par notre vision.
          </p>
          <p  className={"text-xl mb-5"}>
            Vous avez une question ou une suggestion ? Nous sommes là pour échanger :
            <a className={"underline"} href="/contact" title="Contactez-nous"> Contactez-nous</a>.
          </p>
        </article>
      </section>
      <Footer/>
    </div>
  )
}