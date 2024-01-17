const eventlist = [
  {
    Title: "Robowars",
    Date: "Mar 14th, 2024",
    Location: "TBD",
    Type: "Competition",
    Time: "9:00-17:00",
    Description:
      "Robowars is a competitive robotic event that invites passionate and enthusiastic participants from all over Montreal and beyond to showcase their engineering skills.",
    Price: "TBD",
    Organizer: "Ardalan Jamshidi",
    Sponsors: "TBD",
    Image: "Robowars.webp",
    link: "robowars",
  },
  {
    Title: "Warhacks",
    Date: "Feb 18th, 2024",
    Location: "TBD",
    Type: "Competition",
    Time: "TBD",
    Description:
      "Warhacks is a one-day event designed to introduce you to the world of hardware hackathon. Come spend the day with us, and you will get to build your robot from scratch.",
    price: "TBD",
    Organizer: "Minh Huynh",
    Sponsors: "TBD",
    Image: "Warhacks.webp",
    link: "warhacks",
  },

  {
    Title: "Intro to Lab Equipements",
    Date: "Sep 14th, 2023",
    Location: "B-Annex 204",
    Type: "PASSED",
    Time: "18:00-21:00",
    Description:
      "Boost your electrical engineering knowledge with our tutorial tailored to ELEC 273 and ELEC 311, and excel in your coursework.",
    Price: "$10 CAD",
    Organizer: "Alexandre Fontaine",
    Sponsors: "TBD",
    Image: "Intro-to-lab-equipement-2.png",
    link: "intro-to-lab-equipement",
  },

  {
    Title: "IEEE Day",
    Date: "Oct 3rd, 2023",
    Location: "TBD",
    Type: "PASSED",
    Time: "TBD",
    Description:
      "IEEE Day is an annual celebration of IEEE around the world that recognizes and acknowledges the dedication and vision of IEEE.",
    Price: "TBD",
    Organizer: "Shami Ivan Senga",
    Sponsors: "TBD",
    Image: "IEEE-Day.webp",
    link: "ieee-day",
  },
  {
    Title: "Intro to Matlab",
    Date: "Oct 5th, 2023",
    Location: "MB - S1.435",
    Type: "PASSED",
    Time: "18:00-20:00",
    Description:
      "Unlock MATLAB's potential in our interactive workshop! Learn the basics, from navigating the interface to data visualization, with giveaways and free refreshments. Perfect for students or anyone curious about MATLAB.",
    Price: "TBD",
    Organizer: "Ngoc Son (Samuel) Tran",
    Sponsors: "TBD",
    Image: "Intro-to-Matlab.webp",
    link: "intro-to-matlab",
  },
  {
    Title: "Intro to Soldering",
    Date: "Oct 19th, 2023",
    Location: "MB - 3.255",
    Type: "PASSED",
    Time: "14:00-16:00",
    Description:
      "Explore the fundamentals of soldering with our easy-to-follow tutorial. Learn how to create secure connections for various applications.",
    Price: "TBD",
    Organizer: "Alexandre Fontaine",
    Sponsors: "TBD",
    Image: "Intro-to-Soldering.webp",
    link: "soldering-tutorial",
  },
  {
    Title: "3D Modeling and Design P2",
    Date: "Oct 26th, 2023",
    Location: "MB - 3.255",
    Type: "PASSED",
    Time: "18:00-21:00",
    Description:
      "Embark on a journey to master 3D modeling in our beginner's workshop and learn the skill used by designers, engineers, and artists worldwide",
    Price: "TBD",
    Organizer: "Alexandre Fontaine",
    Sponsors: "TBD",
    Image: "3D-Modeling-and-Design.webp",
    link: "3d-modeling-and-design",
  },
  {
    Title: "IEEEXtreme",
    Date: "Oct 28th, 2023",
    Location: "TBD",
    Type: "PASSED",
    Time: "TBD",
    Description:
      "IEEEXtreme is a global 24-hour marathon during which teams of three or four programmers are given a set of programming questions to solve.",
    Price: "TBD",
    Organizer: "Ardalan Jamshidi",
    Sponsors: "TBD",
    Image: "IEEEXtreme.webp",
    link: "ieeextreme",
  },
  {
    Title: "Intro to Material Selection",
    Date: "Nov 9th, 2023",
    Location: "H-529",
    Type: "PASSED",
    Time: "18h-21h",
    Description:
      "Learn how to select the right material for your project and how to use it properly.",
    Price: "Free",
    Organizer: "Alexandre Fontaine",
    Sponsors: "TBD",
    Image: "Intro-to-material-selection.png",
    link: "intro-to-material-selection",
  },
  {
    Title: "Robowars Info Session",
    Date: "Nov 15th, 2023",
    Location: "H-655.02",
    Type: "PASSED",
    Time: "12h-13h",
    Description:
      "Learn more about Robowars, the biggest robotics competition in Montreal! ",
    Price: "Free",
    Organizer: "Ardalan Jamshidi",
    Sponsors: "TBD",
    Image: "robowars-info-session.webp",
    link: "robowars-info-session",
  },
  {
    Title: "Intro to Microcontrollers",
    Date: "Nov 23rd, 2023",
    Location: "H-537",
    Type: "PASSED",
    Time: "18h-21h",
    Description:
      "Discover the magic of microcontrollers in our beginner-friendly workshop! Unleash your creativity and bring your electronic projects to life.",
    Price: "20$ CAD",
    Organizer: "Alexandre Fontaine",
    Sponsors: "TBD",
    Image: "Intro-to-Microcontrollers.webp",
    link: "intro-to-microcontrollers",
  },
];

function sortEventsByDate(events) {
  return events.sort((a, b) => {
    // Convert the date strings to Date objects
    const dateA = new Date(
      a.Date.replace("th", "")
        .replace("rd", "")
        .replace("st", "")
        .replace("nd", "")
    );
    const dateB = new Date(
      b.Date.replace("th", "")
        .replace("rd", "")
        .replace("st", "")
        .replace("nd", "")
    );

    // Compare the Date objects
    return dateA - dateB;
  });
}

function sortEventsByDateDescending(events) {
  return events.sort((a, b) => {
    const dateA = new Date(
      a.Date.replace("th", "")
        .replace("rd", "")
        .replace("st", "")
        .replace("nd", "")
    );
    const dateB = new Date(
      b.Date.replace("th", "")
        .replace("rd", "")
        .replace("st", "")
        .replace("nd", "")
    );

    // Compare the Date objects in descending order
    return dateB - dateA;
  });
}

function splitAndSortEvents(events) {
  const today = new Date();

  // Split the events into upcoming and passed events
  const upcomingEvents = events.filter(
    (event) =>
      new Date(
        event.Date.replace("th", "")
          .replace("rd", "")
          .replace("st", "")
          .replace("nd", "")
      ) >= today
  );
  const passedEvents = events.filter(
    (event) =>
      new Date(
        event.Date.replace("th", "")
          .replace("rd", "")
          .replace("st", "")
          .replace("nd", "")
      ) < today
  );

  // Sort each group separately
  const sortedUpcomingEvents = sortEventsByDate(upcomingEvents);
  const sortedPassedEvents = sortEventsByDateDescending(passedEvents);

  // Concatenate the two groups
  return { sortedUpcomingEvents, sortedPassedEvents };
}

export { eventlist, sortEventsByDateDescending, splitAndSortEvents };
