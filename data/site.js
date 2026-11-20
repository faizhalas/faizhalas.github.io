export const profile = {
  name: "Faizhal Arif S.",
  eyebrow: "Librarian & data science researcher",
  tagline: "Librarian at the National Research and Innovation Agency",
  intro:
    "Librarian at the National Research and Innovation Agency (BRIN) and MSc Data Science student at the University of Sheffield Information School.",
  location: "Yogyakarta, Indonesia",
  photo: "/images/photo.jpg", // opsional, mis. "/images/prof_pic.jpg"
  about: [
    "As a librarian, I am deeply committed to enhancing library services by integrating technology and contributing to the library science field through my research on the application of data science in libraries.",
    "I constantly seek new ideas and opportunities to collaborate with like-minded professionals to create better solutions for our patrons. Through active engagement and knowledge sharing, we can collectively advance the field of library science.",
    "If you have questions about my research or would like to collaborate, please get in touch.",
  ],
};

export const affiliations = [
  { name: "National Research and Innovation Agency", href: "https://www.brin.go.id" },
  { name: "University of Sheffield", href: "https://www.sheffield.ac.uk/ijc" },
];

export const links = {
  email: "faiz005@brin.go.id",
  github: "https://github.com/faizhalas",
  linkedin: "https://www.linkedin.com/in/faizhalas",
  orcid: "https://orcid.org/0000-0003-2788-9463",
  scholar: "https://scholar.google.com/citations?user=5eVqmcgAAAAJ",
  scopus: "https://www.scopus.com/authid/detail.uri?authorId=58176368900",
};

export const nav = [
  { label: "home", href: "/" },
  { label: "publications", href: "/publications/" },
  { label: "projects", href: "/projects/" },
  { label: "people", href: "/people/" },
  { label: "cv", href: "/cv/" },
];

export const news = [
  {
    date: "Nov 06, 2026",
    text: "We presented our project at the ASIS&T Annual Meeting 2026 in Bangkok.",
  },
  {
    date: "Jun 18, 2026",
    text: "Presenting our new project in a poster session at the Edinburgh Open Research Conference 2026, University of Edinburgh.",
  },
  {
    date: "May 14, 2026",
    text: "Awarded the FAIR Data and Software Award by the University of Sheffield's Office for Open Research and Scholarship.",
  },
  {
    date: "Nov 26, 2025",
    text: "Shared our work at the LIS-Bibliometrics Conference 2025 in Leicester.",
  },
];

