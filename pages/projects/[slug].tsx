import { useState, useEffect } from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import { useTina } from "tinacms/dist/react";
import moment from "moment";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { IoArrowForward, IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

export default function Projects(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log("Fetched project data:", data);
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

  // Safeguard: Ensure data.projects exists before accessing fields
  if (!data?.projects) {
    return <div>Error: Project data is missing!</div>;
  }

  // Formatting the start and end dates for display
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
    
      <div className={styles.markdown }>
        <div className="flex justify-center items-center w-full">
        <img
          src={data.projects.image}
          alt={data.projects.title}
          style={{
            margin: '0 auto',
            width: 'auto',
            height: 'auto',
            maxWidth: '60%', 
            maxHeight: '400px', 
          }}
        />
        </div>
      <div className={styles.normalFontLi}>
          <ul className="list-disc pl-5">
            {/* Ensure each list item has a unique key to avoid the warning */}
            <li key="Duration">
              <strong>Duration:</strong> {startDate} {endDate && `to ${endDate}`}</li>
            {data.projects.level && (
              <li key="level"> <strong>Level:</strong> {data.projects.level}</li>
            )}
          </ul>
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
            )
          }
          <>
          {!showGallery && (
          <li className={`${styles.noBullet} ${styles.rowItems}`} key="gallery" onClick={handleSeeMoreClick}>
            <strong>Gallery:</strong>
            <span className="text-lg md:text-xl font-semibold text-white">See More</span>
            <IoArrowForward size={25} color="white" />
          </li>
      )}
             {!showGallery && (
            <a href={data.projects.blogLink} className={`${styles.noBullet} ${styles.rowItems} mb-5`} style={{ background: "#303030" }}>
            <strong className=" text-lg md:text-xl font-semibold">Blogs:</strong>
            <span className="text-lg md:text-xl font-semibold text-white">See More</span>
            <IoArrowForward size={25} color="white" />
            </a>
          )}
          </>

        {!showGallery && (
          <ul className={styles.bottomContainer}>
            {data.projects.leader && (
              <>
                <li className={styles.noBullet} key="anotherItem">
                  <Link
                    href={data.projects.link}
                    className="w-fit flex flex-row gap-2 justify-center items-center text-white bg-discord px-5 py-2 rounded-md shadow-md hover:shadow-lg text-2xl"
                  >
                    <BsDiscord className="text-4xl" color="#ffffff" />
                    Join this Project!
                  </Link>
                </li>
                <li className={styles.noBullet} key="leader">
                  <strong>Project by:</strong> {data.projects.leader}
                </li>
              </>
            )}
          </ul>
        )}
      </div>


    </div>
    
  </RootLayout>
  );
}

// Static props and paths remain unchanged
export const getStaticProps = async ({ params }: any) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.slug}.md` };

  try {
    // Use the correct query (projects) to fetch the single project
    const res = await client.queries.projects(variables);
    query = res.query;
    data = res.data;

    // Log the full response to see if 'projects' is defined
    console.log("Fetched data in getStaticProps:", res);

  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  return {
    props: {
      variables,
      data, // Pass the single project data as a JSON serializable object
      query,
    },
  };
};

export const getStaticPaths = async () => {
  // Fetch the project slugs for generating the paths
  const projectsListData = await client.queries.projectsConnection();

  return {
    paths: projectsListData.data.projectsConnection?.edges?.map((project) => ({
      params: { slug: project?.node?._sys.filename }, // Ensure the slug matches the file name
    })),
    fallback: false, // `false` means non-existent pages return 404
  };
};
