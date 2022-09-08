import { useParams } from "react-router-dom";

const CrewDetail = () => {

    const params = useParams().crewId
    // console.log(params)

    return(
        <div>
            <h1>크루 디테일 페이지입니다.</h1>
            <h2>{params}번째 크루디테일 페이지입니다.</h2>
        </div>
    );
}

export default CrewDetail;