export const publications = [
  {
    year: 2026,
    featured: false,
    title: "TXTperpus: Open Textual Data of Indonesian LIS Journal Article",
    authors: "Faizhal Arif Santosa, Mochammad Riski Destrianto, Yasmin Ananda Putri, Azellia Anggun Viedyarani, Aishamanda Maretya Widyadhana",
    venue: "Proceedings of the Association for Information Science and Technology",
    date: "2026",
    abstract:
      "The growth of library and information science journals in Indonesia has led to a notable challenge, particularly when some journals become discontinued and certain articles are no longer accessible. In response, the TXTperpus project was developed to preserve the scientific information contained within these publications while also providing an open source of textual data that can be reused for analytical purposes. The project compiles text from Indonesian library and information science journal articles into a structured tabular format, enabling easier processing and reuse. The dataset is stored in CSV format and contains articles in both Indonesian and English. It is openly available via Zenodo and the Repositori Ilmiah Nasional (RIN), with an additional web-based interface (https://txtperpus.id) that allows users to search and download the data more conveniently. By transforming articles into accessible textual data, TXTperpus supports text mining, bibliometric research, and broader reuse of scholarly content. It also functions as an inclusive indexing platform, particularly for journals that are not formally indexed or accredited. This initiative contributes to improving access, supporting research reuse, and ensuring the long-term preservation of scholarly communication in Indonesia.",
    links: [
      { label: "DOI", href: "https://doi.org/10.5281/zenodo.16024158" },
      { label: "Website", href: "https://txtperpus.id" },
      { label: "Supplement", href: "https://hdl.handle.net/20.500.12690/RIN/NS4OKB" },
    ],
  },
  {
    year: 2025,
    featured: false,
    title: "Multilingual research dissemination: Current practices and implications for bibliometrics",
    authors: "Faizhal Arif Santosa and Barbara S. Lancho Barrantes",
    venue: "Insights: the UKSG Journal",
    date: "Sep 2025",
    abstract:
      "English is widely used as a lingua franca in scholarly communication, yet preserving local languages is vital to reaching a broader audience. Disseminating research in multiple languages can help ensure equitable access, a responsibility shared by both publishers and authors. This study examines the practices of both groups to identify any notable differences. Several academic social networks, preprint servers, and repositories are analysed to evaluate the resources currently available and their existing policies. Additionally, journals that actively promote multilingual dissemination are reviewed to understand their implementation strategies and how these align with the standards set by the DOI Registration Agency (DOI RA). From the author’s perspective, differing policies across platforms can heavily influence decisions, mainly because not all platforms provide relationship metadata. Publishers face similar challenges, underscoring the urgent need for standardisation. Moreover, the lack of consistency creates opportunities for unethical practices in academia, such as counting total of citations originating from the same article in different languages. This highlights the importance of a more comprehensive approach to evaluating research beyond citation and document counts. Collaboration among publishers, authors, and other stakeholders is essential to fostering greater understanding and preventing misconceptions in the academic landscape.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1629/uksg.688" },
      { label: "arXiv", href: "http://arxiv.org/abs/arXiv:2502.19663" },
      { label: "Supplement", href: "https://hdl.handle.net/20.500.12690/RIN/NS4OKB" },
    ],
  },
  {
    year: 2025,
    featured: false,
    title: "Artificial Intelligence in Library Studies: A Textual Analysis",
    authors: "Faizhal Arif Santosa",
    venue: "JLIS.it",
    date: "Jan 2025",
    abstract:
      "Artificial intelligence has emerged as a promising technology in the post-pandemic era, significantly impacting the library ecosystem and the direction of library and information science studies. This study aims to map AI-related research in libraries to identify opportunities and discuss future directions. Using textual analysis of data from Scopus, the study analyzed article titles with the burst detection algorithm and abstracts with scattertext and lemmatization. Six burst words were detected out of twelve frequently appearing in titles. Scattertext results showed a comparison between the service side (red) and the development side (blue) in libraries. Research increasingly focuses on AI utilization for library services and natural language processing (NLP) to enhance services. On the development side, AI involves product creation and encompasses AI literacy frameworks, policies, and their impact on libraries. AI affects studies in libraries by changing application methods, such as machine learning and NLP. Future research will become more diverse, considering the unique characteristics of each library.",
    links: [
      { label: "DOI", href: "https://doi.org/10.36253/jlis.it-626" },
      { label: "Supplement", href: "https://doi.org/10.5281/zenodo.14020882" },
    ],
  },
  {
    year: 2024,
    featured: true,
    title: "Coconut Libtool: Bridging Textual Analysis Gaps for Non-Programmers",
    authors: "Faizhal Arif Santosa, Manika Lamba, Crissandra George, and 1 more author",
    venue: "Proceedings of the Association for Information Science and Technology",
    date: "Oct 2024",
    abstract:
      "Coconut Libtool is an open-source, web-based application that uses NLP to analyze text data and bibliographic databases such as Web of Science, Scopus, and Lens. It offers topic modeling (LDA, Biterm, BERTopic), network graphs, keyword lemmatization, and sunburst visualization, designed for people without programming backgrounds.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1002/pra2.1072" },
      { label: "arXiv", href: "http://arxiv.org/abs/arXiv:2406.05949v1" },
      { label: "Supplement", href: "https://doi.org/10.5281/zenodo.14379200" },
      { label: "Poster", href: "https://hdl.handle.net/2142/122277" },
      { label: "Website", href: "https://www.coconut-libtool.com" },
    ],
  },
  {
    year: 2024,
    featured: false,
    title: "Exploring topics of the female librarians: Topic modelling approach on research articles",
    authors: "Savira Arumdini, Ria Ariani, and Faizhal Arif Santosa",
    venue: "Record and Library Journal",
    date: "Jun 2024",
    abstract:
      "Female librarians often face limitations in their professional development and encounter various challenges. Previous studies have shown that while many articles focus on women librarians as a subject, few delve into the topics discussed. This research aims to find out which topics are developing in the world of libraries, with a specific focus on female librarians. This study uses topic modelling to explore abstracts from documents discussing female librarians, using BERTopic, scattertext, and VOSviewer to identify emerging topics from data obtained from Scopus. A total of 6 topics were determined, where Topic 0 and Topic 3 had the highest similarity. At the same time, keyword analysis did not reveal any particularly prominent keywords in the 2020s. The discussion on female librarians covers topics such as professional advancement, work-life balance, knowledge gaps in technology, stereotypes, and the correlation between these topics. This study provides an overview of text analysis that librarians can use to identify topics in a collection of texts, such as abstracts, and examine how different topics relate to each other, as a single document can reflect multiple topics.",
    links: [
      { label: "DOI", href: "https://doi.org/10.20473/rlj.v10-i1.2024.164-179" },
      { label: "Supplement", href: "https://doi.org/10.5281/zenodo.10086961" },
    ],
  },
  {
    year: 2023,
    featured: false,
    title: "Adding Perspective to the Bibliometric Mapping Using Bidirected Graph",
    authors: "Faizhal Arif Santosa",
    venue: "Open Information Science",
    date: "Jan 2023",
    abstract:
      "Bibliometric mapping offers easiness in analyzing the relationship between publications through the network visuals created. Several applications, such as VOSviewer, Bibliometrix, and CiteSpace, make conducting network analysis more convenient. Moreover, the relationship provided is usually in the form of an undirected graph, which negates the two-way relationship created. This study attempts to demonstrate the significance of considering two-way relationships by proposing a keyword network formed using bidirected graphs and association rules to examine the two-way relationship of two or more keywords. According to the proposed bidirected graph, a two-way graph can add value and insight by analyzing the correlation between a single keyword and several others. Two of the four metrics used, Confidence and Conviction, are sufficient to support directed graphs. In contrast, Support and Full Counting are related because they both see the occurrences of a keyword, so using undirected graphs is necessary.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1515/opis-2022-0152" },
      { label: "Supplement", href: "https://hdl.handle.net/20.500.12690/RIN/4VGCTD" },
      { label: "Website", href: "https://www.coconut-libtool.com" },
    ],
  },
  {
    year: 2023,
    featured: false,
    title: "Exploring Final Project Trends Utilizing Nuclear Knowledge Taxonomy: An Approach Using Text Mining",
    authors: "Faizhal Arif Santosa",
    venue: "Information technology and libraries",
    date: "Mar 2023",
    abstract:
      "The National Nuclear Energy Agency of Indonesia (BATAN) taxonomy is a nuclear competence field organized into six categories. The Polytechnic Institute of Nuclear Technology, as an institution of nuclear education, faces a challenge in organizing student publications according to the fields in the BATAN taxonomy, especially in the library. The goal of this research is to determine the most efficient automatic document classification model using text mining to categorize student final project documents in Indonesian and monitor the development of the nuclear field in each category. The kNN algorithm is used to classify documents and identify the best model by comparing Cosine Similarity, Correlation Similarity, and Dice Similarity, along with vector creation binary term occurrence and TF-IDF. A total of 99 documents labeled as reference data were obtained from the BATAN repository, and 536 unlabeled final project documents were prepared for prediction. In this study, several text mining approaches such as stem, stop words filter, n-grams, and filter by length were utilized. The number of k is 4, with Cosine-binary being the best model with an accuracy value of 97 percent, and kNN works optimally when working with binary term occurrence in Indonesian language documents when compared to TF-IDF. Engineering of Nuclear Devices and Facilities is the most popular field among students, while Management is the least preferred. However, Isotopes and Radiation are the most prominent fields in Nuclear Technochemistry. Text mining can assist librarians in grouping documents based on specific criteria. There is also the possibility of observing the evolution of each existing category based on the increase of documents and the application of similar methods in various circumstances. Because of the curriculum and courses given, the growth of each discipline of nuclear science in the study program is different and varied.",
    links: [
      { label: "DOI", href: "https://doi.org/10.6017/ital.v42i1.15603" },
      { label: "Supplement", href: "https://doi.org/10.5281/zenodo.10902151" },
    ],
  },
  {
    year: 2023,
    featured: false,
    title: "Tips from the Experts Prior Steps into Knowledge Mapping: Text Mining Application and Comparison",
    authors: "Faizhal Arif Santosa",
    venue: "Issues in Science and Technology Librarianship",
    date: "Mar 2023",
    abstract:
      "Bibliometrics is increasingly being used by the knowledge community and librarians to easily analyze patterns in knowledge. In the field, the use of data from databases that provide bibliometric information is not always completely clean, so pre-processing is required. Several previous studies have shown that bibliometric analysis begins with a simple pre-processing step. The goal of this research is to use text mining to perform pre-processing to find the basic terms of the keywords that appear – to essentially construct a controlled vocabulary for a bibliographic dataset. The method used in this study is cleaning keywords with the stemming method using RapidMiner software. Bibliometrix was used to compare the results. A total of 85 keywords were combined into basic words. Using the built process, this study discovers differences in the network built between raw data and data that has been pre-processed, resulting in differences in the analysis that will be produced. The built process can also be reused in a variety of real-world situations.",
    links: [
      { label: "DOI", href: "https://doi.org/10.29173/istl2736" },
      { label: "Supplement", href: "https://doi.org/10.5281/zenodo.10902186" },
      { label: "Website", href: "https://www.coconut-libtool.com" },
    ],
  },
  {
    year: 2022,
    featured: false,
    title: "Clustering of Librarians’ Initial Knowledge on the Theme of Training",
    authors: "Faizhal Arif Santosa and Dedi Suprianto",
    venue: "Record and Library Journal",
    date: "Dec 2022",
    abstract:
      "The implementation of librarian competency development through training in Sidenreng Rappang Regency, South Sulawesi Province, was carried out by dividing librarians based on the location of their agency’s work area. In practice, there are training barriers, namely differences in absorption of the material due to limited training time and differences in initial knowledge of the training material. Purpose: According to the librarian’s prior knowledge of the training to be held in future, this study attempts to determine the best grouping and number of participants. The methodology used in this research is Cross Industry Standard Process for Data Mining (CRISP-DM) which consists of 6 stages. The data collection technique used a questionnaire with a linear numerical scale from a score of 0 to 10 to 97 librarians in Sidenreng Rappang Regency. Data were analyzed using the K-Means algorithm to determine the number of groups and the number of librarians in each group and evaluated using the Davies-Bouldin index (DBI) algorithm to determine the most optimal group division. According to this study, the best number of groups for training in the processing of library materials is two under a DBI value of 0.68983. With a DBI value of 0.69431, the best number of groups is two in the library promotion training. the library service training had the best number of groups of 2 with a DBI value of 0.65698. Meanwhile, for INLISLite-based automation training, the best number of groups is two groups with a DBI value of 0.65500.",
    links: [
      { label: "DOI", href: "https://doi.org/10.20473/rlj.v8-i2.2022.347-358" },
      { label: "Supplement", href: "https://doi.org/10.5281/zenodo.10902220" },
    ],
  },
  // Tambah publikasi lain dengan menyalin blok di atas.
];

