const collegeItems = [
  {
    pic: "./assets/coe.jpg",
    logo: "./assets/coe-logo.png",
    name: "College of Engineering",
    desc: "The College of Engineering (COE) is a recipient of Center of Development (COD) status from the Commission on Higher Education (CHED). The College produces total quality engineers, graduate professionals and valuable technology researches for industry and society to maximally contribute to national development.",
    goals: [
      "Offer technology-oriented curricula in engineering and management leading to the Bachelor, Master, and Doctorate degrees.",
      "Foster and promote scientific culture through research and development involvement and collaboration.",
      "Foster, promote, and maintain close inter-institutional and academe-industry linkages.",
      "Effect technology transfer through the Office of Research and Extension Services of the University and the College.",
    ],
  },
  {
    pic: "./assets/cit.jpg",
    logo: "./assets/cit-logo.png",
    name: "College of Industrial Technology",
    desc: "The College of Industrial Technology traces its roots from the Technical Department of the then Philippine School of Arts and Trades adapted in 1937 which later became the Philippine College of Arts and Trades",
    goals: [
      "Develop, improve and implement training program to attain effective delivery system of technological education.",
      "Strengthen faculty qualification and rank.",
      "Provide opportunities for faculty researches and come up with new concepts, materials and processes.",
      "Make available the facilities of the College and expertise of the faculty to the community.",
    ],
  },
  {
    pic: "./assets/coie.jpeg",
    logo: "./assets/cie-logo.png",
    name: "College of Industrial Education",
    desc: "The roots of the College of Industrial Education (CIE) can be traced in 1929 when the first formal two-year Industrial Teacher Education was offered at the then Philippine School of Arts and Trades",
    goals: [
      "Improve effectiveness of instruction, research, management, administration, information systems and procedures to make the College responsive and relevant to the needs of the society",
      "Enhance partnership with industry, public, and NGOs to support efforts for life long learning",
      "Achieve financial viability and sustainability to augment operational resources",
      "Strengthen the core values of excellence, commitment, cooperation, hard work, scholarship, creativity, resourcefulness and teamwork among teachers and students",
      "Achieve third level accreditation for both graduate and undergraduate programs",
    ],
  },
  {
    pic: "./assets/cola.jpg",
    logo: "./assets/cla-logo.png",
    name: "College of Liberal Arts",
    desc: "The CLA is the other half when the College of Applied Arts and Sciences was split. The CLA used to be a full service college. In 1999, the BOR approved the offering of Bachelor of Arts in Management major in Industrial Management in the college.",
    goals: [
      "The CLA shall provide basic quality education and turn out highly competent managers and entepreneurs who will provide leadership and job opportunities in a rapidly changing environment and ensure its continued relevance and responsiveness to the challenges of globalization.",
    ],
  },
  {
    pic: "./assets/cos.jpg",
    logo: "./assets/cos-logo.png",
    name: "College of Science",
    desc: "By virtue of Presidential Decree No. 1518, the Philippine College of Arts and Trades (PCAT) was converted into the Technological University of the Philippines (TUP) on June 11, 1976. The conversion to a university status brought about comprehensive changes in the organizational set-up",
    goals: [
      "Sustain the role of the College as TUP's premiere mover in science and mathematics via keeping pace with the University in moving onwards as a model of excellence in engineering and technology education.",
      "Engage actively in the University's efforts to acquire, generate and develop sufficient and state-of-the-art physical resources and facilities for instruction and research in science and mathematics.",
      "Develop curricular programs in science and mathematics which are relevant and responsive to the needs of the present times",
    ],
  },
  {
    pic: "./assets/cofa.jpg",
    logo: "./assets/cafa-logo.png",
    name: "College of Architecture and Fine Arts",
    desc: "The roots of the College of Architecture and Fine Arts (CAFA) can be traced from the drawing subjects required in all courses offered by the University since 1907.",
    goals: [
      "Attain highly level of technical skills in their chosen profession.",
      "Acquire a lifelong learning actively such as progressive leadership in applied research development studies in the areas of Arts, Design, and Architectural fields and production.",
      "Commit in professional services to effect/impart technology transfer in assisting the development of small and medium industries to contribute to national development.",
    ],
  },
];

