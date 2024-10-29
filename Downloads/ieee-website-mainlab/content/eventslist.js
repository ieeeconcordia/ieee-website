function sortEventsByDate(events) {
  return events.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });
}

function sortEventsByDateDescending(events) {
  return events.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });
}

function splitAndSortEvents(events) {
  const today = new Date();

  const timezoneOffset = today.getTimezoneOffset() * 60 * 1000;

  const upcomingEvents = events.filter((event) => {
    let temp = new Date(Date.parse(event.date) - timezoneOffset);
    temp.setDate(temp.getDate() + 1);
    temp.setHours(temp.getHours() + 5);
    return temp >= today;
  });
  const passedEvents = events.filter(
    (event) => new Date(Date.parse(event.date) - timezoneOffset) < today
  );

  const sortedUpcomingEvents = sortEventsByDate(upcomingEvents);
  const sortedPassedEvents = sortEventsByDateDescending(passedEvents);

  return { sortedUpcomingEvents, sortedPassedEvents };
}

export { sortEventsByDateDescending, splitAndSortEvents };