export const projects = [
  {
    title: "Coconut Libtool",
    description:
      "Open-source web application for text analysis and bibliometrics, built for researchers and students without programming skills.",
    tags: ["NLP", "Open science", "Bibliometrics"],
    href: "https://www.coconut-libtool.com",
    repo: "https://github.com/faizhalas/library-tools",
  },
  {
    title: "TXTperpus",
    description:
      "Collecting, preserving, and providing access to the full text of scientific publications in the field of library and information in Indonesia, including articles from scientific journals as integrated scientific text data.",
    tags: ["Open data", "Preservation", "Librarianship"],
    href: "https://txtperpus.id",
    repo: "https://doi.org/10.5281/zenodo.21533279",
  },
  
];

export const cv = {
  sections: [
    {
      title: "Positions",
      items: [
        { role: "Librarian", org: "National Research and Innovation Agency (BRIN)", years: "2021 – present" },
        { role: "Alternate INIS Liaison Officer for Indonesia", org: "International Atomic Energy Agency (IAEA)", years: "2026 – present" },
      ],
    },
    {
      title: "Education",
      items: [
        { role: "MSc Data Science", org: "The University of Sheffield, Information School"},
        { role: "Librarianship", org: "Universitas Terbuka"},
      ],
    },
    {
      title: "Awards",
      items: [
        {
          role: "TPXimpact Data and Insights Prize",
          org: "The University of Sheffield",
          years: "January 2027",
        },
        {
          role: "FAIR Data and Software Award",
          org: "The University of Sheffield, Office for Open Research and Scholarship",
          years: "May 2026",
        },
        {
          role: "Best Paper",
          org: "D3 Perpustakaan Universitas Airlangga",
          years: "June 2022",
        },
        {
          role: "Best Librarian of Banjarnegara",
          org: "Dinas Kearsipan dan Perpustakaan Banjarnegara",
          years: "February 2019",
        },
      ],
    },
    {
      title: "Past activities",
      items: [
        {
          role: "Co-supervisor",
          org: "University of Illinois at Urbana-Champaign, School of Information Sciences",
          years: "Jan 2024 - Apr 2024",
        },
        {
          role: "Data Curator",
          org: "OpenOrgs",
          years: "Jul 2025 - Jul 2026",
        },
        {
          role: "Guest Speaker",
          org: "University of Oklahoma",
          years: "2025",
        },
      ],
    },
  ],
};

