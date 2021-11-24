import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../WhatWeDo/whatwedo.css";
import "./whoweare.css";
import Subsections from "../Subsections";
import Avatar from "../Avatar";
import News from "./News";
import NotAvailable from "../NotAvailable";

export default function WhoWeAre() {
  AOS.init({ duration: 1000 });

  return (
    <div className="whatwedo" id="top">
      <h1 className="title" data-aos="fade-in">
        Who We Are
      </h1>
      <p className="title-text" data-aos="fade-right">
        IUS Center Albania was established as an informal group in 2018, whereas
        legally it was officially founded in 2021 in Tirana. Throughout the time
        it served as an informal group, IUS members were mainly engaged in
        youth-related projects on a national and regional level. The scope of
        these activities included social entrepreneurship, social activism,
        capacity building, and law-related conferences. Some of the activities
        were organized by the members of the informal group with the support of
        various stakeholders in Albania, like the Ministry of Education, the
        Town Hall of Tirana, the Ministry of Innovation, intergovernmental
        offices, and local businesses. It was these experiences that enabled IUS
        to become a well-established organization with the contribution of 14
        young scholars after several years of capacity building and academic
        advancement. Currently, IUS has started implementing its vision and
        strategy in a number of important missions where one of them is mainly
        focused on creating an environment that inspires Albanian youth to
        consider applied economic knowledge as a successful way to empower their
        community and a new entrepreneurial culture.
      </p>
      <NotAvailable />
      {/* <div className="vision" id="vision">
        <div className="corners3">
          <div className="center">
            <img
              data-aos="flip-right"
              src="https://www.tirana.al/images/logo-adm.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="vision-text">
          <h2 data-aos="fade-in">Vision</h2>
          <p data-aos="fade-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio modi
            est itaque numquam aut tempore ex quasi at nemo, dolorum dolor,
            facilis unde? Repudiandae ullam repellat culpa numquam, optio
            debitis rem, incidunt blanditiis illum, perspiciatis architecto hic.
            Unde eligendi tenetur optio placeat, animi tempore minus at alias in
            excepturi non commodi laboriosam officia quo sed, doloremque laborum
            deleniti quidem. Nobis perspiciatis ad, autem a vitae in illum enim
            corrupti optio facere sapiente facilis aliquam, deleniti ut eligendi
            ipsa minus eaque. Neque cum rerum optio unde totam provident
            explicabo, id iste hic nulla, alias vitae voluptatem velit, sit
            recusandae sunt quis exercitationem. Ipsam, iusto mollitia. Adipisci
            quo, assumenda maiores quasi labore odio blanditiis magni, incidunt
            nam temporibus qui quod error animi numquam aliquid nulla. Corporis
            unde pariatur accusantium cum molestias eaque, sunt dolorum quidem
            nihil dignissimos aliquam debitis consectetur ex! Cumque maxime
            totam et voluptatem itaque dignissimos eaque, optio voluptate eum
            autem qui blanditiis, nam alias expedita aut omnis voluptates
            ratione doloremque. Exercitationem nobis, repudiandae accusamus
            impedit provident dolor facilis ullam laborum quia quaerat
            consequatur, minima iste! Sint eos, modi unde similique beatae dicta
            error consequatur odit ipsam eius saepe tenetur id, aspernatur a
            eveniet quidem nisi labore facere commodi porro.
          </p>
        </div>
      </div> */}

      {/* <div className="vision" id="mission">
        <div className="vision-text">
          <h2 data-aos="fade-in">Mission</h2>
          <p data-aos="fade-right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio modi
            est itaque numquam aut tempore ex quasi at nemo, dolorum dolor,
            facilis unde? Repudiandae ullam repellat culpa numquam, optio
            debitis rem, incidunt blanditiis illum, perspiciatis architecto hic.
            Unde eligendi tenetur optio placeat, animi tempore minus at alias in
            excepturi non commodi laboriosam officia quo sed, doloremque laborum
            deleniti quidem. Nobis perspiciatis ad, autem a vitae in illum enim
            corrupti optio facere sapiente facilis aliquam, deleniti ut eligendi
            ipsa minus eaque. Neque cum rerum optio unde totam provident
            explicabo, id iste hic nulla, alias vitae voluptatem velit, sit
            recusandae sunt quis exercitationem. Ipsam, iusto mollitia. Adipisci
            quo, assumenda maiores quasi labore odio blanditiis magni, incidunt
            nam temporibus qui quod error animi numquam aliquid nulla. Corporis
            unde pariatur accusantium cum molestias eaque, sunt dolorum quidem
            nihil dignissimos aliquam debitis consectetur ex! Cumque maxime
            totam et voluptatem itaque dignissimos eaque, optio voluptate eum
            autem qui blanditiis, nam alias expedita aut omnis voluptates
            ratione doloremque. Exercitationem nobis, repudiandae accusamus
            impedit provident dolor facilis ullam laborum quia quaerat
            consequatur, minima iste! Sint eos, modi unde similique beatae dicta
            error consequatur odit ipsam eius saepe tenetur id, aspernatur a
            eveniet quidem nisi labore facere commodi porro.
          </p>
        </div>
        <div className="corners3">
          <div className="center">
            <img
              data-aos="flip-right"
              src="https://www.tirana.al/images/logo-adm.png"
              alt="Logo"
            />
          </div>
        </div>
      </div> */}

      <div className="staff" id="staff">
        <div className="staff-title">
          <h2>Our Staff</h2>
        </div>
        <div className="staff-cards">
          <Avatar
            name="Aldi Shehu"
            bio=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              ratione saepe unde, impedit cumque repellat eaque libero deleniti
              exercitationem id minus, illo accusantium quod vel nostrum fuga
              officia hic at?"
            image="https://www.tirana.al/images/logo-adm.png"
          />
          <Avatar
            name="Aldi Shehu"
            bio=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              ratione saepe unde, impedit cumque repellat eaque libero deleniti
              exercitationem id minus, illo accusantium quod vel nostrum fuga
              officia hic at?"
            image="https://www.tirana.al/images/logo-adm.png"
          />
          <Avatar
            name="Aldi Shehu"
            bio=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              ratione saepe unde, impedit cumque repellat eaque libero deleniti
              exercitationem id minus, illo accusantium quod vel nostrum fuga
              officia hic at?"
            image="https://www.tirana.al/images/logo-adm.png"
          />
          <Avatar
            name="Aldi Shehu"
            bio=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              ratione saepe unde, impedit cumque repellat eaque libero deleniti
              exercitationem id minus, illo accusantium quod vel nostrum fuga
              officia hic at?"
            image="https://www.tirana.al/images/logo-adm.png"
          />
          <Avatar
            name="Aldi Shehu"
            bio=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              ratione saepe unde, impedit cumque repellat eaque libero deleniti
              exercitationem id minus, illo accusantium quod vel nostrum fuga
              officia hic at?"
            image="https://www.tirana.al/images/logo-adm.png"
          />
          <Avatar
            name="Aldi Shehu"
            bio=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              ratione saepe unde, impedit cumque repellat eaque libero deleniti
              exercitationem id minus, illo accusantium quod vel nostrum fuga
              officia hic at?"
            image="https://www.tirana.al/images/logo-adm.png"
          />
        </div>
      </div>

      <div className="staff" id="ambassadors">
        <div className="staff-title">
          <h2>Ambassadors</h2>
        </div>
        <NotAvailable />

        {/* <div className="staff-cards">
          <Subsections
            title="Title Here"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  maiores!"
            image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
          />
          <Subsections
            title="Title Here"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  maiores!"
            image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
          />
          <Subsections
            title="Title Here"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  maiores!"
            image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
          />
          <Subsections
            title="Title Here"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  maiores!"
            image="https://www.coe.int/documents/8475493/54964831/webinars_news.jpg/f3d3bbf9-87da-4e5c-f8a9-904c8d1ff0b0"
          />
        </div> */}
      </div>
      <News />
    </div>
  );
}
