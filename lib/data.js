const img = (id, w, h) => `https://framerusercontent.com/images/${id}?width=${w}&height=${h}`;

export const site = {
  name: "Ankush",
  email: "aroraankush900@gmail.com",
  phone: "+91 93068-77908",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ankush-arora/" },
    { label: "Instagram", href: "https://www.instagram.com/ankush.uiux/" },
    { label: "Medium", href: "https://medium.com/@Ankush.A" },
    { label: "Framer", href: "https://framer.link/vpTFQnr" },
  ],
  portrait: img("MwI1gkAGwreA5quIeBzP9U3fFe0.png", 1946, 2087),
};

export const marquee = [
  img("HGLu8oFYe2Ecjc2KJndy5r8sk4.png", 807, 1024),
  img("0y3gUXsL1hQ37y9WnMZtCbkersg.png", 512, 417),
  img("PzcxgHBpS8ccCpz97iMI8zM0dIk.png", 1800, 1351),
  img("zcSolHsipaOnlGuyogDRULTars.jpg", 750, 1000),
  img("hLTs8HBPjWhmtrJGELCXMrw1nHQ.png", 647, 724),
  img("HXGccapp9nAKg4lSCT3ZlKBQhU.png", 800, 600),
  img("aJrWlkWZjifb2af8RyDeL1io4hQ.png", 807, 1024),
  img("tpmxk3Q18JM8vGpTuN8SlROV3Y.png", 512, 373),
];

export const writing = [
  img("4bN5elIbmkyA3Hxf0EDHIzfvNU.webp", 1100, 619),
  img("UyymGCALO109QU1Q2m6lFe2KI.webp", 1100, 618),
  img("z3Lt9NIC7jUwQIpfa5IXGvgPw.webp", 1100, 619),
  img("hesPisP2alyl7XKiRW19Q6oShM.webp", 1100, 618),
];

export const services = ["Product design", "Branding", "Web & App Design"];

export const projects = [
  {
    slug: "blinds-uk",
    title: "Blinds – E-commerce Website",
    tags: ["UI design", "Shopify Liquid"],
    image: "https://framerusercontent.com/images/KOvL1QcHKFQALjM5n9aAgVcB3o.png?width=1800&height=1351",
    intro: "Designed and contributed to the UI development of an e-commerce website for a UK-based blinds business offering a wide range of window blinds across different styles and categories.",
    problem: "The client needed a user-friendly online store to showcase multiple types of blinds while ensuring a smooth shopping experience and clear product discovery for customers.",
    solution: "I designed a clean and conversion-focused UI and assisted in development using Shopify Liquid. The structure was optimized to handle multiple product categories while maintaining consistency and ease of navigation.",
    features: [
      "Structured product categorization for various blind types",
      "Clean, conversion-focused UI design",
      "Shopify Liquid-based custom theme development",
      "Optimized user flow for browsing and purchasing",
      "Fully responsive across devices",
    ],
    outcome: "Delivered a seamless e-commerce experience that improves product visibility and supports better customer engagement and conversions.",
  },
  {
    slug: "finance-consult",
    title: "Finance & Consulting Website (UK)",
    tags: ["Web design", "React-compatible theme"],
    image: "https://framerusercontent.com/images/EjCSzm26i6xnvHAcaQHXy5hH48.png?width=1800&height=1351",
    intro: "Designed a professional website for a UK-based finance consultancy firm offering services similar to Chartered Accountants, covering taxation, financial advisory, and business consulting.",
    problem: "The client needed a trustworthy and modern digital presence that communicates credibility while clearly presenting complex financial services to a wide audience.",
    solution: "I created a clean, structured interface focused on clarity and professionalism. The design simplifies financial information, making it easy for users to understand services and take action. Built with a scalable and React-compatible framework, ensuring smooth performance and future flexibility.",
    features: [
      "Clear service segmentation (tax, consulting, advisory)",
      "Professional and minimal UI to build trust",
      "User-focused layout for easy navigation",
      "Fully responsive across all devices",
      "Scalable theme compatible with modern frontend technologies",
    ],
    outcome: "Delivered a polished and reliable website that strengthens brand credibility and improves user engagement for financial services.",
  },
  {
    slug: "servicenow-ds",
    title: "ServiceNow Solutions – Dotsquares",
    tags: ["Research", "UI design", "Development"],
    image: "https://framerusercontent.com/images/ZIQtIEtqsOIibsEg05ido0pogU.png?width=1800&height=1350",
    intro: "This project focused on designing and developing the official ServiceNow solutions page for DotSquares, aimed at increasing user engagement and clearly communicating the company's expertise in ServiceNow services.",
    body: [
      "I was responsible for the complete product journey, from initial research and user understanding to wireframing, UI design, and final development. The goal was to create a structured and compelling experience that highlights key offerings, builds trust, and guides potential clients toward taking action.",
      "Through thoughtful UX decisions and a clean visual approach, the page effectively showcases DotSquares' capabilities in ServiceNow while maintaining clarity and ease of navigation. I also implemented the design to ensure a seamless and responsive user experience across devices.",
    ],
  },
  {
    slug: "qworship",
    title: "QWorship",
    tags: ["UX", "AI", "React"],
    image: marquee[2],
    intro: "QWorship is a web platform designed to enhance digital worship experiences through AI. The goal was to create an intuitive and engaging interface that allows users to explore faith-based content and receive guidance rooted in the Bible.",
    body: [
      "My role involved leading the end-to-end UX process, including user research, information architecture, and interface design. I translated user needs and client requirements into a seamless experience focused on clarity, accessibility, and emotional connection.",
      "The platform integrates an AI system that provides scripture-based responses, helping users find answers, reflect, and stay encouraged in their spiritual journey. After designing the experience, I implemented the frontend using React, ensuring the final product aligned closely with the design vision and performed smoothly across devices.",
    ],
  },
];

const W = [275, 300, 380, 285, 245, 427, 275, 300];
export const heroImages = marquee.map((src, i) => ({ src, w: W[i] }));
export const writing2 = [
  img("hesPisP2alyl7XKiRW19Q6oShM.webp", 1100, 618),
  img("2iXHpLwhHVNbLhnlGkpvU4vSiQ.webp", 1100, 618),
  img("wVMUdl4V0yTJtdOV1Gtyt7B3I.webp", 1100, 550),
  img("z3Lt9NIC7jUwQIpfa5IXGvgPw.webp", 1100, 619),
];
