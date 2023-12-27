// App.js
import Card from "./Card";
import ppritika from "../../assets/img/ppritika.jpg";
const CardContainer = () => {
  return (
    <>
      <div className="flex justify-center items-center  bg-gray-200">
        <Card
          title="Ritika Bajracharya"
          description="Hey, I'm Ritika Bajracharya, a seasoned web developer with a year of hands-on experience. 
        I specialize in creating responsive and user-friendly interfaces.
        Eager to bring fresh perspectives to your web solutions, I'm currently open to new opportunities. Let's build something extraordinary together!
         "
          imageUrl={ppritika}
          languages="Languages: HTML, CSS, JavaScript, Tailwind CSS, React Js, Refine JS(Basics)"
          buttonText="Download CV"
        />
      </div>
      <span className="space-x-10">
        Find me on:{" "}
        <span>
          <a href="https://github.com/bajracharyaritika08">
            <i className="ri-github-fill"></i>{" "}
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/ritika-bajracharya/">
            <i className="ri-linkedin-box-line"></i>{" "}
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/ritika-bajracharya/">
            <i className="ri-instagram-line"></i>{" "}
          </a>
        </span>
      </span>
    </>
  );
};

export default CardContainer;
