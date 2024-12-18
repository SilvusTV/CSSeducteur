import MetaHead from "../Components/MetaHead.tsx";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

export default function QuizzLanding() {
  return (
    <div className={"flex h-screen flex-col items-center"}>
      <MetaHead
        title={"CSSéducteur - Le quiz pour trouver votre framework CSS idéal"}
        url={"https://csseducteur.love/quizz"}
        metaDescription={
          "Testez votre personnalité de développeur avec le quiz CSSéducteur. Découvrez quel framework CSS vous correspond le mieux, qu'il s'agisse de Tailwind, Bootstrap, ou autre."
        }
        metaKeywords={
          "quiz CSS, frameworks CSS, personnalité développeur, Tailwind CSS, Bootstrap, Bulma, CSSéducteur, développement front-end"
        }
        metaImage={"og-home.webp"}
      />
      <Navbar type={"blank"} />
      <section className="m-auto mb-10 mt-5 flex w-9/12 flex-col self-center rounded-3xl bg-white shadow-lg">
        <header className="m-6 mb-10">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-800">
            Découvrez votre âme sœur CSS
          </h1>
          <p className="text-lg text-gray-600">
            Un quiz interactif pour découvrir quel framework CSS vous représente
            le mieux.
          </p>
        </header>

        <main className="flex flex-col items-center">
          <img
            src="/pictures/path-to-developer-illustration.webp"
            alt="Illustration d'un développeur"
            className="mb-8 w-full"
          />

          <a className="cursor mx-8 mb-6 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 px-6 py-3 font-bold text-white transition-transform hover:scale-105 hover:shadow-lg">
            Commencer le quiz
          </a>
        </main>
      </section>
      <Footer className={"mt-auto"} />
    </div>
  );
}
