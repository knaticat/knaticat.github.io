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
          section: "News",},{id: "news-i-m-part-of-the-organzing-committee-of-scipie-a-new-intitiative-led-by-graduate-students-where-we-meet-monthly-to-explore-fresh-ideas-troubleshoot-research-problems-and-provide-support-to-our-peers-all-while-enjoying-pizza-slices",
          title: 'I’m part of the organzing committee of SciPie!, a new intitiative led by...',
          description: "",
          section: "News",},{id: "news-i-have-been-selected-to-attend-the-cajal-course-on-quantitative-approaches-to-behaviour-and-virtual-reality-to-be-held-at-the-champalimaud-centre-for-the-unknown-lisbon-portugal-from-june-2-21-2024",
          title: 'I have been selected to attend the Cajal course on Quantitative Approaches to...',
          description: "",
          section: "News",},{id: "news-my-student-led-graduate-club-scipie-received-the-best-graduate-club-award-as-part-of-the-umb-beacon-leadership-awards",
          title: 'My student led graduate club SciPie! received the best graduate club award as...',
          description: "",
          section: "News",},{id: "news-i-taught-the-biol-347-animal-behavior-lab-for-2-consecutive-years-now-this-year-i-introduced-two-new-lab-sessions-animal-tracking-and-birding-lab-to-familiarize-students-with-these-newer-and-fun-behavioral-analysis-techniques",
          title: 'I taught the BIOL 347 Animal Behavior lab for 2 consecutive years now....',
          description: "",
          section: "News",},{id: "news-i-have-been-selected-to-present-a-talk-at-the-behaviour-2025-conference-to-be-held-from-aug-25-30-in-kolkata-india-very-excited-to-present-my-work-on-pigeon-navigation-there",
          title: 'I have been selected to present a talk at the Behaviour 2025 conference...',
          description: "",
          section: "News",},{id: "news-i-have-been-accepted-to-the-computational-summer-school-on-modeling-social-and-collective-behavior-cosmos-summer-school-in-tokyo-japan-from-sept-29-oct-3-i-am-also-thankful-for-receiving-a-travel-award-from-the-generous-support-of-the-riken-cbs-toyota-collaboration-center",
          title: 'I have been accepted to the Computational Summer school on Modeling Social and...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-i-received-a-second-travel-award-from-the-early-career-social-learning-researchers-eslr-society-for-my-attendance-at-the-cosmos-summer-school",
          title: 'Excited to share that I received a second travel award from the Early-career...',
          description: "",
          section: "News",},{id: "news-i-succesfully-passed-my-written-qualfying-exams-with-all-high-passes-one-phd-milestone-checked",
          title: 'I succesfully passed my written qualfying exams with all high passes. One PhD...',
          description: "",
          section: "News",},{id: "news-very-proud-and-happy-that-my-first-phd-publication-a-tale-of-two-birds-cognitive-simplicity-drives-collective-route-improvements-in-homing-pigeons-is-now-out-in-elife-please-visit-the-publications-section-for-link-to-the-manuscript",
          title: 'Very proud and happy that my first PhD publication - “A tale of...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/knaticat.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%6F%75%62%68%69%6B%62%61%6E%65%72%6A%65%65%38%34%36%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/knaticat", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mXAfNjYAAAAJ", "_blank");
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
