import {useState} from 'react' 

function Accardion({title, text}){
    const [show , setShow] = useState(false)
    return(
        <div className='accardion'>
            <div className='accardion-header'>
                <h2>{title}</h2>
                <button className='show-btn' onClick={()=> setShow(!show)}>{show ? "🔽" : "▶️"}</button>
            </div>
            {
                show && <p>{text}</p>
            }
        </div>
    )
}
export default Accardion;