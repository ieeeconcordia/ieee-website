function sortProjectsByDate(projects) {
  return projects.sort((a, b) => {
    // Convert the date strings to Date objects
    const dateA = new Date(a.startdate);
    const dateB = new Date(b.startdate);

    // Compare the Date objects
    return dateA - dateB;
  });
}

function sortProjectsByDateDescending(projects) {
  return projects.sort((a, b) => {
    const dateA = new Date(a.startdate);
    const dateB = new Date(b.startdate);

    // Compare the Date objects in descending order
    return dateB - dateA;
  });
}

function splitAndSortProjects(projects) {
  const today = new Date();

  // Get the timezone offset in minutes
  const timezoneOffset = today.getTimezoneOffset() * 60 * 1000;

  // Split the projects into upcoming and passed projects

  const upcomingProjects = projects.filter((project) => {
    let temp = new Date(Date.parse(project.date) - timezoneOffset);
    temp.setDate(temp.getDate() + 1);
    temp.setHours(temp.getHours() + 5);
    return temp >= today;
  });
  console.log("upcomingProjects", upcomingProjects)
  const passedProjects = projects.filter(
    (event) => new Date(Date.parse(event.date) - timezoneOffset) < today
  );

  // Sort each group separately
  const sortedUpcomingProjects = sortProjectsByDate(upcomingProjects);
  const sortedPassedProjects = sortProjectsByDateDescending(passedProjects);

  // Concatenate the two groups
  return { sortedUpcomingProjects, sortedPassedProjects };
}

export { sortProjectsByDateDescending, splitAndSortProjects };
