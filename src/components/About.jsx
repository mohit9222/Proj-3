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

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          IT - Financial Planning - Capital Expense.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        I spearheaded transformative efforts to drive innovation, launch new
        products, and enhance existing services. With a relentless focus on
        delivering exceptional customer experiences, I led cross-functional
        teams through every stage of the project lifecycle, from ideation to
        successful implementation.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        Drawing on my extensive experience in program management, I collaborated
        closely with product, security, and technology teams to ensure the
        seamless execution of projects. By fostering a culture of collaboration
        and innovation, I leveraged agile principles to drive efficiency,
        adaptability, and continuous improvement.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        Through strategic vendor partnerships and contract negotiations, I
        optimized vendor relationships and service level agreements (SLAs) to
        align with our business objectives and customer needs. Passionate about
        working on projects end-to-end, I prioritized customer-centricity,
        ensuring that every initiative was tailored to meet and exceed customer
        expectations.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        In this role, I actively engaged with security teams to identify
        vulnerabilities and design robust solutions to mitigate risks and
        safeguard our systems and data. With a strong understanding of ISO
        product management principles, I implemented best practices to ensure
        quality, security, and compliance across our product portfolio.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        Proficient in tools such as Power BI and Jira, I utilized data-driven
        insights and agile methodologies to drive informed decision-making and
        streamline project management processes. By participating in tech
        reviews and staying abreast of industry trends, I remained at the
        forefront of technological innovation, driving forward-thinking
        solutions that propelled towards success.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, "about");
