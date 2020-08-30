import React from 'react';

import './skill-item.styles.scss';

const SkillItem = ({name, value}) => {
  

    return(
        <div class="container">  
            <div>
                {name}
            </div>  
           
        </div>
    )
}

export default SkillItem;