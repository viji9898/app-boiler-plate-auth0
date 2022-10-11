import { Hero } from "../components/landingPage/hero";
import { Footer } from "../components/navigation/footer";
import { DynamicMetaTags } from "../utils/dynamicMetaTags";

export const LandingPage = ({ helloWorld }) => {
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <DynamicMetaTags
        ogTitle={`Starter App`}
        ogDescription={
          "Starter boiler plate app includes, faunadb, netlify, ant design, axios"
        }
        ogImage={
          "https://app-viji.s3.eu-west-2.amazonaws.com/starter-app/og-image-starter-app-1200x627-01.png"
        }
        ogUrl={``}
      />
      <div>
        <Hero helloWorld={helloWorld} />
        <Footer />
      </div>
    </div>
  );
};
