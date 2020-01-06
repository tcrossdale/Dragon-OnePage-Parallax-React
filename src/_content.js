const contentData = {
  sections: [
    {
      className: "top-section",
      blockId: "overview",
      blockContent:
        '<div class="container">' +
        '<h1 class="text-center desc">Lorem ipsum dolor sit amet consectetur adipiscing elit data</h1>' +
        '<div class="preview-image"><img src="https://via.placeholder.com/1054x506.png" /></div>' +
        "</div>"
    },
    {
      className: "overview-description",
      blockId: "overview-description",
      blockContent:
        '<ul class="flex-list"> <li class="flex-list-item"><a href="#analytics">Analytics</a></li> <li class="flex-list-item"><a href="#text-analysis">Text Analysis</a></li> <li class="flex-list-item"><a href="#anomaly-detection">Anomaly Detection</a></li> <li class="flex-list-item"><a href="#enterprise-search">Enterprise Search</a></li> </ul>' +
        '<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ipsum dolor sit amet sed do eiusmod ipsum.</p>'
    },
    {
      className: "analytics",
      blockId: "analytics",
      blockHeader: "Analytics",
      blockHeaderBlurb:
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>",
      blockContent:
        '<div class="preview-image"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>'
    },
    {
      className: "text-analysis",
      blockId: "text-analysis",
      blockHeader: "Text Analysis",
      blockHeaderBlurb:
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>",
      blockContent:
        '<div class="preview-image"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>'
    },
    {
      className: "anomaly-detection",
      blockId: "anomaly-detection",
      blockHeader: "Anomaly Detection",
      blockHeaderBlurb:
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>",
      blockContent:
        '<div class="preview-image"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>'
    },
    {
      className: "enterprise-search",
      blockId: "enterprise-search",
      blockHeader: "Enterprise Search",
      blockHeaderBlurb:
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>",
      blockContent:
        '<div class="preview-image"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>'
    },
    {
      className: "video",
      blockId: "video",
      blockHeader: "Dragon Overview Video",
      blockHeaderBlurb:
        '<div class="preview-video"><iframe width="900" height="500" src="https://www.youtube.com/embed/q7RjosT71SA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' +
        '<div class="preview-video"><iframe width="900" height="500" src="https://www.youtube.com/embed/q7RjosT71SA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></video></div>' +
        '<div class="download-btn"><a href="#" class="btn btn-aqua">Download Presentation</a></div>'
    },
    {
      className: "features",
      blockId: "features",
      blockHeader: "Features",
      blockHeaderBlurb:
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur</p>" +
        '<div class="feature-pane row">' +
        '<div class="col-md-6 pane left-pane"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>' +
        '<div class="col-md-6 pane right-pane">' +
        "<h4>Sample Header</h4>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing.</p>" +
        "</div>" +
        "</div>" +
        '<div class="separator"><img src="../../assets/images/separator.png" alt="separator"></div>' +
        '<div class="feature-pane row reverse">' +
        '<div class="col-md-6 pane left-pane"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>' +
        '<div class="col-md-6 pane right-pane">' +
        "<h4>Sample Header</h4>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing.</p>" +
        "</div>" +
        "</div>" +
        '<div class="separator"><img src="../../assets/images/separator.png" alt="separator"></div>' +
        '<div class="feature-pane row">' +
        '<div class="col-md-6 pane left-pane"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>' +
        '<div class="col-md-6 pane right-pane">' +
        "<h4>Sample Header</h4>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing.</p>" +
        "</div>" +
        "</div>" +
        '<div class="separator"><img src="../../assets/images/separator.png" alt="separator"></div>' +
        '<div class="feature-pane row reverse">' +
        '<div class="col-md-6 pane left-pane"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>' +
        '<div class="col-md-6 pane right-pane">' +
        "<h4>Sample Header</h4>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing.</p>" +
        "</div>" +
        "</div>" +
        '<div class="separator"><img src="../../assets/images/separator.png" alt="separator"></div>' +
        '<div class="feature-pane row">' +
        '<div class="col-md-6 pane left-pane"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>' +
        '<div class="col-md-6 pane right-pane">' +
        "<h4>Sample Header</h4>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing.</p>" +
        "</div>" +
        "</div>" +
        '<div class="separator"><img src="../../assets/images/separator.png" alt="separator"></div>' +
        '<div class="feature-pane row reverse">' +
        '<div class="col-md-6 pane left-pane"><img src="https://via.placeholder.com/930x324.png" alt="" /></div>' +
        '<div class="col-md-6 pane right-pane">' +
        "<h4>Sample Header</h4>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing.</p>" +
        "</div>" +
        "</div>" +
        '<div class="">' +
        "</div>" +
        '<div class="row">' +
        '<div class="col-md-6"><h5>Adipiscingel</h5><img src="https://via.placeholder.com/930x324.png" alt="" /></div>' +
        '<div class="col-md-6"><h5>Adipiscingel</h5><img src="https://via.placeholder.com/930x324.png" alt="" /></div>' +
        "</div>" +
        '<div class="btn-cta"><a href="#" class="btn btn-aqua"">Request Live Demo</a></div>'
    },
    {
      className: "background",
      blockId: "background",
      blockContent:
        "<h3>Background</h3>" +
        '<div class="block-blurb">' +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit.</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.</p>" +
        "</div>" +
        "<h3>Team</h3>" +
        '<div class="block-blurb">' +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data. Adipiscing elit data data consectetur adipiscing elit data. Data data consectetur adipiscing elit data adipiscing elit data data consectetur adipiscing elit data.</p>" +
        "</div>" +
        '<div class="row members-row">' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        "</div>" +
        '<div class="row members-row">' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        "</div>" +
        '<div class="row members-row">' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        "</div>" +
        '<div class="row members-row">' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        "</div>" +
        '<div class="row members-row">' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        '<div class="col-md-4 member-pane"><div class="inner"><img src="https://via.placeholder.com/300x300.png" /><div class="name">John Doe</div></div></div>' +
        "</div>" +
        "<h3>Join Our Team</h3>" +
        '<div class="block-blurb">' +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing< elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data. Adipiscing elit data data consectetur adipiscing elit data.</p>" +
        '<p>Lorem ipsum dolor sit <a href="#">amet consectetur adipiscing</a> elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data. Adipiscing elit data data consectetur adipiscing elit data.</p>' +
        '<div class="disclaimer">Lorem ipsum dolor sit amet</div>' +
        "<h4>Senior Django Engineer</h4>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data. Adipiscing elit data data consectetur adipiscing elit data.</p>" +
        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data.Lorem ipsum dolor sit amet consectetur adipiscing elit data consectetur adipiscing elit data data consectetur adipiscing elit data. Adipiscing elit data data consectetur adipiscing elit data.</p>" +
        '<div class="collapse-panel" id="collapse-panel-1">' +
        "<h5>Lorem ipsum</h5>" +
        "<ul>" +
        "<li>Lorem ipsum dolor sit amet consectetur adipiscing</li>" +
        "<li>Lorem ipsum dolor sit amet consectetur adipiscing</li>" +
        "<li>Lorem ipsum dolor sit amet consectetur adipiscing</li>" +
        "<li>Lorem ipsum dolor sit amet consectetur adipiscing</li>" +
        "</ul>" +
        "<h5>Lorem ipsum</h5>" +
        "<ul>" +
        "<li>Lorem ipsum dolor sit amet consectetur adipiscing</li>" +
        "<li>Lorem ipsum dolor sit amet consectetur adipiscing</li>" +
        "<li>Lorem ipsum dolor sit amet consectetur adipiscing</li>" +
        "<li>Lorem ipsum dolor sit amet consectetur adipiscing</li>" +
        "</ul>" +
        "</div>" +
        '<div class="more-links" data-collapsepanel="collapse-panel-1">' +
        '<a href="#" class="collapse-btn"><span class="expand"><i class="fa fa-plus"></i> More...</span><span class="minimize"><i class="fa fa-minus"></i> ...Less</span></a>' +
        "</div>" +
        "</div>"
    }
  ],
  demoModal: {
    formFields: [
      {
        label: "Name",
        type: "text",
        required: true,
        name: "name",
        placeholder: "Name",
        containerSize: "6"
      },
      {
        label: "Email",
        type: "email",
        required: true,
        name: "email",
        placeholder: "Email",
        containerSize: "6"
      },
      {
        label: "Organization",
        type: "text",
        required: true,
        name: "name",
        placeholder: "Organization",
        containerSize: "6"
      },
      {
        label: "Phone",
        type: "tel",
        required: false,
        name: "phone",
        placeholder: "Phone",
        containerSize: "6"
      },
      {
        type: "textarea",
        required: true,
        name: "message",
        placeholder: "Tell us your search needs",
        rows: "6",
        containerSize: "12"
      }
    ],
    formFieldsSubmit: "Submit",
    headerContent: "Contact Info",
    bodyContent: "Thank you for your interest in Dragon."
  },
  subNavigationLinks: [
    {
      url: "#overview",
      label: "Overview",
      current: true
    },
    {
      url: "#video",
      label: "Video"
    },
    {
      url: "#features",
      label: "Features"
    },
    {
      url: "#background",
      label: "Background"
    },
    {
      url: "#api",
      label: "Sample App"
    },
    {
      url: "#media",
      label: "Media"
    },
    {
      url: "#contact",
      label: "Contact Us"
    }
  ],
  socialLinks: [
    {
      url: "#",
      title: "Follow us on Google+",
      icon: "fa fa-google-plus"
    },
    {
      url: "#",
      title: "Follow on LinkedIn",
      icon: "fa fa-linkedin"
    },
    {
      url: "#",
      title: "Follow on Facebook",
      icon: "fa fa-facebook"
    },
    {
      url: "#",
      title: "Follow on Twitter",
      icon: "fa fa-twitter"
    }
  ],
  footerSection: {
    copyright: "© 2019. All Rights Reserved.",
    header: "Contact Us",
    blocks: [
      {
        content:
          '<div class="contact-info">' +
          "<h5>Office Location</h5>" +
          "<div>41 East 81st Street</div>" +
          "<div>New York, NY 10090</div>" +
          "<div>"
      },
      {
        content:
          '<div class="contact-info">' +
          '<div>Main: <a href="#">+1(212) 787-5555</a></div>' +
          '<div>Fax: <a href="#">+1(212) 787-8888</a></div>' +
          "<h5>Sales & Solutions</h5>" +
          '<div><a href="#">sales@reacttemplate.com</a></div>' +
          "<div>"
      },
      {
        content:
          '<div class="contact-info">' +
          "<div>Email us at:</div>" +
          '<div><a href="#">info@reacttemplate.com</a></div>' +
          "<div>"
      }
    ]
  }
};

export default contentData;