// Interests (kartu di beranda). `icon`: library | text | chart | open
export const interests = [
  { title: "librarianship", icon: "library" },
  { title: "open science", icon: "open" },
  { title: "metascience", icon: "researcher" },
  { title: "textual analysis", icon: "text" },
];

// Orang-orang untuk halaman People.
// Taruh foto di public/images/people/ lalu isi `photo`, mis. "/images/people/manika-lamba.jpg".
// Jika `photo` kosong, yang tampil adalah inisial nama.
export const people = [
  {
    name: "Prof. Mike Thelwall",
    role: "",
    note: "The University of Sheffield",
    photo: "/images/people/mike.jpg",
    href: "",
  },
  {
    name: "Dr. Manika Lamba",
    role: "",
    note: "University of Oklahoma",
    photo: "/images/people/manika.jpg",
    href: "",
  },
  {
    name: "Barbara S. Lancho Barrantes",
    role: "",
    note: "University of Brighton",
    photo: "/images/people/barbara.jpg",
    href: "",
  },
  {
    name: "Crissandra George",
    role: "",
    note: "Case Western Reserve University",
    photo: "/images/people/crissandra.jpg",
    href: "",
  },
  {
    name: "Yujia Wei",
    role: "",
    note: "University of Illinois Urbana-Champaign",
    photo: "/images/people/olivia.png",
    href: "",
  },
  {
    name: "Hewei Tang",
    role: "",
    note: "University of Illinois Urbana-Champaign",
    photo: "/images/people/henry.jpg",
    href: "",
  },
  {
    name: "Tam Le",
    role: "",
    note: "University of Oklahoma",
    photo: "/images/people/tam.jpg",
    href: "",
  },
  {
    name: "Mochammad Riski Destrianto",
    role: "",
    note: "Politeknik Negeri Semarang",
    photo: "/images/people/riski.jpg",
    href: "",
  },
  {
    name: "Yasmin Ananda Putri",
    role: "",
    note: "Universitas Airlangga",
    photo: "/images/people/yasmin.jpg",
    href: "",
  },
  {
    name: "Azellia Anggun Viedyarani",
    role: "",
    note: "Universitas Brawijaya",
    photo: "/images/people/azel.jpg",
    href: "",
  },
  {
    name: "Aishamanda Maretya Widyadhana",
    role: "",
    note: "Universitas Indonesia",
    photo: "/images/people/tya.jpg",
    href: "",
  },
  {
    name: "Dimas Saputra",
    role: "",
    note: "Universitas Pendidikan Indonesia",
    photo: "/images/people/dimas.jpg",
    href: "",
  },
  {
    name: "Savira Arumdini",
    role: "",
    note: "National Research and Innovation Agency",
    photo: "/images/people/vira.jpg",
    href: "",
  },
  {
    name: "Ria Ariani",
    role: "",
    note: "National Research and Innovation Agency",
    photo: "/images/people/ria.jpg",
    href: "",
  },
  // Tambah orang lain dengan menyalin blok di atas.
];
