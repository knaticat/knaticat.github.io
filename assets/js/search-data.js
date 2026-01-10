// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-code",
          title: "Code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "As an academic, I am also an educator and deeply value the transformative power of education in changing lives, particularly for individuals from marginalized communities. Teaching serves as a means for me to actualize these ideals and share my scientific discoveries with a broader audience. You can find my teaching materials in the content provided below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Here are some highlights from my favorite moments in life and a few pieces of art I have created!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "news-i-have-started-my-phd-studies-in-dr-albert-kao-s-lab-at-umass-boston-in-understanding-collective-decision-making-in-animals",
          title: 'I have started my PhD studies in Dr. Albert Kao’s lab at UMass...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-in-the-physics-graduate-club-at-umb-on-collective-behavior-in-slime-molds-from-foraging-networks-to-mapping-dark-matter",
          title: 'I gave a talk in the Physics Graduate Club at UMB on “Collective...',
          description: "",
          section: "News",},{id: "news-i-have-been-selected-to-attend-the-gordon-research-conference-grc-on-collective-behavior-to-be-held-from-aug-13-18-2023-in-newry-maine",
          title: 'I have been selected to attend the Gordon Research Conference (GRC) on Collective...',
          description: "",
          section: "News",},{id: "news-my-master-s-thesis-project-with-dr-rati-sharma-is-out-now-in-applied-animal-behaviour-science-so-proud-of-this-work",
          title: 'My Master’s thesis project with Dr. Rati Sharma is out now in Applied...',
          description: "",
          section: "News",},{id: "news-i-start-my-teaching-journey-with-the-undergraduate-animal-behavior-lab-at-umb-alongside-dr-albert-kao",
          title: 'I start my teaching journey with the undergraduate Animal Behavior Lab at UMB...',
          description: "",
          section: "News",},{id: "news-i-m-part-of-the-organzing-committee-of-sci-pie-a-new-intitiative-led-by-graduate-students-where-we-meet-monthly-to-explore-fresh-ideas-troubleshoot-research-problems-and-provide-support-to-our-peers-all-while-enjoying-pizza-slices",
          title: 'I’m part of the organzing committee of “Sci-Pie”, a new intitiative led by...',
          description: "",
          section: "News",},{id: "news-i-have-been-selected-to-attend-the-cajal-course-on-quantitative-approaches-to-behaviour-and-virtual-reality-to-be-held-at-the-champalimaud-centre-for-the-unknown-lisbon-portugal-from-june-2-21-2024",
          title: 'I have been selected to attend the Cajal course on Quantitative Approaches to...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
