import { Link } from "react-router-dom"
import { CardBox, Title, Cover } from "../../Games/Cards/Card-styles"
import { Btn } from "../../Button/Button-styles"

export const CardNews = ({news}) =>{
    
    return(
      <>
        <CardBox>
            <Cover src={news.cover}/>
            <Title>{news.title}. </Title>
            <Btn>
              <a href={news.url} target="_blank" ><button >Read</button></a>
            </Btn>
            <div>
            </div>
        </CardBox>
      </>
    )
}