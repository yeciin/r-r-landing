import { markdownify } from "@lib/utils/textConverter";

function About({ data }) {
  const { frontmatter } = data;
  const { title, abouts } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row  -mt-6">
          {/* {abouts.map((about, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12  shadow">
                <div className="about-head relative">
                  {markdownify(about.title, "h4")}
                </div>
                {markdownify(about.answer, "p", "about-body mt-4")}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default About;
