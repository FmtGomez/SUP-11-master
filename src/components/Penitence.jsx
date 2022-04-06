import React from "react";

const Penitence = function ({ penitence, removePenitence }) {
    (
        <section>
            <h2>Penitence</h2>
            <div>

                {penitence.map(member => {
                    <article className="penitence" key={member.id}>


                        <div>

                            <img src={member.photo} alt={member.name}></img>

                            <button onClick={() => removePenitence(member)}>X</button>

                        </div>
                        
                        <span>{member.name}</span>
                    
                    </article>

                })}

            </div>
        </section>
    )
}