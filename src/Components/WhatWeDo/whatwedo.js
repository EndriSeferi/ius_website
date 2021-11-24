import React from "react";
import "./whatwedo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Sections from "../Sections";
import Webinar from "../Webinar";
import Subsections from "../Subsections";
import NotAvailable from "../NotAvailable";
export default function Whatwedo() {
  AOS.init({ duration: 1000 });
  return (
    <div className="whatwedo" id="top">
      <h1 className="title">What We Do</h1>
      <Sections
        title="Resources"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium, ullam asperiores eligendi alias tempora fuga, quaerat
          assumenda minima doloremque ab. Placeat fugit sequi minima libero
          exercitationem earum explicabo eum nihil. Accusamus amet fugit
          aperiam. Reiciendis nesciunt adipisci voluptas odit! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quibusdam delectus vero officia
          mollitia in ex cumque natus eveniet iste molestiae!"
        id="resources"
      />
      <NotAvailable />
      <Sections
        title="Events"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium, ullam asperiores eligendi alias tempora fuga, quaerat
          assumenda minima doloremque ab. Placeat fugit sequi minima libero
          exercitationem earum explicabo eum nihil. Accusamus amet fugit
          aperiam. Reiciendis nesciunt adipisci voluptas odit! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quibusdam delectus vero officia
          mollitia in ex cumque natus eveniet iste molestiae!"
        id="events"
      />
      <div className="w-container">
      <NotAvailable />
      </div>
      <Sections
        title="Publications"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium, ullam asperiores eligendi alias tempora fuga, quaerat
          assumenda minima doloremque ab. Placeat fugit sequi minima libero
          exercitationem earum explicabo eum nihil. Accusamus amet fugit
          aperiam. Reiciendis nesciunt adipisci voluptas odit! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quibusdam delectus vero officia
          mollitia in ex cumque natus eveniet iste molestiae!"
        id="publications"
      />
      <div className="w-container">
      <NotAvailable />
      </div>
      <Sections
        title="Projects"
        text=""
        id="projects"
      />
      <div className="w-container">
        <Subsections
          title="MEUP 2019 - Model European Union Parliament 2019"
          text="Simulation of parliamentary institutions in the European level, with the aim of presenting students with the structure and the work model of these institutions. 
          Analysis of European legislation with a focus on economic and entrepreneurial perspectives. 
          Through the engagement of participants on actual European directive analysis - the focus was on a more hands-on learning experience.
          Obtaining general knowledge on the EU and relevant institutions/issues."
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Inkubatori i Sipermarrjes Sociale 2016-2018 (Social Entrepreneurship Incubator 2016-2018)"
          text='Strengthening the development of Small Business Enterprises and increasing the potential of students through entrepreneurial mindset and skills.
          Increasing the educational and training capacities for students in rural areas and/or economically underdeveloped.
          Development of an "entrepreneurial nest" within the structure of the high school.
          Learning about the culture of social entrepreneurship as a way to nurture a set of traits that shape the entrepreneurial character of the target group.'
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Konferenca e Ligjit 2018-2019 (Law Conference 2018-2019)"
          text="Familiarizing the participants with important legal concepts, such as Law on Education, Law on Voluntary work.
          Familiarizing participants with state institutions and entities participating in the legal processes or related to the law.
          Simulation of problematic cases to stimulate critical thinking and gain applicable knowledge.
          Analysis of study cases, to ensure that the learning process was effective."
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
       
      </div>
    </div>
  );
}
