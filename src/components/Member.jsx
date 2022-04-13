import React from "react";
import { connect } from "react-redux";

const Members = function({members,addSup,addPenitence}){
   return (
        <section>
            <h2>Members</h2>
            <div className="contenedor-members">
            
                {members? members.map((member) =>(
                    <article className="member" key={member.id} >
                        <div >
                            <img src={member.photo} alt={member.name} />
                            <button onClick={()=>addSup(member)}>Sup</button>
                            <button onClick={()=>addPenitence(member)}>Penitence</button>
                        </div>
                        <span>{member.name}</span>
                    </article>
                )):null}
            </div>
        </section>
    )
}

const mapStateToProps = state =>({
    members: state.members
})

const mapDispatchToProps = dispatch =>({
    addSup(member){
        dispatch({
            type: "ADD_SUP",
            member
        })
    },
    addPenitence(member){
        dispatch({
            type:"ADD_PENITENCE",
            member
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Members)