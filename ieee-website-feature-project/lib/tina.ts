"use client";
import client from "@/tina/__generated__/client";
import { useState, useEffect, SetStateAction } from "react";

type EventProps = {
  _id: string;
  title: string;
  date: string;
  location: string;
  time: string;
  description: string;
  price: number;
  image: string;
  organizer: string;
  eventType: string;
  sponsors?: string;
  tags?: string;
  link: string;
};

function date_format(datestr: string) {
  const date = new Date(datestr);

  const day = date.getUTCDate(); // returns the day of the month (from 1 to 31)
  const month = date.getUTCMonth() + 1; // returns the month (from 0 to 11, so add 1 to get from 1 to 12)
  const year = date.getUTCFullYear(); // returns the year

  // Pad the day and month with a leading zero if they are less than 10
  const formattedDay = String(day).padStart(2, "0");
  const formattedMonth = String(month).padStart(2, "0");

  // Construct the formatted date string
  return `${year}-${formattedMonth}-${formattedDay}`;
}

export async function getEvents() {
  const eventResponse = await client.queries.eventConnection();
  const events = eventResponse.data?.eventConnection.edges;
  if (!events) return;
  // Check if event and event.node are not null before type conversion
  const eventArray: any[] = [];
  events.forEach((event) => {
    if (event && event.node) {
      let date = date_format(event.node.date);
      let temp = {
        _id: event.node.id,
        title: event.node.title,
        date: date,
        location: event.node.location,
        time: event.node.time,
        description: event.node.description,
        price: event.node.price,
        image: event.node.image,
        organizer: event.node.organizer,
        eventType: event.node.type,
        sponsors: event.node.sponsors,
        tags: "",
        link: event.node._sys.filename,
      };
      eventArray.push(temp);
    }
  });

  return eventArray;
}

export async function getMembers() {
  const memberResponse = await client.queries.memberConnection();
  const members = memberResponse.data?.memberConnection.edges;
  if (!members) return;
  // Check if member and member.node are not null before type conversion
  const memberArray: any[] = [];
  members.forEach((member) => {
    if (member && member.node) {
      let temp = {
        _id: member.node.id,
        name: member.node.name,
        role: member.node.role,
        image: member.node.image,
        linkedin: member.node.linkedin,
        github: member.node.github,
        email: member.node.email,
        program: member.node.program,
      };
      memberArray.push(temp);
    }
  });

  return memberArray;
}


export async function getProjects() {
  const projectResponse = await client.queries.projectsConnection();
  const projects = projectResponse.data?.projectsConnection.edges;
  if (!projects) return;

  const projectArray: any[] = [];
  projects.forEach((project) => {
    if (project && project.node) {
      let temp = {
        _id: project.node.id,
        title: project.node.title,
        leader: project.node.leader,
        startdate: project.node.startdate,
        body: project.node.body,
        image: project.node.image,
        level: project.node.level,
        enddate: project.node.enddate,
        link: project.node._sys.filename,
      };
      projectArray.push(temp);
    }
  });

  return projectArray;
}

