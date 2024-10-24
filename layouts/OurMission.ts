import React, { ReactElement } from "react"
import { AiFillThunderbolt } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";



interface OurMissionProp {
    missionProp: {
        Icon: ReactElement,
        title: string,
        body: string,
    }
}

export const AboutBody = () => {
    [
      {
        Icon: AiFillThunderbolt,
        title: "Mission",
        body: "Our mission is to empower individuals to express their unique style and personality through high-quality, innovative, and affordable fashion. We strive to curate an inclusive shopping experience that combines cutting-edge trends with sustainability, ensuring every customer feels confident and stylish in their everyday lives.",
      },
      {
        Icon: TbTargetArrow ,
        title: "Vision",
        body: "Our vision is to become the leading global fashion marketplace where style meets innovation. We envision a world where fashion is accessible, sustainable, and reflects the diverse beauty of all individuals, inspiring confidence and creativity with every purchase.",
      },
      {
        Icon: SiSimpleanalytics,
        title: "Goal",
        body: "Our goal is to continuously evolve and expand our product offerings while maintaining a strong commitment to sustainability and customer satisfaction. By enhancing our user experience and fostering a community of fashion-forward thinkers, we aim to create a space where customers can not only shop but also connect, discover, and express their individuality through fashion.",
      },
    ];
}