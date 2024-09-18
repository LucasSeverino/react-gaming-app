import React, { useState } from 'react'

interface Props {
     children: string;
     maxChars?: number;
}

const ExpandableText = ({children, maxChars = 100}: Props) => {

     const [isVisible, setVisibility] = useState(false);

     if (children.length <= maxChars) return <p>{children}</p>

     const text = isVisible ? children : `${children.substring(0, maxChars)}...`
     return (
     <>
          <p>{text}</p>
          <button onClick={() => setVisibility(!isVisible)}>{isVisible ? 'Less' : 'More'}</button>

          <p>Visible: {isVisible.toString()}</p>
     </>
     )
}

export default ExpandableText