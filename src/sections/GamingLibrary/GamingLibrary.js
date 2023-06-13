import "./GamingLibrary.css";
import {
  GamingLibraryCard,
  SectionHeader,
  SectionWrapper,
} from "../../Components/index";
import GamingLibraryData from "../../Data/GamingLibraryData";

const GamingLibrary = () => {
  const cards = GamingLibraryData.map((card) => {
    return (
      <GamingLibraryCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        data_added={card.date_added}
        hours={card.hours_played}
        downloaded={card.downloader}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">
          {cards}
        </div>
      </SectionWrapper>
    </>
  );
};

export default GamingLibrary;
