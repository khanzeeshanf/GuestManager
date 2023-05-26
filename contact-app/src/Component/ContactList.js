import React from "react";
import ContactCard from "./ContactCard";
function ContactList(props)
{
    const contactsdd = [{
        id:1,
        "name":'Zeeshan', 
        "email":'Zk@test.com',
        "mobile":'8976rg7867'
    }]

    const renderContact = props.contacts.map((contact)=>{
        return(
            
            <ContactCard contact={contact}/>
        )
    })
    return(
        <div style={{ border: '1px solid #000' }}>
            <h2>Guest List</h2>
            {renderContact}
        </div>
    );

}

export default ContactList