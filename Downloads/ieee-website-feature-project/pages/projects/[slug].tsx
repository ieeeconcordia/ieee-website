import { useState, useEffect } from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import { useTina } from "tinacms/dist/react";
import moment from "moment";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";
import { IoArrowForward, IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

export default function Projects(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchGalleryImages = async () => {
    try {
      const imagePaths = data?.projects?.gallery || [];
      setGalleryImages(imagePaths);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  const handleSeeMoreClick = async () => {
    await fetchGalleryImages();
    setShowGallery(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (showGallery && galleryImages.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [showGallery, galleryImages]);

  if (!data?.projects) {
    return <div>Error: Project data is missing!</div>;
  }

  const startDate = data.projects.startdate
    ? moment(data.projects.startdate).format("MMMM Do, YYYY")
    : "Start date not available";
  const endDate = data.projects.enddate
    ? moment(data.projects.enddate).format("MMMM Do, YYYY")
    : null;

  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          {data.projects.title}
        </h1>
      </div>

      <div className={styles.markdown}>
        <img
          src={data.projects.image}
          alt={data.projects.title}
          className="w-full h-auto object-contain max-h-96"
        />

        <div className="bg-gray-100 p-4 my-4 rounded-md shadow-md">
          <ul className="list-disc pl-5">
            <li><strong>Date:</strong> {startDate}</li>
            {endDate && <li><strong>End Date:</strong> {endDate}</li>}
            {data.projects.leader && (
              <li><strong>Project Leader:</strong> {data.projects.leader}</li>
            )}
            {data.projects.level && (
              <li><strong>Level:</strong> {data.projects.level}</li>
            )}
          </ul>
        </div>

        <TinaMarkdown content={data.projects.body} />

        {showGallery && galleryImages.length > 0 && (
  <div className="fixed inset-0 flex justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
    <div className="relative w-auto h-auto max-w-full max-h-full flex justify-center items-center">
      <img
        src={galleryImages[currentImageIndex]}
        alt={`Gallery Image ${currentImageIndex + 1}`}
        className="object-contain max-w-full max-h-full"
        style={{ width: "auto", height: "auto", transform: "scale(2)" }}  // Magnifies the image by 10%
      />
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl"
        onClick={handlePrevImage}
      >
        <IoArrowBackCircle />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl"
        onClick={handleNextImage}
      >
        <IoArrowForwardCircle />
      </button>
      <button
        className="absolute top-1  right-1  p-2 text-black p-2"
        onClick={() => setShowGallery(false)}
        style={{ backgroundColor: 'white' }}
      >
        Close
      </button>
    </div>
  </div>
)}


      </div>

      <div className="flex justify-center mt-[-20px]">
        <div
          className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-cyan-400 to-sky-400 rounded p-4 text-lg"
          onClick={handleSeeMoreClick}
        >
          <IoArrowForward size={52} color="white" />
          <span className="text-white">See More</span>
        </div>
      </div>

      {/* Empty div to add space before the footer */}
      <div className="my-12"></div>
    </RootLayout>
  );
}

export const getStaticProps = async ({ params }: any) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.slug}.md` };

  try {
    const res = await client.queries.projects(variables);
    query = res.query;
    data = res.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  return {
    props: {
      variables,
      data,
      query,
    },
  };
};

export const getStaticPaths = async () => {
  const projectsListData = await client.queries.projectsConnection();

  return {
    paths: projectsListData.data.projectsConnection?.edges?.map((project) => ({
      params: { slug: project?.node?._sys.filename },
    })),
    fallback: false,
  };
};
/*
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import { useTina } from "tinacms/dist/react";
import moment from "moment";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";
import { IoArrowForward, IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

export default function Projects(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchGalleryImages = async () => {
    try {
      const imagePaths = data?.projects?.gallery || [];
      setGalleryImages(imagePaths);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  const handleSeeMoreClick = async () => {
    await fetchGalleryImages();
    setShowGallery(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (showGallery && galleryImages.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [showGallery, galleryImages]);

  if (!data?.projects) {
    return <div>Error: Project data is missing!</div>;
  }

  const startDate = data.projects.startdate
    ? moment(data.projects.startdate).format("MMMM Do, YYYY")
    : "Start date not available";
  const endDate = data.projects.enddate
    ? moment(data.projects.enddate).format("MMMM Do, YYYY")
    : null;

  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          {data.projects.title}
        </h1>
      </div>

      <div className={styles.markdown}>
        <img
          src={data.projects.image}
          alt={data.projects.title}
          className="w-full h-auto object-contain max-h-96"
        />

        <div className="bg-gray-100 p-4 my-4 rounded-md shadow-md">
          <ul className="list-disc pl-5">
            <li><strong>Date:</strong> {startDate}</li>
            {endDate && <li><strong>End Date:</strong> {endDate}</li>}
            {data.projects.leader && (
              <li><strong>Project Leader:</strong> {data.projects.leader}</li>
            )}
            {data.projects.level && (
              <li><strong>Level:</strong> {data.projects.level}</li>
            )}
          </ul>
        </div>

        <TinaMarkdown content={data.projects.body} />

        {showGallery && galleryImages.length > 0 && (
          <div className="fixed inset-0 flex justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="relative w-auto h-auto max-w-full max-h-full flex justify-center items-center">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                className="object-contain max-w-full max-h-full"
                style={{ width: "auto", height: "auto", transform: "scale(1.2)" }}  // Slight zoom
              />
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl"
                onClick={handlePrevImage}
              >
                <IoArrowBackCircle />
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl"
                onClick={handleNextImage}
              >
                <IoArrowForwardCircle />
              </button>
              <button
                className="absolute top-2 right-2 p-2 text-black rounded bg-white"
                onClick={() => setShowGallery(false)}
                style={{ backgroundColor: 'white' }}  // Ensures white background
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>

      <div className="flex justify-center mt-[-20px]">
        <div
          className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-cyan-400 to-sky-400 rounded p-4 text-lg"
          onClick={handleSeeMoreClick}
        >
          <IoArrowForward size={52} color="white" />
          <span className="text-white">See More</span>
        </div>
      </div>

      {/* Empty div to add space before the footer }
      <div className="my-12"></div>
    </RootLayout>
  );
}

export const getStaticProps = async ({ params }: any) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.slug}.md` };

  try {
    const res = await client.queries.projects(variables);
    query = res.query;
    data = res.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  return {
    props: {
      variables,
      data,
      query,
    },
  };
};

export const getStaticPaths = async () => {
  const projectsListData = await client.queries.projectsConnection();

  return {
    paths: projectsListData.data.projectsConnection?.edges?.map((project) => ({
      params: { slug: project?.node?._sys.filename },
    })),
    fallback: false,
  };
};
*/