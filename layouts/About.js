import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

function About({ data }) {
  const { frontmatter } = data;
  const { title, info, banner, logo } = frontmatter;
  return (
    <section className="section">
      <div className="container">

        <br></br>
        {markdownify(title, "h1", "text-center font-normal")}
        {markdownify(info, "p", "text-center mt-6 mb-6")} {}
        <Image
          src={banner.image}
          alt="workflow image"
          width={1920}
          height={296}
        />
        <div className="section row -mt-6">{}</div>
      </div>
    </section>
  );
}

export default About;
