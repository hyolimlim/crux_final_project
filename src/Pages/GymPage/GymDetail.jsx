import { useParams } from "react-router-dom";


const GymDetail = () => {

const params = useParams().gymId
console.log(params)

    return(
        <div>
            <h1>{params}번째 Gym detail페이지입니다.</h1>
        </div>
    );
}

export default GymDetail;