let headerItems = [
  {
    title: "TUP Manila holds first student rally in campus",
    img: "./assets/header-1.jpg",
    to: "https://manilatoday.net/tup-manila-holds-first-student-rally-in-campus/",
  },
  {
    title:
      "Revised guidelines on the conduct of online classes in the University",
    img: "./assets/header-2.jpeg",
    to: "https://drive.google.com/file/d/1MN3e_lkbJnvHNu-r3yM94gD1rszwr_GN/view?usp=sharing",
  },
  {
    title: "Online request of credentials/documents",
    img: "./assets/header-3.jpg",
    to: "https://docs.google.com/forms/d/e/1FAIpQLScx7Olc4n2csf-M4HTiYFAcMwfdJ2ccLJS7PJwK4FlMIGPj0w/viewform",
  },
  {
    title: "TUP-M, now ISO 9001:2015 Certified!",
    img: "./assets/header-4.jpg",
    to: "http://www.tup.edu.ph/#",
  },
];

const coreValues = [
  {
    letter: "T",
    text: "Transparent and participatory governance",
  },
  {
    letter: "U",
    text: "Unity in the pursuit of TUP mission, goals, and objectives",
  },
  {
    letter: "P",
    text: "Professionalism in the discharge of quality service",
  },
  {
    letter: "I",
    text: "Integrity and commitment to maintain the good name of the University",
  },
  {
    letter: "A",
    text: "Accountability for individual and organizational quality performance",
  },
  {
    letter: "N",
    text: "Nationalism through tangible contribution to the rapid economic growth of the country",
  },
  {
    letter: "S",
    text: "Shared responsibility, hardwork, and resourcefulness in compliance to the mandates of the university",
  },
];

function toggleMobileNav() {
  let mobileNav = document.querySelector("#mobile-nav");
  let state = window.getComputedStyle(mobileNav, null).display;

  if (state === "block") {
    mobileNav.style.display = "none";
  }
  if (state === "none") {
    mobileNav.style.display = "block";
  }
}

function fetchCarouselData() {
  let carouselJson = [];

  fetch("src/carousel-items.json").then(
    (response) => (carouselJson = response.json())
  );

  console.log(carouselJson);
}

function openFooterLinks(link) {
  let element;

  if (link === "popular") {
    element = document.querySelector("#footer-popular");
  } else if (link === "academics") {
    element = document.querySelector("#footer-academics");
  } else if (link === "govph") {
    element = document.querySelector("#footer-govph");
  } else if (link === "govlinks") {
    element = document.querySelector("#footer-govlinks");
  }

  let isVisible = window.getComputedStyle(element, null).display;

  if (isVisible === "flex") {
    element.style.display = "none";
  }
  if (isVisible === "none") {
    element.style.display = "flex";
  }
}

function determineCollegeIndex() {
  let collegeName = document.querySelector("#college-item-name").textContent;

  let index = 0;

  for (let i = 0; i < collegeItems.length; i++) {
    if (collegeItems[i].name === collegeName) {
      index = i;
      break;
    }
  }

  return index;
}

function determineHeaderIndex() {
  let headerName = document.querySelector("#header-title").textContent;

  let index = 0;

  for (let i = 0; i < headerItems.length; i++) {
    if (headerItems[i].title === headerName) {
      index = i;
      break;
    }
  }

  return index;
}

