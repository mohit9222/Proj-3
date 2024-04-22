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
        <h2 className={styles.sectionHeadText}>Business Resilience - BCDR.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        I spearheaded the business continuity and disaster recovery project for
        my organization, while focusing to safeguard operations and ensure
        resilience in the face of unforeseen challenges. Leveraging my expertise
        in risk management and strategic planning, I developed robust processes
        and emergency response plans to mitigate risks and minimize disruptions
        to business operations.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        I meticulously documented these plans, ensuring clarity and
        accessibility to key stakeholders. Recognizing the importance of
        preparedness, I led comprehensive testing exercises to validate the
        effectiveness of our plans and identify areas for improvement.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        During the unprecedented challenges posed by the Covid-19 pandemic, I
        played a pivotal role in activating our business continuity plans and
        ensuring seamless operations across global teams. By collaborating
        closely with teams across different time zones, I facilitated the
        implementation of best practices and protocols to safeguard our
        workforce and maintain business continuity.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        Despite the uncertainties of the pandemic, I am proud to say that our
        operations remained uninterrupted, thanks to our proactive planning and
        swift response efforts. Regular communication and updates to leadership
        ensured transparency and alignment on our strategies, leading to a
        highly successful outcome.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        This experience reinforced my commitment to ensuring the resilience and
        sustainability of our organization, and I am passionate about leveraging
        my expertise to drive continuous improvement and preparedness for future
        challenges.
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
