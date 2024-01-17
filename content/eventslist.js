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

  // Split the events into upcoming and passed events
  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= today
  );
  const passedEvents = events.filter((event) => new Date(event.date) < today);

  // Sort each group separately
  const sortedUpcomingEvents = sortEventsByDate(upcomingEvents);
  const sortedPassedEvents = sortEventsByDateDescending(passedEvents);

  // Concatenate the two groups
  return { sortedUpcomingEvents, sortedPassedEvents };
}

export { sortEventsByDateDescending, splitAndSortEvents };
