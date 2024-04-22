import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const Pjects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-3xl leading-[30px]"
      >
        Results-driven and strategically minded professional with proven
        expertise in overseeing and executing complex initiatives from
        conception to completion. Adept at leading cross-functional teams and
        managing multiple projects simultaneously to deliver high-impact results
        within scope, budget, and schedule.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-3xl leading-[30px]"
      >
        Throughout my career, I have successfully launched numerous products and
        services, leveraging my keen understanding of market dynamics and
        customer needs to drive innovation and achieve business objectives. By
        collaborating effectively with global teams, I have navigated diverse
        cultural landscapes and orchestrated cross-functional efforts to deliver
        projects on time and within budget.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-3xl leading-[30px]"
      >
        One of my key strengths is my ability to create robust processes and
        procedures that optimize efficiency and ensure consistency in project
        execution. By implementing data-driven decision-making processes, I have
        driven continuous improvement initiatives, resulting in measurable
        enhancements in operational performance and customer satisfaction
        metrics.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-3xl leading-[30px]"
      >
        I am deeply passionate about leveraging data and numbers to inform
        strategic decision-making and drive business growth. Whether it's
        analyzing market trends, tracking project performance, or identifying
        areas for optimization, I thrive on uncovering insights that lead to
        actionable outcomes and tangible results.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-3xl leading-[30px]"
      >
        In summary, I bring a wealth of experience, a proven track record of
        success, and a relentless commitment to excellence to every project I
        undertake. With a focus on customer-centricity, data-driven
        decision-making, and effective collaboration, I am poised to drive
        innovation and drive value for an organization in the ever-evolving
        landscape of program management.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(Pjects, "Pjects");
