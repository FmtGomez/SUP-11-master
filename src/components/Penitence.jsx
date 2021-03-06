import React from "react";
import { connect } from "react-redux";

const Penitence = function ({ penitence, removePenitence }) {
   return (
        <section>
            <h2>Penitence</h2>

           <div className="penitence">

                {penitence?.map(member => (
                    <article className="m-penit" key={member.id}>


                        <div>

                            <img src={member.photo} alt={member.name}></img>

                            <button onClick={() => removePenitence(member)}>X</button>

                        </div>
                        
                        <span>{member.name}</span>
                    
                    </article>

                ))}
           </div>

         
        </section>
    )
}
const mapStateToProps = state => ({
    penitence: state.penitence
})


const mapDispatchToProps = dispatch =>({
    removePenitence(member){
        dispatch({
            type: "REMOVE_PENITENCE",
            member
        })
    }
})



export default connect(mapStateToProps,mapDispatchToProps) (Penitence)