import React from "react";
import { connect } from "react-redux";
import sala from "../components/imagenLobby.png"

const Sup = function({sup, removeSup}){
   return  (
        <section>
            <h2>Sup</h2>
            <div>

                {sup?.map((member) =>{
                    <article className="sup" key ={member.id}>
                        <div>
                            <img src={member.photo} alt={member.name}/>
                            <button onClick={()=>removeSup(member)}>X</button>
                        </div>
                        <span>{member.name}</span>

                    </article>


                })}


                        <img src={sala}/>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    sup : state.sup
})

const mapDispatchToProps = dispatch =>({
    removeSup(member){
        dispatch({
            type:"REMOVE_SUP",
            member
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Sup)