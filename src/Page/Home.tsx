import Navbar from "../Components/Navbar.tsx";
import MetaHead from "../Components/MetaHead.tsx";
import Footer from "../Components/Footer.tsx";
import { get3ActiveBlogs } from "../Tools/Interaction.ts";

export default function Home() {
  const blogs = get3ActiveBlogs();
  return (
    <div className={"flex flex-col items-center h-screen"}>
      <MetaHead
        title={"CSSéducteur : trouvez le framework CSS fait pour vous"}
        url={"https://csseducteur.love"}
        metaDescription={"Laissez CSSéducteur vous charmer : trouvez le framework CSS fait pour vous, celui qui saura sublimer vos projets et vous garder à la pointe des tendances envoûtantes du développement web."}
        metaKeywords={"CSS, framework CSS, CSSéducteur, choisir framework CSS, développement web, design responsive, tendances CSS, séduction web, projets web élégants, veille technologique CSS, outils front-end, sublimer projets web, charme du développement"}
        metaImage={"og-home.webp"}
      />
      <Navbar type={"blank"} />
      <section
        className="bg-white rounded-3xl w-9/12 self-center m-auto mt-10 mb-10 flex flex-col items-center text-center shadow-xl relative">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-snug mb-4 mt-8 mx-8">
          Trouvez votre framework CSS idéal <br />
          <span className="text-pink-500">avec CSSéducteur</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6 mx-8">
          Vous êtes développeur et vous cherchez un framework CSS qui combine puissance, élégance, et simplicité ?
          Bienvenue sur CSSéducteur, la plateforme incontournable pour découvrir et choisir le style qui sublimera vos
          projets web.
        </p>
        <p className="text-gray-600 text-lg mb-6 mx-8">
          Avec plus de <span className="font-bold text-purple-700">50 frameworks CSS</span> répertoriés et analysés,
          notre site est conçu pour répondre aux besoins des développeurs, qu’ils soient débutants ou experts.
        </p>
        <button
          className="bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-transform mx-8">
          Faites le test maintenant
        </button>
        <img
          width={1700}
          height={400}
          src="/pictures/hero-image.webp"
          alt="Illustration CSSéductrice"
          className="w-full mt-6 rounded-b-3xl min-w-full object-cover min-h-auto"
        />
      </section>

      {/* Section : Les avantages CSSéducteur */}
      <section className="bg-white rounded-3xl w-9/12 self-center m-auto mt-5 mb-10 flex flex-col p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pourquoi choisir CSSéducteur ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Un outil conçu pour les développeurs</h3>
            <p className="text-gray-600 mt-2">
              Nous savons que chaque projet est unique. C’est pourquoi CSSéducteur vous aide à découvrir le
              framework CSS qui s’adapte parfaitement à vos besoins techniques et esthétiques. Avec notre test,
              nous avons aidé déjà plus de <span className="font-bold">10 000 développeurs</span> à choisir leur style.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Gagnez du temps et de l’efficacité</h3>
            <p className="text-gray-600 mt-2">
              Trouver le bon framework peut être chronophage. CSSéducteur vous simplifie la tâche grâce à une
              analyse précise et des recommandations personnalisées. En moins de <span
              className="font-bold">5 minutes</span>,
              découvrez la solution idéale pour vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Section : Les derniers articles */}
      <section className="bg-white rounded-3xl w-9/12 self-center m-auto mt-5 mb-10 flex flex-col p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Derniers articles de blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((article, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                width={824}
                height={384}
                src={"blog/Pictures/" + article.imageName + "/preview.webp"}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg"
                loading={"lazy"}
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{article.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{article.metaDescription}</p>
              <a
                href={"/blog/" + article.slug}
                className="text-pink-700 font-semibold mt-4 inline-block hover:underline"
              >
                Lire l'article →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section : Communauté */}
      <section className="bg-white rounded-3xl w-9/12 self-center m-auto mt-5 mb-10 flex flex-col p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Rejoignez notre communauté</h2>
        <p className="text-gray-600 text-lg text-center mb-6">
          Déjà plus de <span className="font-bold text-purple-700">15 000 développeurs</span> passionnés ont rejoint
          CSSéducteur pour échanger,
          partager leurs expériences et s'entraider. N'attendez plus !
        </p>
        <div className="flex justify-center gap-4">
          <a href={"https://x.com/CSSeducteurlove"}
             className={"w-3/12 text-xl font-bold p-5 bg-black text-white hover:bg-[#333] transition rounded-2xl flex flex-row items-center justify-between"}>
            Nous rejoindre sur X
            <img width={32} height={32} className={"w-8 m-auto"} src="/pictures/X_logo.svg" alt="Logo X"
                 loading={"lazy"} />

          </a>
          <a href={"https://discordapp.com/users/280049420396003331"}
             className={"w-3/12 text-xl font-bold p-5 text-white bg-[#5865F2] hover:bg-[#8891f2] transition rounded-2xl flex flex-row items-center"}>
            Nous rejoindre sur Discord
            <img width={32} height={32} className={"w-8 h-auto m-auto"} src="/pictures/Discord_logo.svg"
                 alt="Logo Discord" loading={"lazy"} />
          </a>
        </div>
      </section>

      {/* Section : Call to Action */}
      <section
        className="bg-white rounded-3xl w-9/12 self-center m-auto mt-5 mb-10 flex flex-col items-center text-center p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Prêt à découvrir votre framework parfait ?</h2>
        <p className="text-gray-600 text-lg mb-6">
          Ne perdez plus de temps à hésiter. Faites notre test dès maintenant et passez à la vitesse supérieure dans vos
          projets web !
        </p>
        <button
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-transform">
          Je fais le test
        </button>
      </section>
      <Footer />

    </div>
  );
}