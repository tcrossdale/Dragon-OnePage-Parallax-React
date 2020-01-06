import React, { useState, useRef, createRef, useEffect } from "react";
import DemoModal from "../components/DemoModal";

const FrontPage = props => {
  // eslint-disable-next-line
  const [frontPageContent, setFrontPageContent] = useState(props.appData);

  const mainContent = useRef(null);

  const moreCollapse = () => {
    let expandLinks = mainContent.current.getElementsByClassName(
      "collapse-btn"
    );
    for (var i = 0; i < expandLinks.length; i++) {
      expandLinks[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        let theLink = evt.target,
          theParent = theLink.closest("div"),
          theCollapseId = theParent.getAttribute("data-collapsepanel")
            ? `${theParent.getAttribute("data-collapsepanel")}`
            : null,
          theCollaspeSection = document.getElementById(theCollapseId);
        theParent.classList.toggle("active");
        theCollaspeSection.classList.toggle("active");
      });
    }
  };

  useEffect(() => {
    moreCollapse();
  }, [props.appData.sections]);

  return (
    <React.Fragment>
      <main className="main-content" ref={mainContent}>
        {frontPageContent &&
          frontPageContent.sections &&
          frontPageContent.sections.map((block, index) => (
            <section
              key={index}
              className={"page-block " + block.className}
              id={block.blockId ? block.blockId : null}
            >
              <article className="container">
                {block.blockHeader ? (
                  <div className="block-header-wrap">
                    <header className="block-header">
                      <h3>{block.blockHeader}</h3>
                      <span className="divider"></span>
                    </header>
                    {block.blockHeaderBlurb ? (
                      <div className="block-header-blurb">
                        {props.renderTextHtml(block.blockHeaderBlurb)}
                      </div>
                    ) : null}
                  </div>
                ) : null}
                <div className="block-content-wrap">
                  <div className="block-content">
                    {block.blockContent
                      ? props.renderTextHtml(block.blockContent)
                      : null}
                  </div>
                </div>
              </article>
            </section>
          ))}
      </main>
      <DemoModal
        appData={props.appData}
        demoModalIsOpen={props.demoModalIsOpen}
        toggleDemoModal={props.toggleDemoModal}
      />
    </React.Fragment>
  );
};

export default FrontPage;
