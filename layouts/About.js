import { markdownify } from "@lib/utils/textConverter";

function About({ data }) {
  const { frontmatter } = data;
  const { title, info, abouts } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        {markdownify(info, "p", "text-center mt-6 mb-6")} {/* This displays the 'info' content */}
        <div className="section row -mt-6">
          {/* The 'abouts.map' section is removed */}
        </div>
      </div>
    </section>
  );
}

export default About;
