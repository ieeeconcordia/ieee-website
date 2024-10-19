function sortProjectsByDate(projects) {
  return projects.sort((a, b) => {
    const dateA = new Date(a.startdate);
    const dateB = new Date(b.startdate);

    return dateA - dateB;
  });
}

function sortProjectsByDateDescending(projects) {
  return projects.sort((a, b) => {
    const dateA = new Date(a.startdate);
    const dateB = new Date(b.startdate);

    return dateB - dateA;
  });
}

function splitAndSortProjects(projects) {
  const today = new Date();

  const timezoneOffset = today.getTimezoneOffset() * 60 * 1000;


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

  const sortedUpcomingProjects = sortProjectsByDate(upcomingProjects);
  const sortedPassedProjects = sortProjectsByDateDescending(passedProjects);

  return { sortedUpcomingProjects, sortedPassedProjects };
}

export { sortProjectsByDateDescending, splitAndSortProjects };
