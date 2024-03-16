import { Col, Image } from "react-bootstrap"


export default function () {
    return (
        <div style={{width:"100%", display:"flex",alignItems:"center", justifyContent:"center", paddingTop: "1rem"}}>
            <div className="colum col-md-6" style={{ width: "50%", height: "550px", padding: 50, justifyContent: "center", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundImage: "url(/images/background/rascunho.png)" }}>
                <h1 style={{width:"auto", alignItems:"center", justifyContent:"center"}}>Crie sua historia:</h1>
                <div className="col-md-6" style={{display:"flex", alignItems: "center", justifyContent: "center" }}>
                    <input style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background:"#beaa6e", border:"1.5rem"}} />
                </div>
            </div>
        </div>


    )
}