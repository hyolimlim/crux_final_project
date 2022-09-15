
const FontHightlight = ({onclickNewCrew}) => {
    return(
        <h3>
            <span style={{fontWeight:'700', margin:'0 4rem 0 0', borderBottom:'2px solid', padding:'0 0 1rem 0',color:'#999999'}}> 
                인기 크루 
            </span> 
            <span style={{color:'#999999'}} 
                onClick={onclickNewCrew}> 신규 크루 
            </span>
        </h3>
    )
}

const FontHightlight2 = ({onclickGetCrew}) => {
    return(
        <h3>
            <span style={{color:'#999999'}} onClick={onclickGetCrew}> 
                인기 크루 
            </span> 
            <span style={{fontWeight:'700', margin:'0 0 0 4rem', borderBottom:'2px solid', padding:'0 0 1rem 0',color:'#999999'}} 
                > 신규 크루 
            </span>
        </h3>
    )
}

export {FontHightlight, FontHightlight2 };