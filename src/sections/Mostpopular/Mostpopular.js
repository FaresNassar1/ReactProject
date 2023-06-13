import "./Mostpopular.css";
import MostPopularData from "../../Data/MostPopularData";
import {Card,SectionHeader,SectionWrapper} from "../../Components/index";


const Mostpopular = () => {
  const cards =MostPopularData.map(card =>{

return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>

  })
  return (
    <>
<SectionWrapper>
<SectionHeader>Most popular</SectionHeader>
        <div className="most-popular-items">
       {cards}
        </div>
        </SectionWrapper>
    </>
  );
};

export default Mostpopular;
