import React from 'react'

// "...props" == "Forwarding Props"
const Section = ({title, children, ...props}) => {
    return (
      // Spread operator to spread 
      <section {...props}>
        <h2>{title}</h2>
        {children}        
      </section>

    );
}

export default Section;
