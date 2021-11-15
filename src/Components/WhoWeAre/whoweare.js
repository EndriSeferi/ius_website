import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../WhatWeDo/whatwedo.css";
import "./whoweare.css";
import Subsections from "../Subsections";
import Avatar from "../Avatar";
import News from "./News";

export default function WhoWeAre() {
  AOS.init({ duration: 1000 });

  return (
    <div className="whatwedo" id="top">
      <h1 className="title" data-aos="fade-in">
        Who We Are
      </h1>
      <p className="title-text" data-aos="fade-right">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        nostrum esse, sit nisi doloremque molestiae distinctio aliquam fugiat
        ipsam at voluptatibus dolor deleniti voluptas recusandae corrupti sequi
        amet, facilis necessitatibus! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quasi architecto, dolor harum illum recusandae
        voluptatem a nam suscipit, maiores aperiam odio. Est, ipsa temporibus
        asperiores dolor repellendus earum illum quasi, iste, unde quia qui et!
        Quis cum officia iure ipsa quo voluptas, totam cupiditate aut,
        blanditiis porro corrupti alias ad quidem possimus quod officiis, rem
        libero. At quidem vero possimus dolorem pariatur esse, placeat ea nulla.
        Aperiam quos animi autem tenetur sed repellat nulla quas, placeat
        expedita unde quo sapiente soluta officia. Beatae accusamus in nulla
        deserunt itaque nesciunt ut optio! Porro praesentium architecto modi
        mollitia ut similique voluptate aliquid.
      </p>

      <div className="vision" id="vision">
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
      </div>

      <div className="vision" id="mission">
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
      </div>

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
        <div className="staff-cards">
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
        </div>
      </div>
      <News />
    </div>
  );
}
