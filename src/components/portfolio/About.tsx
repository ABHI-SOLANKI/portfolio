import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-narrow grid gap-16 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            Where expertise meets human connection.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-8 md:pt-3"
        >
          <p className="text-lg leading-relaxed text-foreground/85">
            At <span className="font-medium">Dermatics India</span>, I craft high-performing
            content across blogs, product descriptions, and social media - designed to educate,
            engage, and convert. With a strong foundation in SEO and digital content strategy,
            I ensure every piece reaches the right audience and drives meaningful impact.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            My writing style is conversational yet refined, built on a deep understanding of
            audience behavior. I focus on creating content that not only informs but also builds
            trust and long-term brand value.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "SEO-Driven Content",
              "High-Converting Content",
              "Blog Writing",
              "Article Writing",
              "Social content",
              "AI-assisted research",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-4 py-2 text-xs text-foreground/80 text-center"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