function renderCollegeItem(direction) {
  let collegePic = document.querySelector("#college-item-pic");
  let collegeLogo = document.querySelector("#college-item-logo");
  let collegeName = document.querySelector("#college-item-name");
  let collegeDesc = document.querySelector("#college-item-desc");
  let collegeGoal = document.querySelector("#college-item-goal");

  let currentIndex = determineCollegeIndex();
  let displayIndex = currentIndex + (direction === "left" ? -1 : 1);

  if (displayIndex > 5) {
    displayIndex = 0;
  } else if (displayIndex < 0) {
    displayIndex = 5;
  }

  collegePic.src = collegeItems[displayIndex].pic;
  collegeLogo.src = collegeItems[displayIndex].logo;
  collegeName.textContent = collegeItems[displayIndex].name;
  collegeDesc.textContent = collegeItems[displayIndex].desc;

  while (collegeGoal.firstChild) {
    collegeGoal.removeChild(collegeGoal.firstChild);
  }

  collegeItems[displayIndex].goals.map((data, index) => {
    let entry = document.createElement("li");
    entry.appendChild(document.createTextNode(index + 1 + ". " + data));
    collegeGoal.appendChild(entry);
  });
}

function switchTabs(tabName) {
  let impLinks = document.querySelector("#oi-importantlinks");
  let careers = document.querySelector("#oi-careers");
  let downloads = document.querySelector("#oi-downloads");

  if (tabName === "important") {
    impLinks.style.display = "grid";
    careers.style.display = "none";
    downloads.style.display = "none";
  } else if (tabName === "careers") {
    impLinks.style.display = "none";
    careers.style.display = "grid";
    downloads.style.display = "none";
  } else if (tabName === "downloads") {
    impLinks.style.display = "none";
    careers.style.display = "none";
    downloads.style.display = "grid";
  }
}

function switchHeader(direction) {
  let headerImg = document.querySelector("#header-img");
  let headerTitleAndLink = document.querySelector("#header-title");

  let circle1 = document.querySelector("#circle-1");
  let circle2 = document.querySelector("#circle-2");
  let circle3 = document.querySelector("#circle-3");
  let circle4 = document.querySelector("#circle-4");

  let circles = [circle1, circle2, circle3, circle4];

  let currentIndex = determineHeaderIndex();
  let displayIndex = currentIndex + (direction === "left" ? -1 : 1);

  if (displayIndex > 3) {
    displayIndex = 0;
  } else if (displayIndex < 0) {
    displayIndex = 3;
  }

  headerImg.src = headerItems[displayIndex].img;
  headerTitleAndLink.textContent = headerItems[displayIndex].title;
  headerTitleAndLink.setAttribute("href", headerItems[displayIndex].to);

  circles.map((data, index) => {
    if (index === displayIndex) {
      data.classList.remove("fa-circle-notch");
      data.classList.add("fa-circle");
    } else {
      data.classList.remove("fa-circle");
      data.classList.add("fa-circle-notch");
    }
  });
}

function switchCoreValue(letter) {
  let letterT = document.querySelector("#cv-t");
  let letterU = document.querySelector("#cv-u");
  let letterP = document.querySelector("#cv-p");
  let letterI = document.querySelector("#cv-i");
  let letterA = document.querySelector("#cv-a");
  let letterN = document.querySelector("#cv-n");
  let letterS = document.querySelector("#cv-s");

  let letters = [letterT, letterU, letterP, letterI, letterA, letterN, letterS];

  letters.map((data) => {
    if(data.textContent.replace(/\s{2,}/g,' ').trim() === letter){
      data.classList.remove("border-b-transparent");
      data.classList.add("border-white");

      console.log(data.textContent);

      //increase opacity
      data.classList.remove("opacity-60");
      data.classList.add("opacity-100");  
    } else {
      data.classList.remove("border-white");
      data.classList.add("border-b-transparent");

      //decrease opacity
      data.classList.remove("opacity-100");
      data.classList.add("opacity-60");
    }
  });

  let displayText = coreValues.find((data) => data.letter === letter);
  displayText = displayText.text;

  let cvDef = document.querySelector("#cv-definition");

  cvDef.textContent = displayText;
}
