import Navbar from "../Components/Navbar.tsx";
import MetaHead from "../Components/MetaHead.tsx";
import Footer from "../Components/Footer.tsx";
import { get3ActiveBlogs } from "../Tools/InteractionBlog.ts";

export default function Home() {
  const blogs = get3ActiveBlogs();
  return (
    <div className={"flex h-screen flex-col items-center"}>
      <MetaHead
        title={"CSSéducteur : trouvez le framework CSS fait pour vous"}
        url={"https://csseducteur.love"}
        metaDescription={
          "Laissez CSSéducteur vous charmer : trouvez le framework CSS fait pour vous, celui qui saura sublimer vos projets et vous garder à la pointe des tendances envoûtantes du développement web."
        }
        metaKeywords={
          "CSS, framework CSS, CSSéducteur, choisir framework CSS, développement web, design responsive, tendances CSS, séduction web, projets web élégants, veille technologique CSS, outils front-end, sublimer projets web, charme du développement"
        }
        metaImage={"og-home.webp"}
      />
      <Navbar type={"blank"} />
      <section className="max-smmt-5 relative m-auto mb-10 mt-10 flex w-9/12 flex-col items-center self-center rounded-3xl bg-white text-center shadow-xl max-md:mb-5 max-md:w-10/12 max-sm:mb-2.5 max-sm:w-11/12">
        <h1 className="mx-8 mb-4 mt-8 text-4xl font-extrabold leading-snug text-gray-800 max-md:text-3xl max-sm:text-2xl">
          Trouvez votre framework CSS idéal <br />
          <span className="text-pink-500">avec CSSéducteur</span>
        </h1>
        <p className="mx-8 mb-6 text-lg text-gray-600">
          Vous êtes développeur et vous cherchez un framework CSS qui combine
          puissance, élégance, et simplicité ? Bienvenue sur CSSéducteur, la
          plateforme incontournable pour découvrir et choisir le style qui
          sublimera vos projets web.
        </p>
        <p className="mx-8 mb-6 text-lg text-gray-600">
          Avec plus de{" "}
          <span className="font-bold text-purple-700">50 frameworks CSS</span>{" "}
          répertoriés et analysés, notre site est conçu pour répondre aux
          besoins des développeurs, qu’ils soient débutants ou experts.
        </p>
        <a
          href={"/quizz"}
          className="mx-8 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 px-6 py-3 font-bold text-white transition-transform hover:scale-105 hover:shadow-lg"
        >
          Faites le test maintenant
        </a>
        <img
          width={1700}
          height={400}
          src="/pictures/hero-image.webp"
          alt="Illustration CSSéductrice"
          className="mt-6 w-full rounded-b-3xl"
        />
      </section>

      {/* Section : Les avantages CSSéducteur */}
      <section className="m-auto mb-10 mt-5 flex w-9/12 flex-col self-center rounded-3xl bg-white p-6 shadow-lg max-md:mb-5 max-md:w-10/12 max-sm:my-2.5 max-sm:w-11/12">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
          Pourquoi choisir CSSéducteur ?
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Un outil conçu pour les développeurs
            </h3>
            <p className="mt-2 text-gray-600">
              Nous savons que chaque projet est unique. C’est pourquoi
              CSSéducteur vous aide à découvrir le framework CSS qui s’adapte
              parfaitement à vos besoins techniques et esthétiques. Avec notre
              test, nous avons aidé déjà plus de{" "}
              <span className="font-bold">10 000 développeurs</span> à choisir
              leur style.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Gagnez du temps et de l’efficacité
            </h3>
            <p className="mt-2 text-gray-600">
              Trouver le bon framework peut être chronophage. CSSéducteur vous
              simplifie la tâche grâce à une analyse précise et des
              recommandations personnalisées. En moins de{" "}
              <span className="font-bold">5 minutes</span>, découvrez la
              solution idéale pour vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Section : Les derniers articles */}
      <section className="m-auto mb-10 mt-5 flex w-9/12 flex-col self-center rounded-3xl bg-white p-6 shadow-lg max-md:mb-5 max-md:w-10/12 max-sm:my-2.5 max-sm:w-11/12">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
          Derniers articles de blog
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((article, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-100 p-4 transition-shadow hover:shadow-lg"
            >
              <img
                width={824}
                height={384}
                src={"blog/Pictures/" + article.imageName + "/preview.webp"}
                alt={article.title}
                className="h-48 w-full rounded-t-lg object-cover"
                loading={"lazy"}
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {article.metaDescription}
              </p>
              <a
                href={"/blog/" + article.slug}
                className="mt-4 inline-block font-semibold text-pink-700 hover:underline"
              >
                Lire l'article →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section : Communauté */}
      <section className="m-auto mb-10 mt-5 flex w-9/12 flex-col self-center rounded-3xl bg-white p-6 shadow-lg max-md:mb-5 max-md:w-10/12 max-sm:my-2.5 max-sm:w-11/12">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 max-sm:text-2xl">
          Rejoignez notre communauté
        </h2>
        <p className="mb-6 text-center text-lg text-gray-600">
          Déjà plus de{" "}
          <span className="font-bold text-purple-700">15 000 développeurs</span>{" "}
          passionnés ont rejoint CSSéducteur pour échanger, partager leurs
          expériences et s'entraider. N'attendez plus !
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://x.com/CSSeducteurlove"
            className="w-1/2 rounded-lg bg-black px-4 py-2 text-center text-lg text-white transition hover:bg-[#333]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suivez-nous sur X
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
            className="w-1/2 rounded-lg bg-[#5865F2] px-4 py-2 text-center text-lg text-white transition hover:bg-[#8891f2]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rejoignez-nous sur Discord
            <img
              width={32}
              height={32}
              className={"m-auto h-auto w-8"}
              src="/pictures/Discord_logo.svg"
              alt="Logo Discord"
              loading={"lazy"}
            />
          </a>
        </div>
      </section>

      {/* Section : Call to Action */}
      <section className="m-auto mb-10 mt-5 flex w-9/12 flex-col items-center self-center rounded-3xl bg-white p-8 text-center shadow-lg max-md:mb-5 max-md:w-10/12 max-sm:my-2.5 max-sm:w-11/12">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 max-sm:text-2xl">
          Prêt à découvrir votre framework parfait ?
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Ne perdez plus de temps à hésiter. Faites notre test dès maintenant et
          passez à la vitesse supérieure dans vos projets web !
        </p>
        <a
          href="/quizz"
          className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-bold text-white transition-transform hover:scale-105 hover:shadow-lg"
        >
          Je fais le test
        </a>
      </section>
      <Footer />
    </div>
  );
}
