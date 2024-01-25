function sortEventsByDate(events) {
  return events.sort((a, b) => {
    // Convert the date strings to Date objects
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Compare the Date objects
    return dateA - dateB;
  });
}

function sortEventsByDateDescending(events) {
  return events.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Compare the Date objects in descending order
    return dateB - dateA;
  });
}

function splitAndSortEvents(events) {
  const today = new Date();

  // Get the timezone offset in minutes
  const timezoneOffset = today.getTimezoneOffset() * 60 * 1000;

  // Split the events into upcoming and passed events
  const upcomingEvents = events.filter((event) => {
    let temp = new Date(Date.parse(event.date) - timezoneOffset);
    temp.setDate(temp.getDate() + 1);
    temp.setHours(temp.getHours() + 5);
    return temp >= today;
  });
  const passedEvents = events.filter(
    (event) => new Date(Date.parse(event.date) - timezoneOffset) < today
  );

  // Sort each group separately
  const sortedUpcomingEvents = sortEventsByDate(upcomingEvents);
  const sortedPassedEvents = sortEventsByDateDescending(passedEvents);

  // Concatenate the two groups
  return { sortedUpcomingEvents, sortedPassedEvents };
}

export { sortEventsByDateDescending, splitAndSortEvents };
