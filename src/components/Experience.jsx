import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = (props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#FFF" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={props.experience.date}
      iconStyle={{ background: props.experience.iconBg }}
      icon={
        <div className="flex justify-center items-center h-full">
          <img
            src={props.experience.icon}
            alt={props.experience.company_name}
            className="w-[60%] h-[60%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] text-bold">
          {props.experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-simbold"
          style={{ margin: 0 }}
        >
          {props.experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {props.experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
