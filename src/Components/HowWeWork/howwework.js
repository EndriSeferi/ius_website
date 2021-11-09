import React from "react";
import "./howwework.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Sections from "../Sections";
import Webinar from "../Webinar";
import Subsections from "../Subsections";

export default function Howwework() {
  AOS.init({ duration: 1000 });
  return (
    <div className="howwework">
      <h1 className="title">How We Work</h1>
      <Sections
        title="Resources"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium, ullam asperiores eligendi alias tempora fuga, quaerat
          assumenda minima doloremque ab. Placeat fugit sequi minima libero
          exercitationem earum explicabo eum nihil. Accusamus amet fugit
          aperiam. Reiciendis nesciunt adipisci voluptas odit! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quibusdam delectus vero officia
          mollitia in ex cumque natus eveniet iste molestiae!"
      />
      <Webinar
        title="Domestic"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sit iure, dignissimos ad earum obcaecati et debitis mollitia, libero
          animi, facere quod aspernatur eos quis odio dolorem! Fugiat quis,
          dolor pariatur, soluta blanditiis quam tenetur corporis eaque,
          obcaecati nemo exercitationem."
      />
      <Webinar
        title="International"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sit iure, dignissimos ad earum obcaecati et debitis mollitia, libero
          animi, facere quod aspernatur eos quis odio dolorem! Fugiat quis,
          dolor pariatur, soluta blanditiis quam tenetur corporis eaque,
          obcaecati nemo exercitationem."
      />
      <Sections
        title="Events"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium, ullam asperiores eligendi alias tempora fuga, quaerat
          assumenda minima doloremque ab. Placeat fugit sequi minima libero
          exercitationem earum explicabo eum nihil. Accusamus amet fugit
          aperiam. Reiciendis nesciunt adipisci voluptas odit! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quibusdam delectus vero officia
          mollitia in ex cumque natus eveniet iste molestiae!"
      />
      <div className="w-container">
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
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
      />
      <div className="w-container">
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
      </div>
      <Sections
        title="Projects"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium, ullam asperiores eligendi alias tempora fuga, quaerat
          assumenda minima doloremque ab. Placeat fugit sequi minima libero
          exercitationem earum explicabo eum nihil. Accusamus amet fugit
          aperiam. Reiciendis nesciunt adipisci voluptas odit! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quibusdam delectus vero officia
          mollitia in ex cumque natus eveniet iste molestiae!"
      />
      <div className="w-container">
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
        <Subsections
          title="Title Here"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                maiores!"
          image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
        />
      </div>
    </div>
  );
}
